// Importation de React, useState et useEffect depuis les modules React
import React, { useState, useEffect } from 'react';
// Importation du module Axios pour effectuer des requêtes HTTP
import axios from 'axios';
// Importation du composant Ficheproduit pour afficher les détails de chaque produit
import Ficheproduit from '../Components/Ficheproduit';
// Composant fonctionnel Decorations
export const Decorations = () => {
  // État local pour stocker la liste des produits de la catégorie "Decorations"
  const [produits, setProduits] = useState([]);
  // URL de l'API
  const apiUrl = 'http://localhost:1337/api';
  // Effet de chargement initial avec useEffect
  useEffect(() => {
    // Requête HTTP pour récupérer les produits de l'API
    axios
      .get(`${apiUrl}/produits?populate=*`)
      .then((response) => {
        // Mise à jour de l'état local avec la liste des produits
        setProduits(response.data.data);
      })
      .catch((error) => {
        // Gestion des erreurs en cas de problème avec la requête
        console.error('Erreur lors de la récupération des données', error);
      });
  }, []);

  // Rendu du composant
  return (
    <main className='min-h-screen'>
      {/* Titre de la page */}
      <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold m-4 text-center">Décorations</h1>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-2">
        {Array.isArray(produits) &&
          // Filtrage des produits de la catégorie "Decorations" et affichage de chaque fiche produit
          produits
            .filter((produit) => produit.attributes.categorie.data.attributes.Nom === 'Decorations')
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

