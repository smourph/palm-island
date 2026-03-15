# Palm Island - Conventions et matrice de tracabilite

## Historique

- `v1.0` (2026-03-15): creation initiale

---

## 1. Conventions d'identifiants

- Exigence fonctionnelle: `REQ-###`
- Cas limite: `EDGE-###`
- Cas QA: `QA-<DOMAINE>-###`
- Couverture: `COV-###`
- Ambiguite a trancher: `AMB-###`
- Golden run non-regression: `GR-###`
- Risque fonctionnel: `RISK-###`

Regles:
1. Un identifiant ne change jamais de sens.
2. Si suppression, marquer "retire" et ne pas reutiliser l'identifiant.
3. Toute exigence doit etre liee a au moins un cas QA.

---

## 2. Matrice Exigences -> QA

| Exigence | Description courte | QA associes |
|---|---|---|
| REQ-001..005 | Principes transverses | QA-SETUP-005, QA-ACT-004, QA-PAY-004, QA-SCORE-001 |
| REQ-010..011 | Choix de mode | QA-SETUP-001, QA-SETUP-004 |
| REQ-020..023 | Setup paquet | QA-SETUP-001..003 |
| REQ-030..031 | Activation modules | QA-SETUP-004 |
| REQ-100..102 | Actions possibles | QA-ACT-001..005 |
| REQ-110..112 | Stocker | QA-STO-001, QA-STO-002 |
| REQ-120..121 | Pivoter | QA-ACT-001, QA-ACT-002 |
| REQ-130..131 | Retourner | QA-ACT-001, QA-ACT-002 |
| REQ-140..144 | Paiement | QA-PAY-001..006 |
| REQ-150..151 | Limite stockage | QA-STO-002..003 |
| REQ-160 | Ressource en tete | QA-STO-004 |
| REQ-170..173 | Fin de tour | QA-TURN-001..003 |
| REQ-180..181 | Fin de partie | QA-TURN-004 |
| REQ-190..193 | Decompte/departage | QA-SCORE-001..005 |
| REQ-200..203 | Solo/Trophees | QA-SOLO-001..003 |
| REQ-210..212 | Difficultes solo | QA-SOLO-004 |
| REQ-220..222 | 2 joueurs | QA-2P-001..003 |
| REQ-230..237 | Cooperatif | QA-COOP-001..007 |
| REQ-240..244 | Competitif decontracte | QA-COMP-D-001..005 |
| REQ-250..253 | Competitif vitesse | QA-COMP-V-001..004 |
| REQ-260..265 | Villageois | QA-VIL-001..005 |
| REQ-270..271 | 3 joueurs+ | QA-MP-001..003 |

---

## 3. Matrice Cas limites -> QA

| Cas limite | QA associes |
|---|---|
| EDGE-001 | QA-ACT-005 |
| EDGE-002 | QA-ACT-004 |
| EDGE-003 | QA-PAY-004 |
| EDGE-004 | QA-PAY-005 |
| EDGE-005 | QA-STO-003 |
| EDGE-006 | QA-STO-004 |
| EDGE-007 | QA-TURN-002 |
| EDGE-008 | QA-TURN-003 |
| EDGE-009 | QA-SCORE-004, QA-SCORE-005 |
| EDGE-010 | QA-COOP-004 |
| EDGE-011 | QA-COMP-D-004 |
| EDGE-012 | QA-VIL-004 |

---

## 4. Matrice Ambiguites -> Decision produit

| Ambiguite | Statut | Decision requise avant lot |
|---|---|---|
| AMB-001 Nombre cartes coop | Ouvert | F1 |
| AMB-002 Texte exact cartes edition cible | Ouvert | F1 |
| AMB-003 Perimetre Palm Laboratory | Ouvert | F3/F4 |
| AMB-004 Contenus promo/fan-made | Ouvert | F4 |

---

## 5. Definition de completion documentaire

La documentation est complete si:

1. Tous les `REQ-*` ont une ligne de tracabilite.
2. Tous les `EDGE-*` ont un `QA-*` associe.
3. Tous les `AMB-*` ont un statut et une cible de resolution.
4. Chaque lot fonctionnel (F1..F5) possede un lot QA associe.

