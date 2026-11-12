/**
 * Recyc'Objet - V1 complète (US01 à US05)
 * US01 : Recherche par nom
 * US02 : Consignes de tri détaillées
 * US03 : Points de collecte
 * US04 : Solutions de réparation et de réemploi
 * US05 : Filtre par catégorie
 *
 * JavaScript natif, sans dépendance externe ni bibliothèque tierce.
 */

(function () {
  'use strict';

  // Données de secours locales complètes (US01 à US05)
  const DONNEES_FALLBACK = [
    {
      "id": 1,
      "nom": "Pile alcaline",
      "categorie": "Piles et batteries",
      "motsCles": ["pile", "piles", "alcaline"],
      "consigneTri": "À déposer obligatoirement dans un bac de collecte dédié aux piles. Ne jamais jeter dans la poubelle d'ordures ménagères.",
      "pointsCollecte": "Bornes en supermarché, mairies, magasins de bricolage et déchèteries municipales.",
      "solutionsReemploi": "Non rechargeable. Pour limiter les déchets futurs, privilégiez les accumulateurs (piles rechargeables)."
    },
    {
      "id": 2,
      "nom": "Pile rechargeable",
      "categorie": "Piles et batteries",
      "motsCles": ["pile rechargeable", "accumulateur", "piles"],
      "consigneTri": "En fin de vie, déposer dans une borne de collecte pour piles et accumulateurs usagés.",
      "pointsCollecte": "Supermarchés, magasins spécialisés en électronique et déchèteries.",
      "solutionsReemploi": "Rechargeable plusieurs centaines de fois avec un chargeur adapté. Vérifiez l'état des contacts avant de la recycler."
    },
    {
      "id": 3,
      "nom": "Batterie",
      "categorie": "Piles et batteries",
      "motsCles": ["batterie", "accumulateur", "lithium", "vélo"],
      "consigneTri": "À rapporter en point de collecte spécifique ou en déchèterie. Risque important de départ de feu en cas de mauvais tri.",
      "pointsCollecte": "Déchèterie municipale, magasins de bricolage, garages et centres auto.",
      "solutionsReemploi": "Pour les batteries de vélo ou d'outillage, faites appel à un reconditionneur professionnel pour changer uniquement les cellules usées."
    },
    {
      "id": 4,
      "nom": "Téléphone portable",
      "categorie": "Appareils électroniques",
      "motsCles": ["téléphone", "portable", "smartphone", "mobile"],
      "consigneTri": "À déposer dans un bac de collecte DEEE (Déchets d'Équipements Électriques et Électroniques) ou à rapporter en magasin.",
      "pointsCollecte": "Bacs de reprise en magasins de téléphonie et d'électroménager, points de collecte Ecosystem, déchèteries.",
      "solutionsReemploi": "S'il fonctionne encore : donnez-le à un proche, une ressourcerie ou une association solidaire (ex: Emmaüs). En cas de panne : faites remplacer la batterie ou l'écran dans un Repair Café ou chez un réparateur labellisé QualiRépar."
    },
    {
      "id": 5,
      "nom": "Ordinateur",
      "categorie": "Appareils électroniques",
      "motsCles": ["ordinateur", "pc", "portable", "écran", "tour"],
      "consigneTri": "Filière DEEE obligatoire en déchèterie ou reprise gratuite « un pour un » chez votre revendeur informatique.",
      "pointsCollecte": "Déchèteries équipées DEEE, enseignes d'électroménager et boutiques d'informatique.",
      "solutionsReemploi": "Nettoyage du système, passage sous un système d'exploitation léger (Linux) ou ajout d'un disque SSD pour prolonger sa durée de vie. Don possible à des associations d'inclusion numérique."
    },
    {
      "id": 6,
      "nom": "Vêtement en textile",
      "categorie": "Textiles",
      "motsCles": ["vêtement", "habit", "pantalon", "chemise", "tissu", "textile"],
      "consigneTri": "Placer propre et sec dans un sac fermé avant de le déposer dans un conteneur dédié.",
      "pointsCollecte": "Conteneurs textiles (Le Relais), ressourceries locales, associations caritatives.",
      "solutionsReemploi": "Réparation (boutons, fermeture éclair, ourlet), customisation, réutilisation en chiffons d'atelier ou don aux associations."
    },
    {
      "id": 7,
      "nom": "Bocal en verre",
      "categorie": "Verre et emballages",
      "motsCles": ["verre", "bocal", "pot", "conserve"],
      "consigneTri": "Jeter dans le conteneur à verre sans le bouchon ou couvercle (les couvercles métalliques vont dans le bac jaune). Inutile de le laver.",
      "pointsCollecte": "Colonnes et bornes d'apport volontaire pour le verre.",
      "solutionsReemploi": "Réutilisable immédiatement pour le stockage alimentaire en vrac, les confitures maison ou les conserves."
    }
  ];

  let listeObjets = [];

  // Éléments du DOM
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const resultsSection = document.getElementById('results-section');

  /**
   * Nettoie et normalise une chaîne (minuscules, sans accents)
   * @param {string} str
   * @returns {string}
   */
  function normaliser(str) {
    if (!str) return '';
    return str
      .toString()
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Échappe les caractères HTML pour éviter les failles XSS
   * @param {string} str
   * @returns {string}
   */
  function echapperHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  /**
   * Charge les données locales d'objets depuis objets.json
   */
  async function chargerDonnees() {
    // Si la page est ouverte directement depuis le système de fichiers (protocole file://),
    // les navigateurs bloquent fetch() par mesure de sécurité CORS (origin 'null').
    // On utilise directement les données locales intégrées pour éviter toute erreur réseau en console.
    if (window.location.protocol === 'file:') {
      listeObjets = DONNEES_FALLBACK;
      return;
    }

    try {
      const response = await fetch('./objets.json');
      if (response.ok) {
        listeObjets = await response.json();
        return;
      }
    } catch (e) {
      // Repli si le serveur HTTP local rencontre une anomalie
    }
    listeObjets = DONNEES_FALLBACK;
  }

  /**
   * Initialise le menu déroulant des catégories (US05)
   */
  function initialiserFiltreCategories() {
    if (!categoryFilter) return;

    // Si les options ne sont pas déjà présentes dans le HTML
    if (categoryFilter.options.length <= 1) {
      const categories = Array.from(new Set(listeObjets.map((obj) => obj.categorie).filter(Boolean)));
      categories.sort();
      categories.forEach((cat) => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
      });
    }

    // Mettre à jour les résultats quand l'utilisateur change de catégorie
    categoryFilter.addEventListener('change', () => {
      lancerRecherche();
    });
  }

  /**
   * Effectue le filtrage combiné recherche texte (US01) et catégorie (US05)
   * @param {string} texte
   * @param {string} categorie
   * @returns {Array}
   */
  function filtrerObjets(texte, categorie) {
    const termeNormalise = normaliser(texte);
    const catFiltre = (categorie || '').trim();

    return listeObjets.filter((objet) => {
      // Filtre catégorie (US05)
      if (catFiltre && objet.categorie !== catFiltre) {
        return false;
      }

      // Si aucun texte saisi, la sélection de catégorie suffit
      if (!termeNormalise) {
        return true;
      }

      // Filtre texte (US01)
      const nomNormalise = normaliser(objet.nom);
      if (nomNormalise.includes(termeNormalise)) {
        return true;
      }

      if (Array.isArray(objet.motsCles)) {
        return objet.motsCles.some((mot) => normaliser(mot).includes(termeNormalise));
      }

      return false;
    });
  }

  /**
   * Affiche les cartes d'objets avec US01, US02, US03, US04 et US05
   * @param {string} termeSaisi
   * @param {string} categorieChoisie
   * @param {Array} resultats
   */
  function afficherResultats(termeSaisi, categorieChoisie, resultats) {
    let titreResume = 'Résultats pour la recherche';
    if (termeSaisi && categorieChoisie) {
      titreResume = `Résultats pour « <span class="query-text">${echapperHtml(termeSaisi)}</span> » dans la catégorie « <span class="query-text">${echapperHtml(categorieChoisie)}</span> »`;
    } else if (termeSaisi) {
      titreResume = `Résultats pour : <span class="query-text">${echapperHtml(termeSaisi)}</span>`;
    } else if (categorieChoisie) {
      titreResume = `Objets dans la catégorie : <span class="query-text">${echapperHtml(categorieChoisie)}</span>`;
    }

    const htmlCartes = resultats.map((item) => `
      <article class="object-card">
        <header class="object-header">
          <h3 class="object-title">${echapperHtml(item.nom)}</h3>
          <span class="object-category">${echapperHtml(item.categorie || 'Général')}</span>
        </header>

        <div class="object-details">
          <!-- US02 : Consignes de tri -->
          <div class="info-block block-tri">
            <h4>Consigne de tri (US02)</h4>
            <p>${echapperHtml(item.consigneTri || 'Non renseignée.')}</p>
          </div>

          <!-- US03 : Points de collecte -->
          <div class="info-block block-collecte">
            <h4>Points de collecte (US03)</h4>
            <p>${echapperHtml(item.pointsCollecte || 'Déchèterie municipale.')}</p>
          </div>

          <!-- US04 : Réparation et réemploi -->
          <div class="info-block block-reemploi">
            <h4>Réparation & réemploi (US04)</h4>
            <p>${echapperHtml(item.solutionsReemploi || 'Vérifiez la réparabilité avant de jeter.')}</p>
          </div>
        </div>
      </article>
    `).join('');

    resultsSection.innerHTML = `
      <div id="results-container">
        <div class="results-summary">
          <h2 class="results-title">${titreResume}</h2>
          <span class="badge-count">${resultats.length} objet${resultats.length > 1 ? 's trouvé(s)' : ' trouvé'}</span>
        </div>

        <div class="results-cards" role="list">
          ${htmlCartes}
        </div>

        <button type="button" id="btn-modify-search" class="btn btn-secondary">Modifier ma recherche</button>
      </div>
    `;

    resultsSection.removeAttribute('hidden');
    attacherActionModifier();
  }

  /**
   * Affiche le message lorsqu'aucun objet ne correspond
   */
  function afficherAucunResultat() {
    resultsSection.innerHTML = `
      <div id="no-results-view" class="no-results-container">
        <h2 class="no-results-title">Aucun résultat trouvé.</h2>
        <p class="no-results-text">Vérifiez l'orthographe ou essayez un autre nom d'objet ou une autre catégorie.</p>
        <button type="button" id="btn-modify-search" class="btn btn-secondary">Modifier ma recherche</button>
      </div>
    `;

    resultsSection.removeAttribute('hidden');
    attacherActionModifier();
  }

  /**
   * Attache l'événement au bouton "Modifier ma recherche"
   */
  function attacherActionModifier() {
    const btnModifier = document.getElementById('btn-modify-search');
    if (btnModifier) {
      btnModifier.addEventListener('click', () => {
        input.focus();
        input.select();
      });
    }
  }

  /**
   * Déclenche la recherche et l'affichage
   */
  function lancerRecherche() {
    const valeurSaisie = input.value.trim();
    const categorieChoisie = categoryFilter.value;

    // Si ni texte ni catégorie ne sont sélectionnés, on affiche tous les objets pour exploration
    const resultats = filtrerObjets(valeurSaisie, categorieChoisie);

    if (resultats.length > 0) {
      afficherResultats(valeurSaisie, categorieChoisie, resultats);
    } else {
      afficherAucunResultat();
    }
  }

  /**
   * Initialisation de l'application
   */
  async function initialiser() {
    await chargerDonnees();
    initialiserFiltreCategories();

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        lancerRecherche();
      });
    }
  }

  // Démarrage
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
