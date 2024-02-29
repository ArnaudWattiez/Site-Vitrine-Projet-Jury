// Importation du composant Link de react-router-dom, React, useState et useEffect de React, et axios pour les requêtes HTTP
import { Link } from 'react-router-dom'; // Importation du composant Link de react-router-dom
import React, { useState, useEffect } from 'react'; // Importation de React, useState et useEffect de React
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP

// Composant fonctionnel Categories
export const Categories = () => {
  // État local pour stocker les données des catégories
  const [categories, setCategories] = useState(); // Déclaration d'un état local categories avec useState

  // URL de l'API
  const apiUrl = 'http://localhost:1337'; // Déclaration de l'URL de l'API

  // Utilisation de useEffect pour effectuer une requête HTTP au chargement du composant
  useEffect(() => {
    axios // Utilisation de axios pour effectuer une requête HTTP
      .get(`${apiUrl}/api/categories?populate=*`) // Effectue une requête GET à l'URL de l'API pour récupérer les catégories
      .then((response) => {
        // Mise à jour de l'état avec les données des catégories
        setCategories(response.data); // Met à jour l'état categories avec les données de réponse de la requête
      })
      .catch((error) => {
        console.error('Erreur', error); // Affiche une erreur s'il y a un problème avec la requête HTTP
      });
  }, []); // Le tableau vide indique que useEffect s'exécute une seule fois au montage du composant

  // Rendu du composant
  return (
    // Conteneur principal avec une mise en page flexible en colonne pour les écrans petits et en ligne pour les écrans larges
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Vérification si les données des catégories existent avant de les mapper */}
      {categories && // Vérifie si categories est défini et non nul
        categories.data.map((categorie) => ( // Mappe les données des catégories
          // Div pour chaque élément de catégorie avec une classe relative et des styles flexibles
          <div key={categorie.id} className="category-item relative flex-1 flex items-center justify-center w-full">
            {/* Lien vers la page de la catégorie basé sur son nom */}
            <Link to={`/${categorie.attributes.Nom}`} className="block"> {/* Crée un lien vers la page de la catégorie */}
              {/* Image de la catégorie récupérée de l'API avec des styles adaptatifs */}
              <img
                src={`${apiUrl}${categorie.attributes.photo.data.attributes.url}`} // Définit la source de l'image
                alt={categorie.attributes.Nom} // Définit le texte alternatif de l'image
                className="me-3 xs:w-[22rem] xs:h-[22rem] md:w-[22rem] md:h-[22rem] lg:w-[32rem] lg:h-[32rem] xl:w-[42rem] xl:h-[42rem] object-cover rounded-full" // Définit les classes CSS pour l'image
              />
              {/* Texte superposé sur l'image avec le nom de la catégorie */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
                <h2 className="xs:text-xl md:text-2xl lg:text-3xl">{categorie.attributes.Nom}</h2> {/* Affiche le nom de la catégorie */}
              </div>
            </Link>
          </div>
        ))}
    </main>
  );
}; 
