# A Local Obstruction to Maximal Higgs Deformations of a Chiral Squashed SU(3) Brane Vacuum

**Korey McKinley**  
Independent researcher  
10 August 2026

**Repository status:** Exact symbolic theorem in the stated finite-dimensional model. The public PDF and supplementary script are pending transfer into this repository release.

## Abstract

This work studies whether maximal rank-one regular Higgs modes of the minimal six-dimensional \(C[(1,1)]\) brane can be switched on around an exact chiral rank-two Higgs vacuum in softly broken \(\mathcal N=4\) super Yang-Mills theory. Direct substitution into the full static equations produces an exact obstruction forcing all three maximal-mode coefficients to vanish.

The analysis then allows the complete physical traceless regular sector, containing thirty real deformation directions. Along the equal-mass plus branch above the endpoint, the exact real Jacobian of the complete equations has rank twenty-eight. Its two-dimensional kernel is exactly the tangent space of the known phase family of chiral rank-two solutions and has zero projection onto every maximal-mode direction. A fixed polynomial minor supplies a uniform rank certificate.

At the endpoint, an additional kernel direction appears as a common real rescaling of the chiral Higgs triplet. Direct substitution shows that this direction is lifted at quadratic order, so it is a fold direction rather than an additional modulus.

## Main result

For the equal-mass plus branch

\[
\frac12 < R \leq 1,
\]

the restricted real Jacobian satisfies

\[
\operatorname{rank}J_R=28,
\qquad
\dim_{\mathbb R}\ker J_R=2.
\]

The kernel is exhausted by the two phase directions of the known chiral triangle and contains no maximal-mode component. Consequently, no continuously differentiable local solution branch inside the complete regular traceless sector can leave the chiral vacuum with a nonzero maximal tangent.

## Exact certificate

A fixed \(28\times28\) minor has determinant

\[
\det\Delta_R
=
1492992\,R^{50}(R+4)^2(2R-1)(3R-4)^2,
\]

which is nonzero throughout the stated open-endpoint interval. The computation uses exact rational and polynomial arithmetic rather than floating-point rank thresholds.

## Scope

This is a local result, not a global no-go theorem for mass generation. It does not exclude:

- exceptional scalar modes;
- finite displacement or nonlinear backreaction outside the regular sector;
- additional branes or inter-brane fields;
- disconnected solution branches.

The result instead identifies where additional dynamics must enter if a massive chiral vacuum exists in this matrix model.

## Reproducibility

The manuscript describes a Python/SymPy verification that reconstructs the adjoint background, solves the regular-mode decoupling systems, verifies the nonlinear witnesses, builds the full \(384\times30\) real Jacobian, factors the rank certificate, and checks the endpoint fold. The script and reference output should be added alongside the PDF in the next repository revision.
