**# SPEC.md**



\## 1. Objectif du développement



Développer un prototype fonctionnel correspondant exclusivement à la User Story US01 : rechercher un objet par son nom.



Le prototype doit permettre à l'utilisateur :

\- de saisir le nom d'un objet ;

\- de lancer une recherche ;

\- de consulter les résultats correspondants ;

\- de comprendre lorsqu'aucun résultat n'est disponible ;

\- de modifier sa recherche.



Le prototype doit être léger, accessible et utilisable sur un ancien smartphone avec une connexion 3G instable.



Ne pas développer les autres User Stories.



\---



\## 2. Périmètre fonctionnel



\### Fonctionnalité US01 : rechercher un objet



En tant que Josiane, je veux rechercher un objet par son nom afin de trouver rapidement les informations qui indiquent quoi en faire.



\### Fonctionnalités attendues



1\. Afficher une page d'accueil.

2\. Afficher un champ de recherche.

3\. Permettre la saisie du nom d'un objet.

4\. Déclencher la recherche.

5\. Afficher les objets correspondants.

6\. Afficher un message si aucun résultat n'est trouvé.

7\. Permettre de modifier la recherche.



\### Fonctionnalités exclues



\- Consultation détaillée des consignes de tri (US02).

\- Recherche des points de collecte (US03).

\- Solutions de réparation et de réemploi (US04).

\- Filtres par catégorie (US05).

\- Géolocalisation.

\- Carte interactive.

\- Création de compte.

\- Notifications.

\- Intelligence artificielle.



\---



\## 3. Architecture technique



\### Technologies autorisées



\- HTML5

\- CSS3

\- JavaScript natif

\- JSON local



\### Technologies interdites



\- Framework JavaScript.

\- Bibliothèque externe.

\- CDN.

\- Police externe.

\- Base de données.

\- API externe.

\- Service tiers non justifié.



\### Fonctionnement



L'application est un site statique.



Les objets sont enregistrés dans un fichier JSON local.



JavaScript charge les données locales et effectue la recherche directement dans le navigateur.



Aucune requête réseau ne doit être effectuée pendant la saisie.



La recherche doit être insensible à la casse et tolérer les espaces superflus.



\---



\## 4. Organisation des fichiers



Créer uniquement les fichiers nécessaires.



site/

├── index.html

├── css/

│   └── style.css

├── js/

│   └── app.js

└── objets.json



\### Responsabilités



\#### index.html

\- Structure de la page.

\- Champ de recherche.

\- Bouton de recherche.

\- Zone d'affichage des résultats.

\- Zone de message sans résultat.



\#### css/style.css

\- Mise en page.

\- Adaptation mobile.

\- Lisibilité.

\- Contrastes.

\- Taille des éléments interactifs.



\#### js/app.js

\- Chargement des données locales.

\- Gestion du formulaire.

\- Traitement de la recherche.

\- Affichage des résultats.

\- Gestion de l'état sans résultat.



\#### objets.json

Contient une liste locale d'objets de démonstration.



Exemple de structure :



\[

 {

   "id": 1,

   "nom": "Pile alcaline",

   "motsCles": \["pile", "piles", "alcaline"]

 },

 {

   "id": 2,

   "nom": "Pile rechargeable",

   "motsCles": \["pile rechargeable", "accumulateur"]

 },

 {

   "id": 3,

   "nom": "Batterie",

   "motsCles": \["batterie", "accumulateur"]

 },

 {

   "id": 4,

   "nom": "Téléphone portable",

   "motsCles": \["téléphone", "portable", "smartphone"]

 },

 {

   "id": 5,

   "nom": "Ordinateur",

   "motsCles": \["ordinateur", "pc"]

 }

]



Ces données sont uniquement destinées à la démonstration de la recherche.



\---



\## 5. Écrans et états



\### Écran E01 : accueil



Éléments :

\- Nom du service : Recyc'Objet.

\- Titre : Que souhaitez-vous rechercher ?

\- Champ de recherche.

\- Placeholder : Exemple : pile, téléphone...

\- Bouton : Rechercher.

\- Texte d'aide.



État initial :

\- Champ vide.

\- Aucun résultat affiché.



\### Écran E02 : résultats



Après une recherche valide :

\- Afficher le texte recherché.

\- Afficher la liste des objets correspondants.

\- Chaque résultat présente le nom de l'objet.



Exemple :



Résultats pour : pile



\- Pile alcaline

\- Pile rechargeable



Proposer un moyen de modifier la recherche.



\### Écran E03 : aucun résultat



Lorsque la recherche ne correspond à aucun objet :



Afficher :

« Aucun résultat trouvé. »



Afficher également :

« Vérifiez l'orthographe ou essayez un autre nom d'objet. »



Proposer un bouton ou un champ permettant de modifier la recherche.



\---



\## 6. Règles de recherche



\- Supprimer les espaces au début et à la fin de la saisie.

\- Ignorer les différences entre majuscules et minuscules.

\- Rechercher dans le nom et les mots-clés.

\- Ne pas envoyer de requête réseau pendant la saisie.

\- Ne pas afficher de résultats avant le déclenchement de la recherche.

\- Afficher un message explicite si aucun résultat n'est trouvé.

\- Autoriser une nouvelle recherche sans recharger la page.



\---



\## 7. Contraintes de sobriété numérique



\### Budget de performance



| Indicateur | Limite |

|---|---:|

| Poids transféré | 500 Ko maximum |

| Nombre de requêtes | 15 maximum |

| Temps de chargement | Moins de 3 secondes en 3G |

| Largeur de référence | 360 px |



\### Règles



\- Utiliser uniquement une police système.

\- Ne pas ajouter d'images décoratives.

\- Ne pas ajouter d'icônes décoratives.

\- Ne pas utiliser de vidéo.

\- Ne pas utiliser d'animation.

\- Ne pas utiliser de lecture automatique.

\- Ne pas utiliser de défilement infini.

\- Limiter le nombre de fichiers et de ressources.

\- Privilégier les données locales.

\- Ne pas charger de ressources inutiles.

\- Ne pas ajouter de traceur ou d'outil analytique externe.



\---



\## 8. Accessibilité



\- Contraste minimum de 4,5:1 pour le texte.

\- Éléments interactifs d'au moins 44 px.

\- Champ de recherche avec un label visible.

\- Bouton avec un texte explicite.

\- Navigation possible au clavier.

\- Focus clavier visible.

\- Ne jamais utiliser uniquement la couleur pour transmettre une information.

\- Utiliser une structure HTML sémantique.

\- Prévoir des messages compréhensibles pour les lecteurs d'écran.



\---



\## 9. Parc cible



\- Smartphone Android 8 ou iOS 13.

\- Navigateur Chrome ou Safari de génération 2019.

\- Écran de 360 px.

\- Mémoire de 2 Go.

\- Connexion 3G instable.



L'interface doit rester lisible et utilisable sur ce matériel.



\---



\## 10. Correspondance Gherkin / développement



\### Scénario 1 : trouver un objet existant



Étant donné que je suis sur la page d'accueil de Recyc'Objet,

Quand je saisis le nom d'un objet connu, par exemple « pile »,

Alors les objets correspondants sont affichés,

Et je peux identifier le résultat qui correspond à mon objet.



\### Scénario 2 : aucun objet correspondant



Étant donné que je suis sur la page d'accueil de Recyc'Objet,

Quand je saisis un nom qui ne correspond à aucun objet référencé,

Alors un message indique qu'aucun résultat n'a été trouvé,

Et je peux modifier ma recherche.



\---



\## 11. Definition of Done



Le développement est terminé lorsque :



\- \[ ] Le champ de recherche fonctionne.

\- \[ ] La recherche utilise les données locales.

\- \[ ] Les résultats correspondent à la recherche.

\- \[ ] La recherche ignore les majuscules et minuscules.

\- \[ ] Les espaces superflus sont ignorés.

\- \[ ] Le message sans résultat fonctionne.

\- \[ ] Une nouvelle recherche est possible.

\- \[ ] Les deux scénarios Gherkin sont vérifiés.

\- \[ ] L'affichage est adapté à 360 px.

\- \[ ] Le contraste est conforme.

\- \[ ] Les éléments interactifs mesurent au moins 44 px.

\- \[ ] La navigation clavier fonctionne.

\- \[ ] Le poids ne dépasse pas 500 Ko.

\- \[ ] Le nombre de requêtes ne dépasse pas 15.

\- \[ ] Le chargement est inférieur à 3 secondes en 3G simulée.

\- \[ ] Aucun service externe non justifié n'est utilisé.



\---



\## 12. Consignes de développement



\- Lire le brief.md et ce SPEC.md avant de commencer.

\- Développer uniquement US01.

\- Respecter strictement les technologies autorisées.

\- Ne pas ajouter de fonctionnalités non demandées.

\- Ne pas installer de dépendances.

\- Ne pas modifier les fichiers hors du dossier site/.

\- Ne pas créer de documentation supplémentaire.

\- Ne pas inventer de mesures de performance.

\- Relire les modifications avant validation.

\- Vérifier les deux scénarios Gherkin.

\- Ne pas commencer US02 à US05.



Le prototype doit rester simple, fonctionnel et sobre.

