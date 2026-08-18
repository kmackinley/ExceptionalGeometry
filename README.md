# Exceptional Geometry

**Exact mathematics, candidate physical models, and falsifiable tests built around exceptional symmetry.**

Exceptional Geometry studies exact structures associated with \(E_8\) and related matrix-gauge systems, then asks whether any of those structures can organize observed features of particle physics, gravity, and cosmology.

The mathematical results stand independently. The physical interpretations are hypotheses and are labeled accordingly. In particular, the Coxeter element and the associated torus are used as **mathematical tools** for symmetry, fixed-point, lattice, and spectral calculations. This repository does not claim that physical space or the universe is literally a Coxeter torus.

This repository separates:

- **mathematical theorems** proved within a stated model;
- **exact symbolic computations** with finite reproducibility certificates;
- **conditional physical derivations** that depend on field-theory and reduction assumptions;
- **phenomenological relations** that organize or reproduce measured quantities;
- **conjectures, known issues, and open proof obligations**.

The manuscripts are independent research and have not, unless explicitly noted, completed external peer review.

[Open the GitHub Pages research map](https://kmackinley.github.io/ExceptionalGeometry/) · [Read the papers](papers/README.md) · [Current status](STATUS.md) · [Observation log](OBSERVATION_LOG.md) · [Model scope](MODEL_SCOPE.md) · [Errata](ERRATA.md) · [Roadmap](ROADMAP.md)

---

## Status vocabulary

| Label | Meaning |
|---|---|
| **Theorem** | A mathematical proof is supplied under the definitions and assumptions of the cited work. |
| **Exact computation** | A finite symbolic or algebraic certificate is supplied and can be rerun. |
| **Conditional derivation** | The result follows if the stated physical model, normalization, and reduction assumptions hold. |
| **Phenomenology** | A numerical relation organizes or reproduces measurements; empirical inputs or calibration may be present. |
| **Conjecture** | A proposed relation whose decisive derivation remains open. |
| **Known issue** | A stated argument, normalization, or numerical value requires correction or revision. |

---

## Strongest current mathematical results

### 1. Spectral zeta factorization - **Theorem**

For the scalar Laplacian on \(\mathbb R^8/\Lambda_{E_8}\), with the zero mode excluded,

\[
\zeta_\Delta(s)=240(8\pi^2)^{-s}\zeta(s)\zeta(s-3).
\]

This gives

\[
\zeta_\Delta(0)=-1,
\qquad
\lambda_1=8\pi^2.
\]

The value \(\zeta_\Delta(0)=-1\) is not unique to \(E_8\). The \(E_8\) case is distinguished by minimal dimension, uniqueness of the even unimodular lattice in dimension eight, and the elementary factorization above.

The corrected derivative and determinant are

\[
\zeta_\Delta'(0)=1.885595084036\ldots,
\qquad
\det{}'\Delta=0.151738735258\ldots.
\]

### 2. Coxeter fixed-point counts - **Exact computation**

For the \(E_8\) Coxeter element acting on the lattice torus,

\[
|\operatorname{Fix}(\mathbb Z_2)|=256,
\qquad
|\operatorname{Fix}(\mathbb Z_3)|=81,
\qquad
|\operatorname{Fix}(\mathbb Z_5)|=25.
\]

These determinant counts are exact mathematical data. Using the three families as an organizing model for the three observed fermion generations is a separate physical hypothesis; it is not a claim that particles literally occupy locations on a torus.

### 3. Local chiral-brane obstruction - **Exact symbolic theorem**

Within the complete 30-real-dimensional traceless regular deformation sector of the stated \(C[(1,1)]\) brane vacuum,

\[
\operatorname{rank}J_R=28,
\qquad
\dim_{\mathbb R}\ker J_R=2
\quad
\left(\frac12<R\le1\right).
\]

The kernel is exactly the two phase directions and has zero projection onto every maximal-mode coordinate. At \(R=1/2\), the additional linear direction is lifted at quadratic order. The theorem is local and does not exclude exceptional modes, finite backreaction, additional branes, or disconnected branches.

[Read the repository paper page](papers/2026-local-chiral-brane-obstruction.md).

---

## Current physical program

The physical track asks whether the exact mathematical structures above can constrain real observables. These are model proposals, not established consequences of the mathematics alone.

| Quantity | Proposed value or relation | Public status |
|---|---:|---|
| Electroweak VEV | \(v=d(1-\alpha)=246.19\) GeV | Conditional relation |
| Higgs quartic | \(\lambda=R^2/(2d)=4/31\) | Conjecture; Wilson-line potential open |
| Higgs mass | \(m_H=vR/\sqrt d=125.0646\) GeV | Consequence of conjectured quartic |
| Weak mixing angle | \(\sin^2\theta_W=3/13\) | Conjectural geometric relation |
| Strong coupling | \(\alpha_s=h/2^R=0.11719\) | Conjectural geometric relation |
| Planck relation | \(M_{\rm Pl}=v e^{4\pi^2}/\sqrt R\) | Conditional gravity construction |
| Neutrino mass sum | \(\sum m_\nu=61.0\) meV | Frozen prospective test |
| Tensor-to-scalar ratio | \(r=1/900\approx0.00111\) | Untested |
| Strong CP | \(\bar\theta=0\) without a PQ axion | Conjectural mechanism |

The prime-indexed fermion hierarchy began as empirical phenomenology. Later manuscripts propose zero modes, overlap integrals, and discrete \(\sigma_3\)-weighted tunneling as a physical mechanism. Those steps remain dependent on a precise operator, boundary conditions, normalization, renormalization scheme, and a consistent fundamental action.

---

## Current experimental scorecard

The values below were stated in the February 2026 synthesis before the listed later measurements. Agreement is not the same as unique confirmation.

| Observable | Frozen framework value | Later result | Current assessment |
|---|---:|---:|---|
| Higgs mass | \(125.06\) GeV | CMS 13 TeV: \(125.13\pm0.15\) GeV; CMS diphoton combination: \(125.06\pm0.14\) GeV | **Strong post-manuscript agreement**, not unique confirmation |
| \(|V_{cb}|\) | \(0.04094\) | ATLAS on-shell-\(W\) method: \(0.050^{+0.011}_{-0.014}\) | **Independent consistency check**; uncertainty remains large |
| Hubble constant | \(67.4\) km s\(^{-1}\) Mpc\(^{-1}\) | DESI Ly\(\alpha\)+BBN: \(66.5\pm1.3\) | **Consistent**, but not a blind prediction |
| Neutrino mass sum | \(61.0\) meV | DESI+CMB: \(<59.2\) meV; some broader combinations permit \(>61\) meV | **Model-sensitive pressure point**; not detected |
| Normal ordering | normal | JUNO first data do not yet determine ordering | **Open test** |
| Higgs self-coupling | \(\lambda=4/31\) | \(-0.71<\kappa_\lambda<6.1\) at 95% | **Far from discriminating** |
| Tensor-to-scalar ratio | \(1/900\) | \(r_{0.05}<0.036\) | **Untested** |
| QCD/PQ axion | absent in proposed mechanism | no confirmed discovery | Compatible, but null searches cannot prove nonexistence |

See [OBSERVATION_LOG.md](OBSERVATION_LOG.md) for primary sources, dates, construction history, and interpretation rules.

---

## Research tracks

### Exact spectral and lattice mathematics

- theta functions, modular forms, and spectral-zeta factorization;
- the scalar spectral gap and regularized determinants;
- finite-order symmetry and fixed-point determinants.

### Physical model hypotheses

- prime-indexed mass phenomenology;
- candidate zero modes, normalized overlaps, and flavor models;
- gauge, Higgs, gravity, and cosmology relations;
- prospective experimental tests.

The Coxeter construction belongs here only as one mathematical ingredient in a candidate model, not as a literal explanation of what the universe is made of.

### Matrix-brane geometry

- chiral squashed \(SU(3)\) brane vacua;
- nonlinear Higgs-deformation obstructions;
- exceptional-mode, backreaction, and disconnected-branch searches.

The matrix-brane track is related by gauge-geometric themes but does not prove the compactification-based models.

---

## Manuscript library

The manuscript catalog preserves the public archival links already associated with the project and gives every work an explicit status label. The latest matrix-brane result now has a dedicated repository paper page; its original PDF and exact SymPy supplement should be attached together in a later release so the certificate can be rerun from the archival artifact.

- [Prime-Indexed Exponential Hierarchies in Fermion Masses](https://zenodo.org/records/18519399)
- [The Fine Structure Constant from \(E_8\) Spectral Geometry](https://zenodo.org/records/18600204)
- [Three Fermion Generations from the \(E_8\) Coxeter Element](https://zenodo.org/records/18527215)
- [Fermion Masses from \(E_8\) Geometry](https://zenodo.org/records/18528878)
- [Standard Model from \(E_8\) Yang-Mills, synthesis v2](https://zenodo.org/records/18624899)
- [Spectral Zeta Functions of Even Unimodular Lattices](https://zenodo.org/records/18601343)
- [Zero-Mode Solutions of the 8D Dirac Equation](https://zenodo.org/records/18601642)
- [Newton's Constant from \(E_8\) Yang-Mills](https://zenodo.org/records/18624036)
- [The Instanton Theorem](https://zenodo.org/records/18624240)
- Strong CP and light-hadron manuscripts: cataloged from the supplied February 2026 files; public archive links were not verified in this update.
- [Latest: Local Chiral-Brane Obstruction - repository paper page](papers/2026-local-chiral-brane-obstruction.md)

See [papers/README.md](papers/README.md) for status labels, scope, and archival records.

---

## Immediate proof obligations

1. **Define one fundamental action:** reconcile the Einstein-Yang-Mills starting point with the pure Yang-Mills emergent-gravity variant.
2. **Prove the physical index and chirality:** go beyond finite fixed-point counts to a complete equivariant Dirac calculation.
3. **Verify candidate zero modes:** specify a self-adjoint operator, boundary conditions, and normalization, then substitute exactly.
4. **Repair the instanton sector:** replace the untwisted charge-one \(T^4\) step with a valid twisted, bundle, higher-charge, or global Spin(7) construction.
5. **Derive the Higgs potential:** compute the Wilson-line Coleman-Weinberg potential yielding or rejecting \(\lambda=4/31\).
6. **Derive mixing from overlaps:** calculate CKM and PMNS quantities instead of assigning ratios after comparison.
7. **Complete or reject the strong-CP argument:** establish the relevant duality, topological-sector action, \(\theta=\pi\) exclusion, and determinant phase.
8. **Continue beyond the brane obstruction:** test exceptional modes, full backreaction, additional branes, and disconnected branches.

---

## Reproducibility

Run the integrity checks with:

```bash
python3 scripts/validate_claims.py
python3 -m unittest discover -s tests -v
```

The validation suite checks corrected spectral constants, fixed-point counts, the Higgs and inflation formulas, observation-ledger links, status vocabulary, and removal of superseded public claims.

---

## Citation

See [CITATION.cff](CITATION.cff). Cite the specific manuscript when using a result.

Korey McKinley · Independent research · 2026
