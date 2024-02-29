import { useState } from 'react'; // Import du hook useState de React
import { Link } from 'react-router-dom'; // Import du composant Link de react-router-dom pour la navigation entre les pages
import logo from './logopages.jpg'; // Import de l'image du logo

// Définition du composant Navbar
const Navbar = () => {
  // Déclaration de l'état local pour gérer l'ouverture et la fermeture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu entre ouvert et fermé
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Rendu du composant
  return (
    <header>
      {/* Barre de navigation */}
      <nav className="flex flex-col items-center justify-center text-center relative z-10">
        {/* Logo avec lien vers la page d'accueil */}
        <Link to="/Accueil">
          <img className="w-48 md:w-64 lg:w-80" src={logo} alt="logo" />
        </Link>

        {/* Bouton de menu déroulant pour les petits écrans */}
        <div className="md:hidden mt-2">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>
        
        {/* Liste des liens de navigation (visible sur grand écran) */}
        <ul className="md:flex hidden flex-wrap justify-center m-4">
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8">
            <Link to="/Accueil">Accueil</Link> {/* Lien vers la page d'accueil */}
          </li>
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8">
            <Link to="/Apropos">À Propos</Link> {/* Lien vers la page "À propos" */}
          </li>
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8">
            <Link to="/Categories">Catégories</Link> {/* Lien vers la page des catégories */}
          </li>
          <li className="text-base px-8">
            <Link to="/Contact">Contact</Link> {/* Lien vers la page de contact */}
          </li>
        </ul>
        
        {/* Liste des liens de navigation dans le menu déroulant (pour les petits écrans) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 bg-[#2b2728] text-white h-vlh w-full">
            <ul className="flex flex-col text-center">
              <li className="p-20">
                <Link to="/Accueil" onClick={toggleMenu}>Accueil</Link>
              </li>
              <li className="p-20">
                <Link to="/Apropos" onClick={toggleMenu}>À Propos</Link>
              </li>
              <li className="p-20">
                <Link to="/Categories" onClick={toggleMenu}>Catégories</Link>
              </li>
              <li className="p-20">
                <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 

