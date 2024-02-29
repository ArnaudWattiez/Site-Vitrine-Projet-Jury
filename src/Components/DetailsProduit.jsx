// Importation de React, useEffect et useState depuis les modules React
import React, { useEffect, useState } from 'react';
// Importation du hook useParams pour extraire les paramètres d'URL
import { useParams } from 'react-router-dom';
// Importation du module Axios pour effectuer des requêtes HTTP
import axios from 'axios';
// Composant fonctionnel DetailsProduit
const DetailsProduit = () => {
  // Extraction du paramètre d'URL 'id' avec le hook useParams
  const { id } = useParams();
  // État local pour stocker les détails du produit
  const [produit, setProduit] = useState(null);
  // Effet de chargement initial avec useEffect, dépendant du paramètre d'URL 'id'
  useEffect(() => {
    // Requête HTTP pour récupérer les détails du produit avec l'identifiant 'id'
    axios.get(`http://localhost:1337/api/produits/${id}?populate=*`)
      .then((response) => {
        // Mise à jour de l'état local avec les données du produit
        setProduit(response.data.data);
        console.log('Données du produit :', response.data.data);
      })
      .catch((error) => {
        // Gestion des erreurs en cas de problème avec la requête
        console.error('Erreur lors de la récupération des détails du produit', error);
      });
  }, [id]); // Le tableau de dépendances garantit que l'effet est réexécuté lorsque 'id' change

  // Rendu conditionnel pendant le chargement des données
  if (!produit) {
    return <p className='min-h-screen'>Chargement...</p>;
  }
  // Affichage des détails du produit
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md mx-auto p-4 text-center">
        {/* Affichage du nom du produit */}
        <h1 className="text-3xl font-bold mb-4">{produit.attributes?.Nom ?? 'Nom non disponible'}</h1>
        {/* Affichage de l'image du produit */}
        <img
          src={`http://localhost:1337${produit.attributes?.photo?.data.attributes.url ?? ''}`}
          alt={produit.attributes?.Nom ?? 'Image non disponible'}
          className="w-full max-w-full h-auto mb-4"
        />
        {/* Affichage de la description du produit */}
        <p className="text-lg mb-4">{produit.attributes?.Description ?? 'Description non disponible'}</p>
        {/* Ajoutez d'autres vérifications et informations sur le produit ici */}
      </div>
    </main>
  );
};


export default DetailsProduit;