import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import mockUser from './mockUser.json'
import ContactForm from './components/ContactForm/ContactForm';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import CharacterProvider from './context/CharacterContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {FavoritesProvider} from './context/FavoritesContext';
import Favorites from './components/Favorites/Favorites';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return ( 
    <BrowserRouter>
    <ThemeProvider>
    <CharacterProvider>
    <FavoritesProvider>
      <Layout>
      <Routes>
        <Route path="/" element={<Homepage user={mockUser} />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </Layout>
    </FavoritesProvider>
    </CharacterProvider>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
