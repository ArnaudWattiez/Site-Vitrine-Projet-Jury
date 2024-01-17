import image from "./Images/image.jpg";
import { Link } from "react-router-dom"
export const Accueil = () =>{
  return (
    <div className="flex flex-col min-h-screen">
      <h3 className="w-full bg-[#8C4FFF] text-center p-2 text-[#ffffff] font-bold">Bienvenue sur le site vitrine</h3>
      <ul className="flex md:hidden flex-col text-center w-full">
        <li className="flex p-16 md:text-base h-[20rem] w-full justify-center items-center">
          <Link to="/Apropos" className="w-full block text-center">A-propos</Link>
        </li>
        <li className="flex p-16 md:text-base h-[20rem] w-full justify-center items-center">
          <Link to="/Categories" className="w-full block text-center">Catégories</Link>
        </li>
        <li className="flex p-16 md:text-base h-[20rem] w-full justify-center items-center">
          <Link to="/Contact" className="w-full block text-center">Contact</Link>
        </li>
      </ul>
      <div className="hidden md:flex justify-center items-center p-20">
        <img src={image} className="flex justify-center items-center border border-[#2b2728] h-96 p-20" alt="Logo du site" />
      </div>
    </div>
  );
}
