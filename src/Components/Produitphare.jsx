import React, { useState, useEffect, useCallback } from 'react'; // Import des hooks React
import axios from 'axios'; // Import d'axios pour les requêtes HTTP

// Définition du composant Produitphare
const Produitphare = () => {
  // Déclaration des états locaux
  const [produitphares, setProduitphares] = useState([]); // État pour stocker les données des produits phares
  const [loading, setLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement
  const [selectedImage, setSelectedImage] = useState(null); // État pour stocker l'URL de l'image agrandie
  const apiUrl = 'http://localhost:1337'; // URL de l'API

  // Effet pour charger les données des produits phares depuis l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/produitphares?populate=*`); // Requête GET pour récupérer les produits phares
        if (response.data && Array.isArray(response.data.data)) {
          setProduitphares(response.data.data); // Mise à jour des données des produits phares
        } else {
          console.error('Erreur: la réponse de l\'API n\'est pas un tableau', response.data);
          setProduitphares([]); // Réinitialisation des données des produits phares en cas d'erreur
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données du carrousel', error); // Affichage des erreurs de récupération des données
      } finally {
        setLoading(false); // Indiquer que le chargement est terminé
      }
    };

    fetchData(); // Appel de la fonction fetchData pour charger les données
  }, []); // Le tableau vide indique que cet effet ne dépend d'aucune valeur et est exécuté une seule fois au montage du composant

  // Fonction pour agrandir une image lorsqu'elle est cliquée
  const enlargeImage = (imageUrl) => {
    setSelectedImage(imageUrl); // Mise à jour de l'URL de l'image sélectionnée
  };

  // Fonction pour fermer l'image agrandie
  const closeEnlargeImage = () => {
    setSelectedImage(null); // Réinitialisation de l'URL de l'image sélectionnée à null
  };

  // Gestion de la touche Échap pour fermer l'image agrandie
  const handleKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        // Si la touche appuyée est la touche Échap (code 27), ferme l'image agrandie
        closeEnlargeImage();
      }
    },
    [closeEnlargeImage] // Dépendance à la fonction closeEnlargeImage
  );

  // Effet pour ajouter et supprimer l'écouteur d'événement pour la touche Échap
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false); // Ajout de l'écouteur d'événement

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false); // Suppression de l'écouteur d'événement
    };
  }, [handleKeyPress]); // Le hook s'exécute chaque fois que handleKeyPress change

  // Rendu du composant
  return (
    <div className="flex flex-col items-center">
      {/* Entête */}
      <div className="w-full bg-[#8C4FFF] text-center p-2 text-[#ffffff] font-bold mb-4">
        <h3>Bienvenue sur le site vitrine</h3>
      </div>

      {/* Affichage des produits phares */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {loading ? (
          <p>Loading...</p> // Affichage d'un message de chargement si les données sont en cours de chargement
        ) : (
          // Mapping des produits phares
          produitphares.map((produitphare) => (
            <div key={produitphare.id} className="flex justify-center">
              <img
                src={`${apiUrl}${produitphare.attributes.image.data.attributes.url}`} // URL de l'image
                alt={produitphare.attributes.Nom} // Texte alternatif de l'image
                className="w-full h-full p-2 cursor-pointer" // Classes CSS de l'image
                onClick={() => enlargeImage(`${apiUrl}${produitphare.attributes.image.data.attributes.url}`)} // Action au clic sur l'image
              />
            </div>
          ))
        )}
      </div>

      {/* Affichage de l'image agrandie */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-10">
          <img src={selectedImage} alt="Image agrandie" className="max-h-full max-w-full" onClick={closeEnlargeImage} />
        </div>
      )}
    </div>
  );
};

export default Produitphare;
