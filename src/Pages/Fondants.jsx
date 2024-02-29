// Importation de React, useState et useEffect depuis les modules React
import React, { useState, useEffect } from 'react';
// Importation du module Axios pour effectuer des requêtes HTTP
import axios from 'axios';
// Importation du composant Ficheproduit
import Ficheproduit from '../Components/Ficheproduit';
// Composant fonctionnel Fondants
export const Fondants = () => {
  // État local pour stocker les produits
  const [produits, setProduits] = useState([]);
  // URL de l'API
  const apiUrl = 'http://localhost:1337/api';
  // Effet de chargement initial avec useEffect
  useEffect(() => {
    // Requête HTTP pour récupérer tous les produits avec leurs détails
    axios
      .get(`${apiUrl}/produits?populate=*`)
      .then((response) => {
        console.log('Données reçues :', response.data);
        // Mise à jour de l'état local avec les données des produits
        setProduits(response.data);
      })
      .catch((error) => {
        // Gestion des erreurs en cas de problème avec la requête
        console.error('Erreur lors de la récupération des données', error);
      });
  }, []); // Le tableau de dépendances vide garantit que l'effet est exécuté une seule fois lors du montage du composant
  // Affichage des produits après récupération
  console.log('Produits après la récupération :', produits);
  // Rendu du composant
  return (
    <main className='min-h-screen'>
      {/* Titre de la page Fondants */}
      <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold m-4 text-center">Fondants</h1>
      {/* Affichage des fiches produits dans une grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-2">
        {/* Filtrage et affichage des fiches produits pour la catégorie 'Fondants' */}
        {Array.isArray(produits.data) &&
          produits.data
            .filter((produit) => produit.attributes.categorie.data.attributes.Nom === 'Fondants')
            .map((filteredProduit) => (
              <Ficheproduit
                key={filteredProduit.id}
                nom={filteredProduit.attributes.Nom}
                description={filteredProduit.attributes.Description}
                photo={filteredProduit.attributes.photo.data.attributes.url}
                idProduit={filteredProduit.id}
              />
            ))}
      </div>
    </main>
  );
};
