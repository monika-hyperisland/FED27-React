import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout';
import mockUser from './mockUser.json'
import ContactForm from './components/ContactForm/ContactForm';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import  CharacterProvider from './context/CharacterContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return ( 
    <BrowserRouter>
    <CharacterProvider>
      <Layout>
      <Routes>
        <Route path="/" element={<Homepage user={mockUser} />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
      </Layout>
    </CharacterProvider>
    </BrowserRouter>
  );
}

export default App;
