// Importation des composants et modules nécessaires depuis React et react-router-dom
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Accueil } from './Pages/Accueil';
import { Apropos } from './Pages/Apropos';
import { Categories } from './Pages/Categories';
import { Contact } from './Pages/Contact';
import { Fondants } from './Pages/Fondants';
import { Decorations } from './Pages/Decorations';
import { Mentions } from './Pages/Mentions';
import { Politique } from './Pages/Politique';
import Ficheproduit from './Components/Ficheproduit';
import DetailsProduit from './Components/DetailsProduit';
// Composant principal App
const App = () => {
  // Rendu du composant
  return (
    <div>
      {/* Composant Navbar pour la barre de navigation */}
      <Navbar />
      {/* Configuration des routes avec react-router-dom */}
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Route pour la page d'accueil */}
          <Route index element={<Accueil />} />         
          {/* Routes pour les autres pages */}
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/produits" element={<Ficheproduit />} />
          <Route path="/produits/:id" element={<DetailsProduit />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Fondants" element={<Fondants />} />
          <Route path="/Decorations" element={<Decorations />} />
          <Route path="/Mentions" element={<Mentions />} />
          <Route path="/Politique" element={<Politique />} />
        </Route>
      </Routes>
      {/* Composant Footer pour le pied de page */}
      <Footer />
    </div>
  );
}
// Exportation du composant App comme composant principal de l'application
export default App;