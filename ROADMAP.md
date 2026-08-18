# Research Roadmap

## Priority 0 — Preserve integrity

- Keep `claims/claims.json` as the single status ledger.
- Version corrections in `ERRATA.md`.
- Record every new measurement in `OBSERVATION_LOG.md`, including whether the observable was known during construction.
- Generate public numbers from tested code rather than manual transcription.

## Priority 1 — Consolidate the mathematical core

### Spectral-zeta revision

- Publish a corrected derivative and determinant.
- State exactly what is proved for all dimensions and what is verified only through dimension 24.
- Add an independent numerical check of the analytic continuation.

### Coxeter fixed-point theorem

- Retain the determinant theorem as a standalone mathematical result.
- Separate the fixed-point computation from generation, chirality, and mass claims.
- Check the composite-divisor statements against the exact cyclotomic determinant formula.

### Matrix-brane obstruction

- Add the exact SymPy verification script, reference output, and environment lock file.
- Test the fixed rank certificate in CI.
- Extend the search to exceptional scalar modes and the full backreacting sector.

## Priority 2 — Define one physical model without treating the mathematical compactification as established ontology

Extend `MODEL_SCOPE.md` into a full model-definition paper resolving:

- whether the fundamental action contains a twelve-dimensional Einstein–Hilbert term;
- whether gravity is emergent from pure Yang–Mills or fundamental;
- whether the compact space is \(T^8/\Lambda_{E_8}\), \(T^8/W(E_8)\), or a sequence of distinct model geometries;
- the real form and representation content;
- boundary conditions, orbifold action, bundle data, and independent dimensional parameters;
- which manuscript supersedes each earlier variant.

## Priority 3 — Decisive proof obligations

1. Compute the equivariant Dirac index and physical chirality.
2. Verify normalized zero modes with a well-defined self-adjoint operator.
3. Derive the Higgs potential and quartic.
4. Construct a valid global instanton sector and modulus potential.
5. Derive CKM/PMNS matrices from overlap integrals.
6. Establish—or falsify—the strong-CP duality argument.

## Priority 4 — Prospective experimental tests

Freeze the following values without retuning:

- \(\sum m_\nu=61.02\) meV;
- normal neutrino ordering;
- \(r=1/900\);
- \(|V_{cb}|=0.04094\);
- \(m_H=125.0646\) GeV;
- \(g_A=4/\pi=1.2732395\ldots\);
- \(r_{K^\pm}=\sqrt2\,\hbar c/m_K\approx0.5656\) fm.

For each future result, publish the source, date, model dependence, deviation, and whether the test is genuinely prospective.
