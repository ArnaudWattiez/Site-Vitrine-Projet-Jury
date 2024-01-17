import logo from "./logopages.jpg";
import { Link } from "react-router-dom";

const Navbar =() =>{

    return(
      <header>
      <nav className="flex flex-col items-center justify-center text-center">
        <a href="/Accueil">
          <img className="xs:w-64 md:w-80 lg:w-120 " src={logo} alt='logo'/>
        </a>
        <ul className="lg:flex hidden flex-wrap justify-center m-4">
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8"><Link to="/Accueil">Accueil</Link></li>
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8"><Link to="/Apropos">A-propos</Link></li>
          <li className="text-base border-r-[1.5px] border-[#2b2728] px-8"><Link to="/Categories">Catégories</Link></li>
          <li className="text-base px-8"><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    );
  };
export default Navbar;