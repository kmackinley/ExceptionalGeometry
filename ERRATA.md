# Errata and Known Issues

**Issued:** 17 August 2026

This file records corrections that affect public summaries or cross-paper consistency. Manuscript PDFs should be revised independently and versioned rather than silently replaced.

## E-001 — Spectral zeta derivative and determinant

For

\[
\zeta_\Delta(s)=240(8\pi^2)^{-s}\zeta(s)\zeta(s-3),
\]

the correct derivative is

\[
\boxed{\zeta_\Delta'(0)=\ln(4\pi)-120\zeta'(-3)=1.885595084036\ldots}
\]

because \(\zeta'(-3)=+0.005378576357\ldots\), not a negative value.

Therefore

\[
\boxed{\det{}'\Delta=e^{-\zeta_\Delta'(0)}=0.151738735258\ldots}
\]

and

\[
\boxed{e^{\zeta_\Delta'(0)/2}=2.567153100777\ldots}
\]

The spectral-zeta manuscript’s values \(3.183\) and \(0.0413\), and the instanton manuscript’s quoted determinant prefactor \(1.54\), are superseded.

## E-002 — Higgs formula

The internally consistent displayed relation is

\[
\lambda=\frac{R^2}{2d}=\frac4{31},
\qquad
m_H=v\sqrt{2\lambda}=v\frac{R}{\sqrt d}=125.0646\ \mathrm{GeV}.
\]

The earlier README expression \(\lambda=1/(2h)\) does not produce the quoted Higgs mass. The quartic relation remains a **conjecture** pending a Coleman–Weinberg/Hosotani calculation.

## E-003 — Tensor-to-scalar ratio

The synthesis formula is

\[
r=\frac{1}{Nh/R}=\frac1{900}=0.001111\ldots,
\]

not \(1/300=0.003\).

## E-004 — Fine-structure public formula

The previously displayed expression

\[
\frac{4\pi h}{e}\sqrt{\frac Nd}\frac{N}{N-3}
\]

evaluates to approximately \(138.159\), not \(137.036\). The public site no longer presents that incomplete expression as a verified numerical derivation. A corrected source equation with every factor and normalization must be supplied before the value is restored to the headline table.

## E-005 — Prediction and parameter-count language

The statements “every result is a prediction, not a fit,” “zero free parameters” as a universal description, and “all 26 parameters derived” are withdrawn from the public overview.

The prime-indexed paper is explicitly empirical. The fermion-mass paper explicitly identifies per-sector \(\kappa_0\) calibration and lightest-generation calibration inputs in its epistemic-status section. The synthesis reports 24 of 26 quantities and lists open theorems.

## E-006 — Universality of \(\zeta_\Delta(0)=-1\)

The value \(\zeta_\Delta(0)=-1\) is not unique to \(E_8\). The manuscript itself describes the Bernoulli–Eisenstein cancellation as universal for the Eisenstein contribution and verifies the identity for even unimodular lattices through dimension 24. What is distinguished about \(E_8\) is its minimal dimension, uniqueness in dimension eight, and elementary factorization.

## E-007 — Instanton saturation on an untwisted \(T^4\)

The instanton manuscript invokes a standard charge-one \(SU(2)\) instanton on an ordinary periodic \(T^4\). The Nahm-transform literature states that an exact charge-one instanton on untwisted \(T^4\) does not exist; see P. van Baal, arXiv:hep-th/9512223.

The hierarchy mechanism is therefore classified as **under revision** until one of the following is supplied:

- appropriate ’t Hooft twists with complete charge and normalization accounting;
- a nontrivial \(E_8\) bundle whose restriction avoids the untwisted obstruction;
- a higher-charge construction with the required exponent;
- a genuine global Spin(7) instanton on the eight-dimensional compactification;
- another explicitly defined noncommutative or singular geometry.

## E-008 — Strong-CP scope

Weyl transitivity applies to the 240 roots, not to every lattice vector. A Hermitian matrix has a real determinant, but it need not have a positive determinant. Lattice self-duality also does not by itself prove S-duality of the full interacting gauge theory. The strong-CP result is therefore a conjectural mechanism, not an established theorem.
