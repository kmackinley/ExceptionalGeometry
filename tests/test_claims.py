from __future__ import annotations

import importlib.util
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("validate_claims", ROOT / "scripts" / "validate_claims.py")
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


class ClaimIntegrityTests(unittest.TestCase):
    def test_math(self) -> None:
        MODULE.validate_math()

    def test_metadata(self) -> None:
        MODULE.validate_metadata(MODULE.load_claims())

    def test_public_text(self) -> None:
        MODULE.validate_public_text()


if __name__ == "__main__":
    unittest.main()
