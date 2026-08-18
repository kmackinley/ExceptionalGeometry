#!/usr/bin/env python3
"""Validate public Exceptional Geometry constants and claim metadata."""
from __future__ import annotations

import json
import math
import pathlib
import sys
from typing import Any

import mpmath as mp

ROOT = pathlib.Path(__file__).resolve().parents[1]
CLAIMS_PATH = ROOT / "claims" / "claims.json"
README_PATH = ROOT / "README.md"
INDEX_PATH = ROOT / "index.html"


def assert_close(actual: float, expected: float, tolerance: float, label: str) -> None:
    if not math.isfinite(actual) or abs(actual - expected) > tolerance:
        raise AssertionError(f"{label}: expected {expected!r}, got {actual!r}")


def load_claims() -> dict[str, Any]:
    with CLAIMS_PATH.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def validate_math() -> None:
    mp.mp.dps = 50
    zeta_delta_0 = 240 * mp.zeta(0) * mp.zeta(-3)
    zeta_prime_minus_3 = mp.diff(lambda s: mp.zeta(s), -3)
    zeta_delta_prime_0 = mp.log(4 * mp.pi) - 120 * zeta_prime_minus_3
    det_prime = mp.e ** (-zeta_delta_prime_0)

    assert_close(float(zeta_delta_0), -1.0, 1e-14, "zeta_Delta(0)")
    assert_close(float(zeta_delta_prime_0), 1.8855950840363747, 1e-14, "zeta_Delta'(0)")
    assert_close(float(det_prime), 0.1517387352578082, 1e-14, "det' Delta")

    d, n_roots, rank, h = 248, 240, 8, 30
    v = 246.19
    higgs_mass = v * rank / math.sqrt(d)
    planck_mass = v * math.exp(4 * math.pi**2) / math.sqrt(rank)
    tensor_ratio = 1 / (n_roots * h / rank)

    assert_close(higgs_mass, 125.06464506470759, 1e-12, "Higgs relation")
    assert_close(planck_mass, 1.2161421327174728e19, 1e6, "Planck relation")
    assert_close(tensor_ratio, 1 / 900, 1e-16, "tensor ratio")

    fixed_points = {2: 2**8, 3: 3**4, 5: 5**2}
    if fixed_points != {2: 256, 3: 81, 5: 25}:
        raise AssertionError(f"fixed-point counts changed: {fixed_points}")


def validate_metadata(data: dict[str, Any]) -> None:
    allowed = set(data["allowed_statuses"])
    claims = data["claims"]
    ids = [claim["id"] for claim in claims]
    if len(ids) != len(set(ids)):
        raise AssertionError("duplicate claim id")

    for claim in claims:
        missing = {"id", "title", "track", "statement", "status", "scope", "source", "limitations"} - claim.keys()
        if missing:
            raise AssertionError(f"{claim.get('id', '<unknown>')} missing fields: {sorted(missing)}")
        if claim["status"] not in allowed:
            raise AssertionError(f"{claim['id']} uses invalid status {claim['status']!r}")
        if not isinstance(claim["limitations"], list):
            raise AssertionError(f"{claim['id']} limitations must be a list")

    claim_ids = set(ids)
    for observation in data.get("observations", []):
        linked = observation.get("claim_id")
        if linked and linked not in claim_ids:
            raise AssertionError(f"observation {observation['id']} links unknown claim {linked}")


def validate_public_text() -> None:
    combined = README_PATH.read_text(encoding="utf-8") + "\n" + INDEX_PATH.read_text(encoding="utf-8")
    banned = [
        "Every result is a prediction, not a fit",
        "all 26 parameters derived",
        "r = 1/300",
        "λ = 1/(2h)",
        "zeta derivative: 3.183",
        "Hubble constant: exact"
    ]
    for phrase in banned:
        if phrase in combined:
            raise AssertionError(f"superseded public phrase remains: {phrase}")

    required = [
        "125.0646",
        "1/900",
        "1.885595",
        "status",
        "not unique confirmation"
    ]
    lower = combined.lower()
    for phrase in required:
        if phrase.lower() not in lower:
            raise AssertionError(f"required public marker missing: {phrase}")


def main() -> int:
    data = load_claims()
    validate_math()
    validate_metadata(data)
    validate_public_text()
    print("Exceptional Geometry validation: PASS")
    print(f"Validated {len(data['claims'])} claims and {len(data.get('observations', []))} observations.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"Exceptional Geometry validation: FAIL: {exc}", file=sys.stderr)
        raise
