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

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Outlet />}>
          <Route index element={<Accueil />} />
          <Route path='/Accueil' element={<Accueil />} />
          <Route path='/Apropos' element={<Apropos />} />
          <Route path='/Categories' element={<Categories />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Fondants' element={<Fondants />} />
          <Route path='/Decorations' element={<Decorations />} />
          <Route path='/Mentions' element={<Mentions />} />
          <Route path='/Politique' element={< Politique />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
