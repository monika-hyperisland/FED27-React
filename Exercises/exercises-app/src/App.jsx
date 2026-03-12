import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout';
import mockUser from './mockUser.json'
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Homepage user={mockUser} />
      <ContactForm />
    </Layout>
    </BrowserRouter>
  );
}

export default App;
