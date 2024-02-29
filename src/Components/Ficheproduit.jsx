import React from 'react';
import { useNavigate } from 'react-router-dom';

// Composant Ficheproduit
const Ficheproduit = ({ nom, photo, idProduit }) => {
  // Hook de navigation de React Router
  const navigate = useNavigate();

  // Gestion du clic sur la fiche produit pour naviguer vers les détails du produit
  const handleProductClick = () => {
    // Naviguer vers la page des détails du produit en utilisant l'ID du produit
    navigate(`/produits/${idProduit}`);
  };

  // Rendu de la fiche produit
  return (
    <div
      className="fiche-produit text-white relative overflow-hidden flex items-center justify-center"
      onClick={handleProductClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Image du produit */}
      <img
        src={`http://localhost:1337${photo}`}
        alt={nom}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay avec informations sur le produit */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-center">
        {/* Nom du produit */}
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-2">{nom}</h2>
        
        {/* Ajoutez une description ici si nécessaire */}
        {/* <p className="text-sm md:text-base">{description}</p> */}
      </div>
    </div>
  );
};


export default Ficheproduit;