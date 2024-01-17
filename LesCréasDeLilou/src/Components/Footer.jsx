import { Link } from 'react-router-dom';
import logo from "./logopages.jpg";

const Footer = () => {
  return (

    <footer className='bg-[#2b2728]'> 
      <a className='flex items-center justify-center' href="/"><img className='sm:flex items-center justify-center mt-2 p-px w-32 h-auto rounded-md' src={logo} alt='logo'/>
      </a>

      <div className="flex p-1 justify-center items-center">
        <Link className='text-[#ffffff]  border-r-[1.5px] border-[#ffffff] px-4' to="/Politique">Politiques Confidentialités</Link>
        <Link className='text-[#ffffff]  border-r-[1.5px] border-[#ffffff] px-4' to="/Mentions">Mentions Légales</Link>
        <Link className='text-[#ffffff] px-4' to="/Contact">Contact</Link>
      </div>

      <p className='text-xs flex items-center justify-center text-[#ffffff]'>
        Tous droits réservés-Copyright Les Créas De Lilou & Fondants Event&copy; {new Date().getFullYear()} 
      </p>
    </footer>
  );
};
export default Footer