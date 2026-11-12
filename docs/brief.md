<?xml version="1.0" encoding="UTF-8"?>

<brief>

    <projet>
        <nom>Recyc'Objet</nom>
        <version>V1</version>
        <description>
            Recyc'Objet est un service web léger qui aide les habitants
            à trouver la meilleure solution pour leurs objets usagés :
            réparation, réemploi, don, points de collecte ou recyclage.
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
        <how_might_we>
            Comment pourrions-nous aider les habitants à trouver
            facilement la bonne solution pour leurs objets usagés,
            sans imposer un téléphone récent, une connexion rapide,
            une installation ou un compte utilisateur ?
        </how_might_we>
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
        </indicateur>
    </objectifs>

    <backlog>
        <user_story id="US01" priority="Must" status="Inclus_V1">
            <titre>Rechercher un objet</titre>
            <description>
                En tant qu'utilisateur, je veux rechercher un objet
                par son nom afin de trouver rapidement les informations
                le concernant.
            </description>
            <valeur>5</valeur>
            <empreinte>1</empreinte>
            <score_sobriete>5</score_sobriete>
        </user_story>

        <user_story id="US02" priority="Must" status="Inclus_V1">
            <titre>Consulter les consignes de tri</titre>
            <description>
                En tant qu'utilisateur, je veux consulter les consignes
                de tri d'un objet afin de savoir comment m'en débarrasser
                correctement.
            </description>
            <valeur>5</valeur>
            <empreinte>1</empreinte>
            <score_sobriete>5</score_sobriete>
        </user_story>

        <user_story id="US03" priority="Must" status="Inclus_V1">
            <titre>Rechercher un point de collecte</titre>
            <description>
                En tant qu'utilisateur, je veux trouver les points
                de collecte adaptés à mon objet afin de pouvoir
                le déposer au bon endroit.
            </description>
            <valeur>5</valeur>
            <empreinte>1</empreinte>
            <score_sobriete>5</score_sobriete>
        </user_story>

        <user_story id="US04" priority="Must" status="Inclus_V1">
            <titre>Découvrir les solutions de réparation et de réemploi</titre>
            <description>
                En tant qu'utilisateur, je veux connaître les possibilités
                de réparation ou de réemploi afin d'éviter de jeter
                un objet encore utilisable.
            </description>
            <valeur>4</valeur>
            <empreinte>1</empreinte>
            <score_sobriete>4</score_sobriete>
        </user_story>

        <user_story id="US05" priority="Must" status="Inclus_V1">
            <titre>Filtrer les objets par catégorie</titre>
            <description>
                En tant qu'utilisateur, je veux filtrer les objets
                par catégorie afin de retrouver plus facilement
                celui que je cherche.
            </description>
            <valeur>4</valeur>
            <empreinte>1</empreinte>
            <score_sobriete>4</score_sobriete>
        </user_story>
    </backlog>

    <version_cible id="V1">
        <titre>Application complète V1 (US01 à US05)</titre>
        <persona_cible>Josiane et Lucas</persona_cible>
        <description>
            La version V1 regroupe la recherche par nom (US01), le détail des consignes
            de tri (US02), la localisation des points de collecte (US03), les opportunités
            de réemploi et réparation (US04) et le filtrage dynamique par catégorie (US05).
        </description>
        <etats>
            <etat>Accueil avec champ de recherche textuelle et sélection de catégorie</etat>
            <etat>Affichage des cartes complètes avec tri, points de collecte et réemploi</etat>
            <etat>Affichage explicite en cas d'absence de résultat avec possibilité de modification</etat>
        </etats>
    </version_cible>

    <gherkin>
        <feature name="Guide complet Recyc'Objet V1">

            <scenario name="US01 - Trouver un objet existant">
                <given>Je suis sur la page d'accueil de Recyc'Objet.</given>
                <when>Je saisis le nom d'un objet connu, par exemple pile.</when>
                <then>Les objets correspondants sont affichés sous forme de fiches détaillées.</then>
                <and>Je peux identifier le résultat qui correspond à mon objet.</and>
            </scenario>

            <scenario name="US01 - Aucun objet correspondant">
                <given>Je suis sur la page d'accueil de Recyc'Objet.</given>
                <when>Je saisis un nom qui ne correspond à aucun objet référencé.</when>
                <then>Un message indique qu'aucun résultat n'a été trouvé.</then>
                <and>Je peux modifier ma recherche.</and>
            </scenario>

            <scenario name="US02 - Consulter les consignes de tri">
                <given>Les résultats de recherche sont affichés.</given>
                <when>Je consulte la fiche d'un objet.</when>
                <then>La consigne de tri adaptée m'indique comment trier l'objet et dans quel bac le déposer.</then>
            </scenario>

            <scenario name="US03 - Identifier les points de collecte">
                <given>Les résultats de recherche sont affichés.</given>
                <when>Je consulte la fiche d'un objet.</when>
                <then>Les lieux et bornes de collecte adaptés me sont précisés.</then>
            </scenario>

            <scenario name="US04 - Découvrir le réemploi et la réparation">
                <given>Les résultats de recherche sont affichés.</given>
                <when>Je consulte la fiche d'un objet réparable ou réemployable.</when>
                <then>Des conseils de réparation, de don ou d'entretien sont mis en avant pour éviter le jet.</then>
            </scenario>

            <scenario name="US05 - Filtrer les objets par catégorie">
                <given>Je suis sur la page de recherche.</given>
                <when>Je sélectionne une catégorie spécifique dans le filtre déroulant.</when>
                <then>Seuls les objets appartenant à cette catégorie sont affichés.</then>
            </scenario>

        </feature>
    </gherkin>

    <maquette>
        <ecran id="E01" name="Accueil et filtres">
            <element>Nom du service : Recyc'Objet</element>
            <element>Titre : Trouver une solution pour vos objets usagés</element>
            <element>Champ de recherche avec placeholder : Exemple : pile, téléphone, vêtement...</element>
            <element>Menu déroulant de filtre par catégorie (US05)</element>
            <element>Bouton : Rechercher</element>
            <element>Texte d'aide explicatif</element>
        </ecran>

        <ecran id="E02" name="Résultats détaillés V1">
            <element>Titre récapitulatif de la recherche et compteur de résultats</element>
            <element>Liste de cartes d'objets avec badge de catégorie</element>
            <element>Bloc Consigne de tri (US02)</element>
            <element>Bloc Points de collecte (US03)</element>
            <element>Bloc Réparation &amp; réemploi (US04)</element>
            <element>Bouton : Modifier ma recherche</element>
        </ecran>

        <ecran id="E03" name="Aucun résultat">
            <element>Message : Aucun résultat trouvé.</element>
            <element>Texte : Vérifiez l'orthographe ou essayez un autre nom d'objet ou une autre catégorie.</element>
            <element>Bouton : Modifier ma recherche</element>
        </ecran>
    </maquette>

    <budget>
        <performance>
            <poids_max unite="Ko">500</poids_max>
            <requêtes_max>15</requêtes_max>
            <temps_affichage_max unite="secondes">3</temps_affichage_max>
        </performance>

        <appareil_cible>
            <largeur_ecran unite="px">360</largeur_ecran>
            <systeme>Android 8 / iOS 13</systeme>
            <memoire unite="Go">2</memoire>
            <navigateur>Chrome / Safari génération 2019</navigateur>
            <connexion>3G instable</connexion>
        </appareil_cible>
    </budget>

    <dod>
        <critere>La recherche par nom fonctionne avec les données locales (US01).</critere>
        <critere>Les consignes de tri détaillées sont lisibles pour chaque objet (US02).</critere>
        <critere>Les points de collecte physiques sont clairement indiqués (US03).</critere>
        <critere>Les solutions de réparation et de réemploi sont documentées (US04).</critere>
        <critere>Le filtrage par catégorie fonctionne de manière fluide (US05).</critere>
        <critere>Les 6 scénarios Gherkin de la V1 sont vérifiés.</critere>
        <critere>Le site est pleinement utilisable sur un écran de 360 px.</critere>
        <critere>Le contraste est au minimum de 4,5:1 (conforme WCAG AA).</critere>
        <critere>Les éléments interactifs ont une taille minimale de 44 px.</critere>
        <critere>La navigation au clavier est totale et le focus visible.</critere>
        <critere>Le poids de la page ne dépasse pas 500 Ko (actuellement ~23 Ko).</critere>
        <critere>Le nombre de requêtes reste inférieur à 15.</critere>
        <critere>Aucune animation superflue ni dépendance externe non justifiée.</critere>
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
                <interdiction>Base de données externe</interdiction>
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
            <contraste_minimum>4.5:1</contraste_minimum>
            <taille_cible_minimale unite="px">44</taille_cible_minimale>
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
                Contient uniquement le code du site (index.html, css/style.css, js/app.js, objets.json).
            </dossier>
            <fichier>site/objets.json</fichier>
        </organisation>

        <assistant_code>
            <regle>Lire le brief avant toute modification.</regle>
            <regle>Développer et maintenir la V1 complète (US01 à US05).</regle>
            <regle>Modifier uniquement les fichiers nécessaires.</regle>
            <regle>Ne pas ajouter de fonctionnalité hors périmètre.</regle>
            <regle>Ne pas ajouter de dépendance externe.</regle>
            <regle>Relire les modifications avant validation.</regle>
            <regle>Vérifier les critères Gherkin de la V1.</regle>
            <regle>Ne jamais inventer de résultats de mesure.</regle>
        </assistant_code>
    </regles>

</brief>
