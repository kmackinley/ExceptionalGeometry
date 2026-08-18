# Exceptional Geometry Observation Log

**Last updated:** 17 August 2026  
**Prediction baseline:** the values recorded in the February 2026 Exceptional Geometry manuscripts.

This file separates a numerical agreement from a genuinely new experimental test. A result is not treated as confirmation merely because a measured central value is close to a framework value. The relevant questions are whether the prediction was frozen before the new result, whether measured inputs were used in constructing it, and whether the measurement probes the proposed mechanism rather than only the same number.

## Status key

- **Strong consistency:** a post-manuscript result agrees closely, but does not uniquely identify the framework.
- **Consistent:** the prediction lies within the reported uncertainty.
- **Pressure point:** the prediction is near or beyond a model-dependent experimental limit.
- **Untested:** present sensitivity is insufficient.
- **Not confirmable by null result:** repeated non-detections are compatible with the prediction but cannot prove nonexistence.

## Current scorecard

| Observable | Frozen framework value | Current result | Status | Interpretation |
|---|---:|---:|---|---|
| Higgs mass | 125.06 GeV | CMS 13 TeV: 125.13 ± 0.15 GeV; CMS diphoton combination: 125.06 ± 0.14 GeV | **Strong consistency** | The new-only result is about 0.47σ from the framework value, and the combined CMS central value is identical at the quoted precision. The Higgs mass was already approximately known when the relation was proposed, so this is a precision consistency check rather than a blind prediction. |
| CKM \|V_cb\| | 0.04094 | ATLAS: 0.050 +0.011/−0.014 | **Consistent** | The framework value is about 0.65σ below the ATLAS central value. This is the first determination using on-shell W decays in top events, so it is an independent high-momentum-transfer check, although the uncertainty remains large. |
| Hubble constant H0 | 67.4 km s⁻¹ Mpc⁻¹ | DESI DR2 Lyα full shape + BBN: 66.5 ± 1.3 km s⁻¹ Mpc⁻¹ | **Consistent** | The difference is about 0.69σ. Because 67.4 was already a familiar CMB-scale value, this is best treated as consistency with an independent high-redshift method. |
| Sum of neutrino masses | 61.0 meV | DESI BAO + Lyα full shape + CMB: <59.2 meV at 95% in ΛCDM; <166 meV in w0waCDM | **Pressure point** | The value sits directly on the restrictive ΛCDM boundary and remains allowed when the dark-energy model is enlarged. It has not been detected. This is currently the sharpest test in the program. |
| Neutrino mass ordering | Normal | JUNO first data precisely measure oscillation parameters but do not yet resolve ordering | **Untested** | JUNO is operating at design performance and requires a larger exposure to determine the ordering. |
| Higgs self-coupling | λ = 4/31 ≈ 0.12903 | ATLAS+CMS: −0.71 < κλ < 6.1 at 95%; HH significance 1.1σ | **Untested** | The allowed interval is much too broad to distinguish the proposed value from the Standard Model neighborhood. |
| Tensor-to-scalar ratio | r = 1/900 ≈ 0.00111 | BICEP/Keck benchmark: r0.05 < 0.036 at 95% | **Untested** | The proposed signal remains over an order of magnitude below current sensitivity. LiteBIRD now targets Japanese fiscal year 2036. |
| No Peccei–Quinn axion | No QCD axion | No confirmed axion signal | **Not confirmable by null result** | Null searches are compatible with the proposal but cannot establish that no axion exists over all masses and couplings. Discovery of a QCD/Peccei–Quinn axion would contradict this proposed strong-CP mechanism. |

## Most important entries

### 1. Higgs mass

The strongest post-manuscript numerical development is the CMS diphoton result. The 13 TeV-only value is

```text
m_H = 125.13 ± 0.15 GeV,
```

while the combination with earlier CMS diphoton data is

```text
m_H = 125.06 ± 0.14 GeV.
```

The framework value is 125.06 GeV. The matching combined central value is noteworthy, but the correct scientific classification is **strong post-manuscript consistency**, not unique confirmation.

### 2. Neutrino mass sum

The 61.0 meV value should remain frozen. Under restrictive ΛCDM assumptions, the latest DESI+CMB upper limit is 59.2 meV at 95%, essentially the oscillation floor for normal ordering. The same data allow much larger masses when evolving dark energy is permitted. This makes the prediction valuable: it is now close enough to the boundary to be genuinely falsifiable.

### 3. Independent \|V_cb\| check

ATLAS measured \|V_cb\| using on-shell W decays in top-quark events rather than conventional low-energy B-hadron decays. The result is not precise enough to validate 0.04094, but it tests the quantity in a substantially different physical regime and remains consistent.

## Rules for future updates

Each new entry should record:

1. the frozen prediction and manuscript date;
2. the new measurement, date, uncertainty, and model assumptions;
3. whether the measured quantity was used in constructing the relation;
4. the deviation in standard deviations when meaningful;
5. one of the status labels above;
6. a primary-source link.

Do not overwrite an earlier entry when a result changes. Add a dated row or subsection so the history remains auditable.

## Primary sources

- CMS Collaboration, **A measurement of the Higgs boson mass in the diphoton decay channel in proton-proton collisions at √s = 13 TeV**, arXiv:2607.28396: https://arxiv.org/abs/2607.28396
- ATLAS Collaboration, **Measurement of the |V_cb| element of the CKM matrix in tt̄ decays with the ATLAS detector**, JHEP 07 (2026) 078: https://doi.org/10.1007/JHEP07(2026)078
- DESI Collaboration, **DESI DR2 Results IV: Alcock–Paczyński Measurements from the Lyman Alpha Forest and Cosmological Constraints**, arXiv:2607.27410: https://arxiv.org/abs/2607.27410
- JUNO Collaboration, **Measurement of reactor neutrino oscillation with the first JUNO data**, Nature 654, 343–348 (2026): https://doi.org/10.1038/s41586-026-10538-z
- ATLAS and CMS Collaborations, **Combination of searches for Higgs boson pair production at √s = 13 TeV**, arXiv:2602.23991: https://arxiv.org/abs/2602.23991
- BICEP/Keck Collaboration, **Constraining Inflation with the BICEP/Keck CMB Polarization Experiments**, arXiv:2405.19469: https://arxiv.org/abs/2405.19469
- JAXA/ISAS, **LiteBIRD mission status**: https://www.isas.jaxa.jp/en/missions/spacecraft/future/litebird.html
