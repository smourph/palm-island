# Palm Island - Documentation produit (fonctionnelle)

Ce dossier contient la documentation fonctionnelle de reference pour construire une application web permettant de jouer a Palm Island.

## Objectif

Fournir une base exploitable pour:
- des developpeurs humains,
- des agents IA de generation de code,
- un pilotage produit par exigences fonctionnelles tracables.

## Structure

- `docs/specifications/functional-specification.md`
  - specification fonctionnelle exhaustive (regles, modes, cas limites, exigences, flux)
- `docs/qa/qa-checklist.md`
  - checklist QA exhaustive (nominaux + limites + couverture attendue)
- `docs/traceability/conventions-and-matrix.md`
  - conventions d'identifiants et matrice de tracabilite Exigences <-> QA

## Priorite des sources

1. Livret de regles FR: `https://regle.escaleajeux.fr/palmi_rg.pdf`
2. Fiche editeur FR: `https://www.nutspublishing.com/eshop/palm-island-fr`

## Regle d'arbitrage

En cas de divergence entre sources:
- la regle officielle (livret) prime,
- les ecarts sont consignes dans la section "Ambiguites" de la specification,
- une decision produit explicite est requise avant implementation.

## Convention de version documentaire

- Chaque modification importante doit incrementer la section "Historique" des documents impactes.
- Toute nouvelle exigence doit etre dotee d'un identifiant `REQ-*` unique.
- Tout cas de test QA doit etre dote d'un identifiant `QA-*` unique et lie a au moins une exigence.

