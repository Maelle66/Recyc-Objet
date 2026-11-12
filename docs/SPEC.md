# SPEC.md - Version V1 (US01 à US05)

## 1. Objectif du développement

Développer l'application web fonctionnelle correspondant à la Version 1 (V1) complète de Recyc'Objet, intégrant les 5 User Stories prioritaires du backlog :
- **US01** : Rechercher un objet par son nom.
- **US02** : Consulter les consignes de tri détaillées.
- **US03** : Identifier les points de collecte adaptés.
- **US04** : Découvrir les solutions de réparation et de réemploi.
- **US05** : Filtrer les objets par catégorie.

L'application doit permettre à l'utilisateur :
- de saisir le nom d'un objet ou de choisir une catégorie ;
- de lancer une recherche textuelle et/ou filtrée ;
- de consulter les fiches détaillées des objets correspondants (consignes de tri, lieux de dépôt, opportunités de réparation/réemploi) ;
- de comprendre lorsqu'aucun résultat n'est disponible ;
- de modifier ou réinitialiser sa recherche à tout moment sans recharger la page.

L'application reste strictement sobre numériquement, accessible (WCAG 2.1 AA) et utilisable sur un ancien smartphone avec une connexion 3G instable.

---

## 2. Périmètre fonctionnel de la V1

### Fonctionnalités incluses

1. **US01 – Rechercher un objet** :
   - Champ de recherche textuel avec auto-tolérance (insensible à la casse, aux accents et aux espaces superflus).
   - Recherche dans le nom et les mots-clés associés.
2. **US02 – Consulter les consignes de tri** :
   - Présentation claire et contrastée des consignes de tri spécifiques pour chaque objet (bac dédié, règles de préparation).
3. **US03 – Rechercher un point de collecte** :
   - Indication des points de collecte physiques adaptés (bornes d'apport volontaire, déchèteries, magasins distributeurs).
4. **US04 – Solutions de réparation et de réemploi** :
   - Conseils pratiques et alternatives pour prolonger la durée de vie de l'objet (Repair Café, dons aux associations, entretien).
5. **US05 – Filtrer par catégorie** :
   - Menu de sélection permettant d'isoler une catégorie d'objets (Piles et batteries, Électronique, Textiles, Verre...) de façon autonome ou combinée avec la recherche textuelle.

---

## 3. Architecture technique

### Technologies autorisées
- HTML5 natif
- CSS3 natif
- JavaScript natif (vanilla)
- JSON local

### Technologies interdites
- Frameworks JavaScript (React, Vue, Angular, etc.)
- Bibliothèques tierces (jQuery, Bootstrap, Tailwind, etc.)
- CDN externe
- Polices web externes (Google Fonts, etc.)
- Base de données serveur ou requêtes réseau pendant la saisie
- API cartographiques lourdes
- Outils de tracking ou services tiers non justifiés

### Fonctionnement
L'application est un site statique hébergé localement. Les données des objets sont stockées dans `objets.json`. Le script `app.js` charge les données locales au démarrage et réalise les recherches et filtrages instantanément dans le navigateur client.

---

## 4. Organisation des fichiers

L'arborescence conserve un nombre minimal de fichiers pour respecter le budget de sobriété :

```text
site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── objets.json
```

### Responsabilités
- **index.html** : Structure sémantique de la page d'accueil, formulaire de recherche (champ texte et sélecteur de catégorie), section de résultats accessible (`aria-live="polite"`).
- **css/style.css** : Styles sobres et responsives (mobile-first 360px), polices système, cibles tactiles >= 44px, contrastes élevés (>= 4,5:1), zéro animation.
- **js/app.js** : Chargement local des données, gestion du formulaire, filtrage croisé (texte + catégorie), génération dynamique des fiches objets (US01 à US05) et gestion de l'état sans résultat.
- **objets.json** : Base de données locale documentée (identifiant, nom, catégorie, mots-clés, consigne de tri, points de collecte, réemploi).

---

## 5. Écrans et états

### Écran E01 : Accueil et filtres
- En-tête : Nom du service *Recyc'Objet*.
- Titre : *Trouver une solution pour vos objets usagés*.
- Champ de saisie : placeholder *Exemple : pile, téléphone, vêtement...*.
- Sélecteur de catégorie : liste déroulante dynamique issue des données.
- Bouton principal : *Rechercher*.
- État initial : formulaire prêt, résultats masqués.

### Écran E02 : Résultats complets (US01 à US05)
- Titre récapitulatif de la recherche et compteur de résultats trouvés.
- Cartes d'objets comprenant :
  - Nom et badge de la catégorie (US01 & US05).
  - Bloc vert clair : **Consigne de tri** (US02).
  - Bloc bleu clair : **Points de collecte** (US03).
  - Bloc ambré : **Réparation & réemploi** (US04).
- Bouton *Modifier ma recherche* pour recentrer le focus sur le formulaire.

### Écran E03 : Aucun résultat
- Message explicite : « Aucun résultat trouvé. »
- Texte d'orientation : « Vérifiez l'orthographe ou essayez un autre nom d'objet ou une autre catégorie. »
- Bouton *Modifier ma recherche*.

---

## 6. Règles de recherche et de filtrage

- Traitement insensible à la casse et aux signes diacritiques (accents).
- Nettoyage des espaces superflus en début et fin de chaîne (`trim`).
- Prise en compte du nom de l'objet et de ses mots-clés.
- Possibilité de filtrer uniquement par catégorie sans texte, ou de croiser texte et catégorie.
- Aucune requête réseau pendant la saisie.
- Modification possible sans rechargement de page.

---

## 7. Contraintes de sobriété numérique

| Indicateur | Limite fixée |
|---|---:|
| Poids total transféré | Moins de 500 Ko |
| Nombre de requêtes | 15 requêtes maximum |
| Temps de chargement | Moins de 3 s en 3G simulée |
| Largeur d'écran cible | Dès 360 px |

Règles associées : police système, absence d'animations/transitions, absence d'images ou d'icônes décoratives, maintien d'un code source compact et lisible.

---

## 8. Accessibilité (WCAG 2.1 AA)

- Ratio de contraste texte/fond >= 4,5:1 sur tous les blocs d'information.
- Taille minimale des composants cliquables >= 44 px (48 px appliqué).
- Libellés de formulaire visibles et associés (`for` / `id`).
- Retour visuel de focus explicite (`outline: 3px solid ...`).
- Compatibilité totale clavier (Tab, Entrée, Espace).
- Rendu sémantique (`<article>`, `<header>`, `<h3>`, `<h4>`, `aria-live`).

---

## 9. Correspondance Gherkin / Spécifications V1

### Scénario 1 : Rechercher un objet connu (US01)
- **Étant donné que** je suis sur la page d'accueil de Recyc'Objet,
- **Quand** je saisis un nom d'objet dans le champ de recherche (ex: « pile »),
- **Alors** les objets correspondants sont affichés.

### Scénario 2 : Aucun objet trouvé (US01)
- **Étant donné que** je suis sur la page d'accueil de Recyc'Objet,
- **Quand** je saisis un nom qui ne correspond à aucun objet connu,
- **Alors** un message indique qu'aucun résultat n'a été trouvé et m'invite à modifier ma recherche.

### Scénario 3 : Consulter les consignes de tri (US02)
- **Étant donné que** les résultats de recherche sont affichés,
- **Quand** je consulte la carte d'un objet,
- **Alors** un bloc spécifique m'indique précisément les consignes de tri et le bac approprié.

### Scénario 4 : Trouver un point de collecte (US03)
- **Étant donné que** les résultats de recherche sont affichés,
- **Quand** je consulte la carte d'un objet,
- **Alors** les lieux et points de collecte (bornes, magasins, déchèteries) me sont présentés.

### Scénario 5 : Découvrir les solutions de réparation et de réemploi (US04)
- **Étant donné que** les résultats de recherche sont affichés,
- **Quand** je consulte la carte d'un objet,
- **Alors** des solutions alternatives (réparation, Repair Café, réemploi, don) sont proposées pour éviter le jet prématuré.

### Scénario 6 : Filtrer les objets par catégorie (US05)
- **Étant donné que** je suis sur la page de recherche,
- **Quand** je sélectionne une catégorie dans la liste déroulante (ex: « Piles et batteries »),
- **Alors** seuls les objets rattachés à cette catégorie sont présentés.

---

## 10. Definition of Done (V1)

Le développement de la V1 est validé lorsque :
- [x] La recherche textuelle par nom et mots-clés fonctionne (US01).
- [x] Les consignes de tri détaillées sont lisibles sur chaque carte (US02).
- [x] Les points de collecte adaptés sont présentés pour chaque objet (US03).
- [x] Les solutions de réparation et de réemploi sont affichées (US04).
- [x] Le filtre par catégorie fonctionne seul et combiné avec la recherche (US05).
- [x] L'ensemble des 6 scénarios Gherkin est vérifié et validé.
- [x] L'affichage est fluide et lisible à 360 px de largeur.
- [x] Le contraste texte/fond respecte strictement le seuil de 4,5:1.
- [x] Les éléments interactifs ont une hauteur/largeur d'au moins 44 px.
- [x] Le poids total des fichiers reste très inférieur à 500 Ko.
- [x] Aucun service tiers externe ni dépendance superflue n'est utilisé.
