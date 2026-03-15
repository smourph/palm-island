# Palm Island - Specification fonctionnelle exhaustive

## Historique

- `v1.0` (2026-03-15): creation initiale exhaustive (regles, modes, cas limites, roadmap fonctionnelle)

---

## 1. Objet

Ce document decrit le comportement fonctionnel complet attendu d'une application web permettant de jouer a Palm Island dans un navigateur.

Le document est volontairement non technique: il ne prescrit ni framework, ni architecture, ni outillage.

---

## 2. Perimetre

## 2.1 Inclus

- Regles coeur de Palm Island
- Mode solo
- Mode 2 joueurs (temps reel)
- Mode cooperatif
- Mode competitif decontracte
- Mode competitif de vitesse
- Module Trophees (Exploits)
- Module Villageois
- Module Avant-postes
- Fin de partie, decompte, departage
- Cas limites explicites

## 2.2 Hors perimetre

- Choix techniques de mise en oeuvre
- Design UI detaille
- Strategie de deploiement
- Performance et securite techniques

---

## 3. Sources de reference

- Source primaire: `https://regle.escaleajeux.fr/palmi_rg.pdf`
- Source secondaire: `https://www.nutspublishing.com/eshop/palm-island-fr`

### Regle de priorite

1. Livret de regles (primaire)
2. Fiche editeur (complement)

---

## 4. Glossaire metier

- **Carte active**: carte consideree pour action (1re ou 2e du dessus selon regles)
- **Zone active**: zone de carte visible et jouable selon son orientation
- **Stocker**: action qui place une carte comme ressource stockee
- **Pivoter**: rotation de carte selon regle
- **Retourner**: bascule recto/verso selon regle
- **Ressource stockee**: ressource disponible pour payer un cout
- **Carte de suivi de tour**: carte marquee permettant de suivre 8 tours
- **Amelioration**: progression de carte vers un etat plus avance
- **PV**: points de victoire

---

## 5. Principes fonctionnels transverses

- `REQ-001` Le jeu doit etre jouable integralement sans ambiguite de regles.
- `REQ-002` Toute action proposee au joueur doit etre legalement executable selon les ressources et contraintes courantes.
- `REQ-003` Le systeme doit interdire toute action invalide et expliquer le motif de refus.
- `REQ-004` Le moteur doit appliquer les priorites de regles en cas de concurrence de conditions.
- `REQ-005` Le resultat final doit etre deterministe a partir de l'etat final de partie.

---

## 6. Configuration de partie

## 6.1 Choix de mode

- `REQ-010` L'utilisateur doit choisir un mode parmi les modes disponibles.
- `REQ-011` Le mode choisi verrouille les regles et composants associes pour la partie en cours.

## 6.2 Initialisation du paquet

- `REQ-020` Le paquet de base est constitue de 17 cartes.
- `REQ-021` Les cartes doivent etre initialisees sur leur orientation de depart.
- `REQ-022` Le melange conserve les orientations de depart.
- `REQ-023` La carte de suivi de tour doit etre positionnee selon la regle officielle.

## 6.3 Modules contextuels

- `REQ-030` Selon mode, les cartes coop/competitives/trophees/villageois/avant-postes sont activees ou non.
- `REQ-031` Toute carte hors perimetre du mode selectionne est exclue de la partie.

---

## 7. Coeur de tour (moteur de regles)

## 7.1 Actions possibles

A chaque tour, le joueur peut:

1. Executer une action sur l'une des deux premieres cartes du paquet,
2. Ou defausser la premiere carte du paquet.

Exigences:

- `REQ-100` Le systeme doit presenter les actions legalement disponibles.
- `REQ-101` La deuxieme carte ne peut jamais etre defaussee directement.
- `REQ-102` Si aucune action n'est possible sur les deux cartes, la defausse de la premiere est obligatoire.

## 7.2 Types d'actions

### A. Stocker

- `REQ-110` Le cout doit etre paye avant stockage.
- `REQ-111` La carte est reorientee selon la regle de stockage puis placee au dos du paquet.
- `REQ-112` Les ressources stockees doivent rester lisibles/identifiables.

### B. Pivoter

- `REQ-120` Le cout doit etre paye avant pivot.
- `REQ-121` La carte est pivotee selon la regle puis placee au dos du paquet.

### C. Retourner

- `REQ-130` Le cout doit etre paye avant retournement.
- `REQ-131` La carte est retournee selon la regle puis placee au dos du paquet.

## 7.3 Paiement

- `REQ-140` Le paiement se fait via les ressources stockees.
- `REQ-141` Les couts gratuits doivent etre autorises sans ressource.
- `REQ-142` Les couts alternatifs (ou) doivent etre supportes.
- `REQ-143` Le surpaiement est autorise mais les ressources excedentaires sont perdues.
- `REQ-144` Une action avec paiement insuffisant est interdite.

## 7.4 Limite de stockage

- `REQ-150` Le nombre de cartes ressources stockees simultanees est limite a 4.
- `REQ-151` Si limite atteinte et stockage demande, le joueur doit liberer une carte stockee selon la regle avant de poursuivre.

## 7.5 Ressource stockee au sommet

- `REQ-160` Si une ressource stockee arrive au sommet du paquet, elle est defaussee immediatement.

## 7.6 Fin de tour

- `REQ-170` Le passage de la carte de suivi de tour en tete marque la fin du tour.
- `REQ-171` La progression du marqueur de tour doit etre appliquee correctement.
- `REQ-172` Les ressources stockees persistent d'un tour a l'autre.
- `REQ-173` Tour 4 -> 5: la bascule de face/numrotation du suivi doit etre correcte.

## 7.7 Fin de partie

- `REQ-180` La partie s'arrete a la fin du tour 8.
- `REQ-181` Le decompte est declenche automatiquement.

## 7.8 Decompte et vainqueur

- `REQ-190` Les PV sont calcules sur les zones actives visibles en fin de partie.
- `REQ-191` En competitif, le plus haut score gagne.
- `REQ-192` Egalite 1: plus grand nombre d'ameliorations.
- `REQ-193` Egalite 2: plus grand nombre de ressources stockees.

---

## 8. Specification par mode

## 8.1 Solo

- `REQ-200` Le mode solo applique le coeur de regles standard.
- `REQ-201` Le score solo doit etre classe via la table solo officielle.
- `REQ-202` Les Trophees peuvent etre debloques si criteres atteints.
- `REQ-203` Les Trophees debloques peuvent etre reutilises dans parties futures selon les restrictions de difficulte.

### Difficulte solo

- `REQ-210` Facile: utilisation libre des Trophees debloques.
- `REQ-211` Normal: limite a 1 Trophee utilise.
- `REQ-212` Difficile: aucun Trophee utilise.

## 8.2 2 joueurs (temps reel)

- `REQ-220` Les deux joueurs jouent simultanement.
- `REQ-221` Les jalons de fin de tour doivent synchroniser les joueurs.
- `REQ-222` Les actions inter-joueurs liees au mode (coop/competitif) sont resolues aux moments prevus.

## 8.3 Cooperatif

- `REQ-230` Une carte Desastre est selectionnee en debut de partie.
- `REQ-231` Le cout des paliers de Desastre est applique par joueur.
- `REQ-232` Les joueurs peuvent contribuer conjointement au paiement.
- `REQ-233` Si Desastre non termine avant/au tour 8: defaite collective.
- `REQ-234` Si Desastre termine dans les delais: victoire collective.
- `REQ-235` Le score de groupe correspond au score individuel le plus faible.

### Capacites cooperatives

- `REQ-236` Une carte de capacite cooperative peut etre activee selon la regle de mode.
- `REQ-237` Une capacite coop amelioree est utilisable par tous les joueurs selon sa frequence autorisee.

## 8.4 Competitif decontracte

- `REQ-240` Les joueurs partent d'un ordre de paquet de reference identique.
- `REQ-241` Les cartes Avant-postes sont rendues disponibles selon la regle de mode.
- `REQ-242` L'acquisition d'un Avant-poste exige satisfaction stricte des criteres.
- `REQ-243` En cas de concurrence selon regle officielle, l'Avant-poste peut etre retire sans attribution.
- `REQ-244` Les points d'Avant-postes sont ajoutes au decompte final.

## 8.5 Competitif de vitesse

- `REQ-250` Les Avant-postes sont ordonnes par valeur decroissante.
- `REQ-251` Le premier joueur atteignant son jalon de tour peut acheter en priorite.
- `REQ-252` Le cycle d'achat continue jusqu'au renoncement collectif.
- `REQ-253` Le tour suivant redemarre en simultane.

## 8.6 Mode Villageois (option)

- `REQ-260` Les cartes Villageois peuvent etre incluses selon regle du mode.
- `REQ-261` Le recrutement de Villageois requiert paiement du cout.
- `REQ-262` Les Villageois recrutes sont inseres apres la carte de suivi.
- `REQ-263` Les Villageois actifs peuvent etre actives en debut de tour selon leurs conditions.
- `REQ-264` Les effets de Villageois actifs s'appliquent pendant le tour concerne.
- `REQ-265` Les Villageois a PV contribuent au decompte final.

## 8.7 Parties a 3 joueurs et+

- `REQ-270` Le mode multi-joueurs au-dela de 2 impose des composants additionnels.
- `REQ-271` Les regles 2 joueurs restent la base avec ajustements de volume de cartes modules.

---

## 9. Flux fonctionnels

## 9.1 Flux principal (solo standard)

1. Selectionner mode solo
2. Initialiser paquet (17 cartes + suivi)
3. Repeter jusqu'a tour 8:
   - proposer actions valides,
   - executer action choisie ou defausse,
   - verifier contraintes (stockage, paiement, sommet),
   - detecter fin de tour.
4. Fin tour 8 -> decompte
5. Afficher resultat + classement solo
6. Evaluer debloquage Trophees

## 9.2 Flux victoire/defaite coop

1. Selectionner mode coop + Desastre
2. Jouer tours en simultane
3. A chaque fin de tour: autoriser contributions au Desastre
4. Si Desastre complete: victoire immediate ou maintien jusqu'au decompte selon regle retenue
5. Si tour 8 atteint sans completion: defaite

## 9.3 Flux competitif

1. Selectionner mode competitif
2. Construire ordre de depart commun
3. A chaque tour: fenetre d'acquisition Avant-postes
4. Fin tour 8: decompte + points additionnels
5. Departage si necessaire

---

## 10. Cas limites obligatoires

- `EDGE-001` Aucune action legale sur les 2 cartes -> defausse forcee 1re carte.
- `EDGE-002` Tentative de defausse 2e carte -> refus.
- `EDGE-003` Paiement partiel -> refus action.
- `EDGE-004` Surpaiement -> action valide, surplus perdu.
- `EDGE-005` Stockage alors limite 4 atteinte -> necessite liberation prealable.
- `EDGE-006` Ressource stockee en tete de paquet -> defausse immediate.
- `EDGE-007` Carte suivi en 2e position -> inactivable.
- `EDGE-008` Transition tour 4 vers 5 -> face/compteur conformes.
- `EDGE-009` Egalite parfaite en score -> tiebreak ameliorations puis ressources.
- `EDGE-010` Coop non complete au tour 8 -> defaite collective.
- `EDGE-011` Conflit d'acquisition Avant-poste en decontracte -> non attribution selon regle.
- `EDGE-012` Activation multiple Villageois -> respect des conditions et cumul autorise uniquement si legal.

---

## 11. Tables de classement officielles

## 11.1 Solo

- 10-19: Encore du boulot
- 20-29: Respectable
- 30-39: Exceptionnel
- 40+: Incroyable

## 11.2 Cooperatif

- 1-9: Encore du boulot
- 10-19: Respectable
- 20-29: Exceptionnel
- 30+: Incroyable

---

## 12. Ambiguites a figer avant implementation

- `AMB-001` Nombre de cartes cooperatives: divergence potentielle selon source/edition.
- `AMB-002` Parametrage exact de certaines cartes selon edition cible (texte/icone).
- `AMB-003` Perimetre exact de Palm Laboratory (extension separee vs produit compagnon).
- `AMB-004` Traitement des contenus promotionnels non presents dans la boite cible.

Decision requise: toute ambiguite doit etre resolue par une decision produit explicite avant developpement.

---

## 13. Roadmap fonctionnelle de reference

## Lot F-1: Coeur jouable solo

- Setup
- Actions/paiement/stockage
- Suivi 8 tours
- Decompte solo

## Lot F-2: 2 joueurs + coop

- Simultaneite
- Desastres
- Capacites coop

## Lot F-3: Competitif complet

- Decontracte
- Vitesse
- Avant-postes

## Lot F-4: Modules avances

- Trophees
- Difficultes solo
- Villageois
- 3+ joueurs

## Lot F-5: Stabilisation fonctionnelle

- Validation regles complete
- Validation cas limites
- Gel fonctionnel v1.0

---

## 14. Definition de Done fonctionnelle

Une version est consideree conforme si:

1. Toutes les exigences `REQ-*` de son lot sont couvertes.
2. Tous les cas `EDGE-*` associes sont verifies.
3. Les flux de partie completes sont jouables sans blocage.
4. Le calcul de resultat est conforme au mode.
5. Les ambiguities liees au lot sont resolues (`AMB-*`).
