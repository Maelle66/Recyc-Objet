<?xml version="1.0" encoding="UTF-8"?>



<brief>



  <projet>

       <nom>Recyc'Objet</nom>

       <description>

           Recyc'Objet est un service web léger qui aide les habitants
           à trouver la meilleure solution pour leurs objets usagés :
           réparation, réemploi, don ou recyclage.

       </description>
       <problematique>

           Les informations concernant le tri, la réparation,
           le réemploi et les lieux de collecte sont dispersées
           entre plusieurs sites et organismes.
           Les habitants perdent du temps à rechercher des
           informations fiables et peuvent se tromper de filière.

       </problematique>

       <objectif>

           Centraliser les informations utiles pour permettre
           aux habitants de trouver facilement quoi faire
           de leurs objets usagés, tout en proposant un service
           accessible et sobre numériquement.

       </objectif>

       <how\_might\_we>

           Comment pourrions-nous aider les habitants à trouver

           facilement la bonne solution pour leurs objets usagés,

           sans imposer un téléphone récent, une connexion rapide,

           une installation ou un compte utilisateur ?

       </how\_might\_we>

  </projet>



  <personas>

        <persona id="P01" role="principal">

           <nom>Josiane</nom>

           <age>71 ans</age>

           <profil>

               Retraitée vivant dans une petite commune.

               Elle possède un smartphone de 2017 et dispose

               d'une connexion 3G instable.

           </profil>

           <besoin>

               Trouver des consignes simples et fiables pour

               savoir quoi faire de ses objets usagés.

           </besoin>

           <frustration>

               Les applications sont compliquées et les informations

               sont difficiles à retrouver.

           </frustration>

           <citation>

               Les applications, c'est compliqué.

           </citation>

           <contraintes>

               <contrainte>Ancien smartphone</contrainte>

               <contrainte>Connexion 3G instable</contrainte>

               <contrainte>Écran de petite taille</contrainte>

               <contrainte>Besoin d'une interface simple</contrainte>

           </contraintes>

        </persona>



       <persona id="P02">

           <nom>Lucas</nom>

           <age>24 ans</age>

           <profil>

               Jeune actif vivant en appartement.

               Il utilise un smartphone récent mais dispose

               d'un forfait mobile limité.

           </profil>

           <besoin>

               Trouver rapidement les consignes de tri et les

               solutions adaptées à ses objets.

           </besoin>

           <contraintes>

               <contrainte>Forfait mobile limité</contrainte>

               <contrainte>Recherche rapide</contrainte>

               <contrainte>Informations centralisées</contrainte>

           </contraintes>

       </persona>



       <persona id="P03">

           <nom>Sophie</nom>

           <age>42 ans</age>

           <profil>

               Agente d'un service de gestion des déchets.

               Elle utilise principalement un ordinateur

               avec une bonne connexion.

           </profil>

           <besoin>

               Retrouver rapidement des informations fiables

               pour orienter les habitants.

           </besoin>

       </persona>



   </personas>



   <objectifs>

       <objectif id="O01">

           Faciliter l'identification de la bonne filière

           pour un objet usagé.

       </objectif>

       <objectif id="O02">

           Favoriser la réparation et le réemploi avant le recyclage.

       </objectif>

       <objectif id="O03">

           Rendre les informations accessibles aux personnes

           disposant d'un équipement ancien ou d'une connexion limitée.

       </objectif>

       <indicateur id="I01">

           Au moins 8 utilisateurs sur 10 doivent trouver

           la bonne consigne ou le bon point de collecte

           en moins de 2 minutes pendant les tests.

           Il s'agit d'un objectif à vérifier.

       </indicateur>

   </objectifs>



   <backlog>



       <user\_story id="US01" priority="Must">

           <titre>Rechercher un objet</titre>

           <description>

               En tant qu'utilisateur, je veux rechercher un objet

               par son nom afin de trouver rapidement les informations

               le concernant.

           </description>

           <valeur>5</valeur>

           <empreinte>1</empreinte>

           <score\_sobriete>5</score\_sobriete>

       </user\_story>



       <user\_story id="US02" priority="Must">

           <titre>Consulter les consignes de tri</titre>

           <description>

               En tant qu'utilisateur, je veux consulter les consignes

               de tri d'un objet afin de savoir comment m'en débarrasser

               correctement.

           </description>

           <valeur>5</valeur>

           <empreinte>1</empreinte>

           <score\_sobriete>5</score\_sobriete>

       </user\_story>



       <user\_story id="US03" priority="Must">

           <titre>Rechercher un point de collecte</titre>

           <description>

               En tant qu'utilisateur, je veux trouver les points

               de collecte adaptés à mon objet afin de pouvoir

               le déposer au bon endroit.

           </description>

           <valeur>5</valeur>

           <empreinte>1</empreinte>

           <score\_sobriete>5</score\_sobriete>

       </user\_story>



       <user\_story id="US04" priority="Must">

           <titre>Découvrir les solutions de réparation et de réemploi</titre>

           <description>

               En tant qu'utilisateur, je veux connaître les possibilités

               de réparation ou de réemploi afin d'éviter de jeter

               un objet encore utilisable.

           </description>

           <valeur>4</valeur>

           <empreinte>1</empreinte>

           <score\_sobriete>4</score\_sobriete>

       </user\_story>



       <user\_story id="US05" priority="Must">

           <titre>Filtrer les objets par catégorie</titre>

           <description>

               En tant qu'utilisateur, je veux filtrer les objets

               par catégorie afin de retrouver plus facilement

               celui que je cherche.

           </description>

           <valeur>4</valeur>

           <empreinte>1</empreinte>

           <score\_sobriete>4</score\_sobriete>

       </user\_story>



   </backlog>



   <story\_du\_jour id="US01">



       <titre>Rechercher un objet par son nom</titre>



       <persona>Josiane</persona>



       <user\_story>

           En tant que Josiane, je veux rechercher un objet

           par son nom afin de trouver rapidement les informations

           qui indiquent quoi en faire.

       </user\_story>



       <fonctionnalite>

           Un champ de recherche permet de saisir le nom d'un objet.

           Les résultats correspondants sont affichés à partir

           d'une liste locale d'objets.

       </fonctionnalite>



       <etats>

           <etat>Page d'accueil avec champ de recherche</etat>

           <etat>Affichage des résultats</etat>

           <etat>Affichage d'un message si aucun résultat n'est trouvé</etat>

       </etats>



   </story\_du\_jour>



   <gherkin>



       <feature name="Rechercher un objet">



           <scenario name="Trouver un objet existant">

               <given>

                   Je suis sur la page d'accueil de Recyc'Objet.

               </given>

               <when>

                   Je saisis le nom d'un objet connu, par exemple pile.

               </when>

               <then>

                   Les objets correspondants sont affichés.

               </then>

               <and>

                   Je peux identifier le résultat qui correspond

                   à mon objet.

               </and>

           </scenario>



           <scenario name="Aucun objet correspondant">

               <given>

                   Je suis sur la page d'accueil de Recyc'Objet.

               </given>

               <when>

                   Je saisis un nom qui ne correspond à aucun objet

                   référencé.

               </when>

               <then>

                   Un message indique qu'aucun résultat n'a été trouvé.

               </then>

               <and>

                   Je peux modifier ma recherche.

               </and>

           </scenario>



       </feature>



   </gherkin>



   <maquette>



       <ecran id="E01" name="Accueil et recherche">



           <element>Nom du service : Recyc'Objet</element>

           <element>Titre : Que souhaitez-vous rechercher ?</element>

           <element>

               Champ de saisie avec le placeholder :

               Exemple : pile, téléphone...

           </element>

           <element>Bouton : Rechercher</element>

           <element>

               Texte d'aide : Vous pouvez rechercher un objet

               par son nom.

           </element>



       </ecran>



       <ecran id="E02" name="Résultats">



           <element>Titre : Résultats pour la recherche</element>

           <element>Liste des objets correspondants</element>

           <element>Bouton pour modifier la recherche</element>



       </ecran>



       <ecran id="E03" name="Aucun résultat">



           <element>Message : Aucun résultat trouvé.</element>

           <element>

               Texte : Vérifiez l'orthographe ou essayez

               un autre nom d'objet.

           </element>

           <element>Bouton : Modifier ma recherche</element>



       </ecran>



       <export>

           Le code HTML autonome exporté depuis Claude Design

           devra être intégré ici.

       </export>



   </maquette>



   <budget>



       <performance>

           <poids\_max unite="Ko">500</poids\_max>

           <requêtes\_max>15</requêtes\_max>

           <temps\_affichage\_max unite="secondes">3</temps\_affichage\_max>

       </performance>



       <appareil\_cible>

           <largeur\_ecran unite="px">360</largeur\_ecran>

           <systeme>Android 8 / iOS 13</systeme>

           <memoire unite="Go">2</memoire>

           <navigateur>Chrome / Safari génération 2019</navigateur>

           <connexion>3G instable</connexion>

       </appareil\_cible>



       <mesures\_initiales>

           <poids>À mesurer</poids>

           <nombre\_requetes>À mesurer</nombre\_requetes>

           <temps\_chargement>À mesurer</temps\_chargement>

           <ecoindex>À mesurer</ecoindex>

       </mesures\_initiales>



   </budget>



   <hors\_perimetre>

       <fonctionnalite>US02 : consultation des consignes de tri</fonctionnalite>

       <fonctionnalite>US03 : recherche des points de collecte</fonctionnalite>

       <fonctionnalite>US04 : réparation et réemploi</fonctionnalite>

       <fonctionnalite>US05 : filtres par catégorie</fonctionnalite>

       <raison>

           Le prototype du Jour 3 doit se concentrer uniquement

           sur la User Story US01.

       </raison>

   </hors\_perimetre>



   <dod>



       <critere>

           La recherche par nom fonctionne avec les données locales.

       </critere>

       <critere>

           Les résultats correspondent au texte saisi.

       </critere>

       <critere>

           Un message apparaît lorsqu'aucun résultat n'est trouvé.

       </critere>

       <critere>

           Les scénarios Gherkin de US01 sont vérifiés.

       </critere>

       <critere>

           Le site est utilisable sur un écran de 360 px.

       </critere>

       <critere>

           Le contraste est au minimum de 4,5:1.

       </critere>

       <critere>

           Les éléments interactifs ont une taille minimale de 44 px.

       </critere>

       <critere>

           Les champs possèdent des libellés visibles.

       </critere>

       <critere>

           La navigation au clavier est possible.

       </critere>

       <critere>

           Le poids de la page ne dépasse pas 500 Ko.

       </critere>

       <critere>

           Le nombre de requêtes ne dépasse pas 15.

       </critere>

       <critere>

           Le chargement prend moins de 3 secondes en 3G simulée.

       </critere>

       <critere>

           Aucun média ne se lance automatiquement.

       </critere>

       <critere>

           Aucun service tiers non justifié n'est utilisé.

       </critere>

       <critere>

           Les mesures avant et après sont réalisées dans

           des conditions identiques.

       </critere>



   </dod>



   <regles>



       <developpement>

           <technologies>

               <technologie>HTML natif</technologie>

               <technologie>CSS natif</technologie>

               <technologie>JavaScript natif</technologie>

               <technologie>JSON local</technologie>

           </technologies>



           <interdictions>

               <interdiction>Framework</interdiction>

               <interdiction>Bibliothèque externe</interdiction>

               <interdiction>CDN</interdiction>

               <interdiction>Police externe</interdiction>

               <interdiction>Base de données pour US01</interdiction>

               <interdiction>Requête réseau pendant la saisie</interdiction>

               <interdiction>Vidéo</interdiction>

               <interdiction>Animation</interdiction>

               <interdiction>Image décorative</interdiction>

               <interdiction>Traceur et service tiers non justifié</interdiction>

           </interdictions>

       </developpement>



       <sobriete>

           <regle>Utiliser une police système.</regle>

           <regle>Limiter le nombre de ressources chargées.</regle>

           <regle>Privilégier les données locales.</regle>

           <regle>Ne charger que les éléments nécessaires.</regle>

           <regle>Ne pas utiliser de défilement infini.</regle>

           <regle>Ne pas utiliser de lecture automatique.</regle>

           <regle>Ne pas imposer de compte utilisateur.</regle>

           <regle>Ne pas imposer d'installation.</regle>

       </sobriete>



       <accessibilite>

           <contraste\_minimum>4.5:1</contraste\_minimum>

           <taille\_cible\_minimale unite="px">44</taille\_cible\_minimale>

           <libelles>Visibles</libelles>

           <navigation>Clavier</navigation>

           <couleur>

               La couleur ne doit jamais être le seul moyen

               de transmettre une information.

           </couleur>

       </accessibilite>



       <organisation>

           <dossier nom="docs">

               Contient le brief et les documents de conception.

           </dossier>

           <dossier nom="site">

               Contient uniquement le code du site.

           </dossier>

           <dossier nom="outils">

               Contient les outils de mesure.

           </dossier>

           <fichier>site/objets.json</fichier>

       </organisation>



       <assistant\_code>

           <regle>Lire le brief avant toute modification.</regle>

           <regle>Développer uniquement US01.</regle>

           <regle>Modifier uniquement les fichiers nécessaires.</regle>

           <regle>Ne pas ajouter de fonctionnalité non demandée.</regle>

           <regle>Ne pas ajouter de dépendance externe.</regle>

           <regle>Relire les modifications avant validation.</regle>

           <regle>Vérifier les critères Gherkin.</regle>

           <regle>

               Ne jamais inventer de résultats de mesure.

           </regle>

       </assistant\_code>



   </regles>



   <mesures\_apres>

       <poids>À mesurer</poids>

       <nombre\_requetes>À mesurer</nombre\_requetes>

       <temps\_chargement>À mesurer</temps\_chargement>

       <ecoindex>À mesurer</ecoindex>

       <accessibilite>À vérifier</accessibilite>

   </mesures\_apres>



   <tests\_utilisateurs>

       <nombre\_utilisateurs>Environ 5</nombre\_utilisateurs>

       <consigne>

           Recherchez une pile alcaline dans Recyc'Objet.

       </consigne>

       <observations>

           <element>Compréhension du champ de recherche</element>

           <element>Facilité de saisie</element>

           <element>Identification du bon résultat</element>

           <element>Temps nécessaire</element>

           <element>Hésitations et erreurs</element>

       </observations>

       <regle>

           Ne pas aider l'utilisateur pendant le test.

       </regle>

   </tests\_utilisateurs>



</brief>

