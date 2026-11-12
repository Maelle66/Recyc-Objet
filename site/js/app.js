/**
 * Recyc'Objet - Logique US-01 : Rechercher un objet par son nom
 * JavaScript natif, sans dépendance externe ni bibliothèque tierce.
 */

(function () {
  'use strict';

  // Données de secours locales (au cas où fetch échouerait sous protocole file://)
  const DONNEES_FALLBACK = [
    {
      "id": 1,
      "nom": "Pile alcaline",
      "motsCles": ["pile", "piles", "alcaline"]
    },
    {
      "id": 2,
      "nom": "Pile rechargeable",
      "motsCles": ["pile rechargeable", "accumulateur"]
    },
    {
      "id": 3,
      "nom": "Batterie",
      "motsCles": ["batterie", "accumulateur"]
    },
    {
      "id": 4,
      "nom": "Téléphone portable",
      "motsCles": ["téléphone", "portable", "smartphone"]
    },
    {
      "id": 5,
      "nom": "Ordinateur",
      "motsCles": ["ordinateur", "pc"]
    }
  ];

  let listeObjets = [];

  // Éléments du DOM
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const resultsSection = document.getElementById('results-section');

  /**
   * Nettoie et normalise une chaîne (minuscules, sans accents)
   * pour une recherche tolérante et robuste.
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
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Charge les données locales d'objets depuis objets.json
   */
  async function chargerDonnees() {
    try {
      const response = await fetch('./objets.json');
      if (response.ok) {
        listeObjets = await response.json();
        return;
      }
    } catch (e) {
      // Sous protocole file:// ou hors serveur HTTP, repli sur les données intégrées
      console.warn("Chargement via fetch indisponible, utilisation des données locales intégrées :", e);
    }
    listeObjets = DONNEES_FALLBACK;
  }

  /**
   * Recherche les objets correspondant à la saisie dans le nom ou les mots-clés
   * @param {string} termeSaisi
   * @returns {Array} Liste des objets correspondants
   */
  function rechercherObjets(termeSaisi) {
    const termeNormalise = normaliser(termeSaisi);
    if (!termeNormalise) {
      return [];
    }

    return listeObjets.filter((objet) => {
      const nomNormalise = normaliser(objet.nom);
      if (nomNormalise.includes(termeNormalise)) {
        return true;
      }

      if (Array.isArray(objet.motsCles)) {
        return objet.motsCles.some((motCle) => normaliser(motCle).includes(termeNormalise));
      }

      return false;
    });
  }

  /**
   * Affiche l'écran des résultats (Écran E02)
   * @param {string} termeSaisi
   * @param {Array} resultats
   */
  function afficherResultats(termeSaisi, resultats) {
    const htmlObjets = resultats
      .map((item) => `<li class="result-item">${echapperHtml(item.nom)}</li>`)
      .join('');

    resultsSection.innerHTML = `
      <div id="ecran-e02" class="results-container">
        <h2 class="results-title">Résultats pour : <span class="query-text">${echapperHtml(termeSaisi)}</span></h2>
        <ul class="results-list" role="list">
          ${htmlObjets}
        </ul>
        <button type="button" id="btn-modify-search" class="btn btn-secondary">Modifier ma recherche</button>
      </div>
    `;

    resultsSection.removeAttribute('hidden');
    attacherActionModifier();
  }

  /**
   * Affiche l'écran d'aucun résultat (Écran E03)
   */
  function afficherAucunResultat() {
    resultsSection.innerHTML = `
      <div id="ecran-e03" class="no-results-container">
        <h2 class="no-results-title">Aucun résultat trouvé.</h2>
        <p class="no-results-text">Vérifiez l'orthographe ou essayez un autre nom d'objet.</p>
        <button type="button" id="btn-modify-search" class="btn btn-secondary">Modifier ma recherche</button>
      </div>
    `;

    resultsSection.removeAttribute('hidden');
    attacherActionModifier();
  }

  /**
   * Attache le gestionnaire d'événement au bouton "Modifier ma recherche"
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
   * Initialisation de l'application
   */
  async function initialiser() {
    await chargerDonnees();

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Règle : supprimer les espaces au début et à la fin de la saisie
        const valeurSaisie = input.value.trim();

        if (!valeurSaisie) {
          input.focus();
          return;
        }

        const resultats = rechercherObjets(valeurSaisie);

        if (resultats.length > 0) {
          afficherResultats(valeurSaisie, resultats);
        } else {
          afficherAucunResultat();
        }
      });
    }
  }

  // Démarrage au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
