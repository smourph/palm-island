# Palm Island - Checklist QA exhaustive (fonctionnelle)

## Historique

- `v1.0` (2026-03-15): creation initiale exhaustive

---

## 1. Objet

Cette checklist QA couvre les exigences fonctionnelles de `docs/specifications/functional-specification.md`.

Objectifs:
- verifier les cas nominaux,
- verifier les cas limites,
- assurer la couverture fonctionnelle complete,
- preparer une feuille de route QA exploitable par humains et agents IA.

---

## 2. Strategie de couverture (non technique)

La couverture attendue se fait a plusieurs niveaux de validation:

- **Validation unitaire metier**: regles elementaires (paiement, legalite action, transitions de tour)
- **Validation d'integration metier**: enchainement de regles sur un flux de tour/partie
- **Validation fonctionnelle scenario**: parcours complets par mode
- **Validation end-to-end utilisateur**: partie complete jouee comme un utilisateur final
- **Validation non-regression visuelle**: coherence des etats visuels critiques (actions disponibles, ressources, score, statut de fin)
- **Validation non-regression regles**: rejouer des parties de reference avec resultat attendu stable

> Remarque: cette checklist ne prescrit aucun outil; elle decrit ce qui doit etre valide.

---

## 3. Matrice de couverture cible

- `COV-001` 100% des exigences `REQ-*` doivent etre reliees a au moins 1 test QA.
- `COV-002` 100% des cas limites `EDGE-*` doivent etre verifies explicitement.
- `COV-003` 100% des flux principaux de mode doivent etre couverts en scenario complet.
- `COV-004` 100% des ambiguities `AMB-*` doivent etre cloturees avant validation finale.

---

## 4. Checklist QA par domaine

## 4.1 Setup et initialisation

- `QA-SETUP-001` Creation d'une partie solo avec 17 cartes valide.
- `QA-SETUP-002` Orientation de depart de toutes les cartes correcte.
- `QA-SETUP-003` Positionnement de la carte de suivi conforme.
- `QA-SETUP-004` Modules non applicables au mode exclus.
- `QA-SETUP-005` Echec propre si setup incomplet.

## 4.2 Legalite des actions

- `QA-ACT-001` Action sur 1re carte autorisee si cout payable.
- `QA-ACT-002` Action sur 2e carte autorisee si cout payable.
- `QA-ACT-003` Defausse 1re carte autorisee.
- `QA-ACT-004` Defausse 2e carte interdite (`EDGE-002`).
- `QA-ACT-005` Si aucune action legale, defausse forcee 1re carte (`EDGE-001`).

## 4.3 Paiement et ressources

- `QA-PAY-001` Cout gratuit execute sans ressources.
- `QA-PAY-002` Cout exact execute correctement.
- `QA-PAY-003` Cout alternatif (ou) accepte avec chaque ressource admissible.
- `QA-PAY-004` Paiement insuffisant rejete (`EDGE-003`).
- `QA-PAY-005` Surpaiement accepte et surplus perdu (`EDGE-004`).
- `QA-PAY-006` Mise a jour des ressources stockees apres paiement correcte.

## 4.4 Stockage

- `QA-STO-001` Stockage ajoute une ressource stockee visible.
- `QA-STO-002` Limite de 4 ressources appliquee (`REQ-150`).
- `QA-STO-003` Stockage a limite atteinte impose liberation prealable (`EDGE-005`).
- `QA-STO-004` Ressource stockee en tete de paquet defaussee immediatement (`EDGE-006`).

## 4.5 Progression des tours

- `QA-TURN-001` Detection correcte de fin de tour via carte de suivi.
- `QA-TURN-002` Inactivation de la carte suivi en 2e position (`EDGE-007`).
- `QA-TURN-003` Transition tour 4 -> 5 correcte (`EDGE-008`).
- `QA-TURN-004` Arret partie fin tour 8 (`REQ-180`).

## 4.6 Decompte et resultat

- `QA-SCORE-001` Calcul PV solo conforme.
- `QA-SCORE-002` Table de classement solo conforme.
- `QA-SCORE-003` Victoire competitif plus haut score conforme.
- `QA-SCORE-004` Egalite niveau 1: ameliorations (`EDGE-009`).
- `QA-SCORE-005` Egalite niveau 2: ressources (`EDGE-009`).

## 4.7 Mode Solo et Trophees

- `QA-SOLO-001` Partie solo complete nominative.
- `QA-SOLO-002` Deblocage Trophee quand criteres atteints.
- `QA-SOLO-003` Non-deblocage Trophee si criteres incomplets.
- `QA-SOLO-004` Restriction de difficulte: Facile/Normal/Difficile.

## 4.8 Mode 2 joueurs

- `QA-2P-001` Simultaneite des tours fonctionnelle.
- `QA-2P-002` Synchronisation a fin de tour fonctionnelle.
- `QA-2P-003` Partie complete 2 joueurs sans divergence d'etat.

## 4.9 Mode Cooperatif

- `QA-COOP-001` Selection Desastre en debut de partie.
- `QA-COOP-002` Cout Desastre multiplie par joueur applique.
- `QA-COOP-003` Contribution multi-joueurs au meme palier possible.
- `QA-COOP-004` Defaite si Desastre incomplet au tour 8 (`EDGE-010`).
- `QA-COOP-005` Victoire si Desastre complete dans delai.
- `QA-COOP-006` Score de groupe = score minimum individuel.
- `QA-COOP-007` Capacite coop utilisable selon conditions.

## 4.10 Competitif decontracte

- `QA-COMP-D-001` Ordre de paquet de reference identique pour tous.
- `QA-COMP-D-002` Acquisition Avant-poste si criteres satisfaits.
- `QA-COMP-D-003` Non acquisition si criteres non satisfaits.
- `QA-COMP-D-004` Conflit d'acquisition resolu selon regle (`EDGE-011`).
- `QA-COMP-D-005` Points Avant-poste ajoutes au score final.

## 4.11 Competitif de vitesse

- `QA-COMP-V-001` Pile Avant-postes ordonnee en valeur decroissante.
- `QA-COMP-V-002` Priorite au premier joueur arrivant au jalon.
- `QA-COMP-V-003` Boucle d'achats successifs jusqu'au renoncement collectif.
- `QA-COMP-V-004` Reprise simultanee du tour suivant.

## 4.12 Villageois

- `QA-VIL-001` Recrutement Villageois avec cout valide.
- `QA-VIL-002` Insertion Villageois au bon emplacement paquet.
- `QA-VIL-003` Activation Villageois actifs en debut de tour.
- `QA-VIL-004` Cumul d'effets autorises uniquement si legal (`EDGE-012`).
- `QA-VIL-005` Contribution des Villageois a PV au score final.

## 4.13 Multi-joueurs 3+

- `QA-MP-001` Ajustement des cartes modules selon nombre de joueurs.
- `QA-MP-002` Partie complete 3 joueurs valide.
- `QA-MP-003` Partie complete 4+ joueurs valide.

---

## 5. Jeux de reference pour non-regression regles

Definir un corpus de parties de reference ("golden runs"):

- `GR-001` Solo basique sans Trophee
- `GR-002` Solo avec Trophee (difficulte Normal)
- `GR-003` Coop victoire
- `GR-004` Coop defaite tour 8
- `GR-005` Competitif decontracte avec conflit Avant-poste
- `GR-006` Competitif vitesse avec achats multiples
- `GR-007` Partie avec Villageois actifs et passifs

Critere:
- Etat final et resultat de chaque partie de reference doivent rester identiques d'une version a l'autre, sauf changement de regle explicitement approuve.

---

## 6. Checklist non-regression visuelle (fonctionnelle)

Verifier la coherence visuelle des etats critiques:

- `QA-VIS-001` Actions legalement disponibles clairement distinguables des actions interdites.
- `QA-VIS-002` Ressources stockees visibles et comptees correctement.
- `QA-VIS-003` Etat de tour courant et progression du suivi visibles.
- `QA-VIS-004` Informations de cout lisibles et non ambigues.
- `QA-VIS-005` Conditions de victoire/defaite explicites en fin de partie.
- `QA-VIS-006` Decompte final detaille et verifiable.
- `QA-VIS-007` Etats intermediaires de modules (Desastre, Avant-poste, Villageois, Trophee) visuellement coherents.

---

## 7. Checklist de completion par lot (roadmap QA)

## Lot QA-F1 (coeur solo)
- `QA-SETUP-*`, `QA-ACT-*`, `QA-PAY-*`, `QA-STO-*`, `QA-TURN-*`, `QA-SCORE-001..002`, `QA-SOLO-001`

## Lot QA-F2 (2 joueurs + coop)
- `QA-2P-*`, `QA-COOP-*`, `QA-SCORE-003..005`

## Lot QA-F3 (competitif)
- `QA-COMP-D-*`, `QA-COMP-V-*`

## Lot QA-F4 (modules avances)
- `QA-SOLO-002..004`, `QA-VIL-*`, `QA-MP-*`

## Lot QA-F5 (stabilisation)
- `GR-*`, `QA-VIS-*`, couverture `COV-*` complete

---

## 8. Critere d'acceptation QA globale

La version est QA-ready si:

1. Toutes les exigences reliees au lot sont couvertes.
2. Tous les `EDGE-*` du lot sont valides.
3. Les parties de reference `GR-*` passees par le lot sont stables.
4. Les regressions visuelles critiques sont absentes.
5. Les ambiguities `AMB-*` du lot sont closes.

---

## 9. Registre des risques fonctionnels

- `RISK-001` Divergence regles selon edition physique cible.
- `RISK-002` Mauvaise interpretation de l'ordre des priorites (fin de tour vs action restante).
- `RISK-003` Erreurs de departage en cas d'egalite multiple.
- `RISK-004` Incoherence entre mode de base et variantes Villageois/Avant-postes.
- `RISK-005` Defaut d'explicabilite utilisateur sur action invalide.

Actions preventives:
- maintenir la tracabilite REQ <-> QA,
- valider les points ambigus avant implementation,
- maintenir les golden runs et la non-regression visuelle.

