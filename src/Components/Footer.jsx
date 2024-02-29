import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "./logopages.jpg";

// Définition du composant Footer
const Footer = () => {
  // Rendu du composant
  return (
    <footer className='bg-[#2b2728] text-[#ffffff]'>
      {/* Conteneur pour le logo et les liens */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-2">
        {/* Logo avec lien vers la page d'accueil */}
        <Link to="/" className="flex items-center justify-center mt-2 md:mr-4">
          <img className='md:flex items-center justify-center p-px w-32 h-auto rounded-md' src={logo} alt='logo'/>
        </Link>

        {/* Liste de liens de navigation */}
        <div className="flex flex-col md:flex-row p-1 justify-center items-center">
          {/* Lien vers la politique de confidentialité */}
          <Link className='border-r-[1.5px] border-[#ffffff] px-4' to="/Politique">Politiques Confidentialités</Link>
          
          {/* Lien vers la page de contact */}
          <Link className='border-r-[1.5px] border-[#ffffff] px-4' to="/Contact">Contact</Link>
          
          {/* Lien vers les mentions légales */}
          <Link className='px-4' to="/Mentions">Mentions Légales</Link>
        </div>

        {/* Liens vers les réseaux sociaux (Facebook et Instagram) */}
        <div className="flex items-center justify-center md:ml-4">
          <a href="https://www.facebook.com/votre-page-facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-[#ffffff] bg-[#8a63ff] rounded-full text-lg p-2 mx-2" />
          </a>
          <a href="https://www.instagram.com/votre-page-instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-[#ffffff] bg-[#8a63ff] rounded-full text-lg p-2 mx-2" />
          </a>
        </div>
      </div>

      {/* Mention de copyright */}
      <p className='text-xs text-center mt-2'>
        Tous droits réservés-Copyright Les Créas De Lilou & Fondants Event&copy; {new Date().getFullYear()} 
      </p>
    </footer>
  );
};

export default Footer;