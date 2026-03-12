import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout';
import mockUser from './mockUser.json'
import ContactForm from './components/ContactForm/ContactForm';



function App() {
  return (
    <Layout>
      <Homepage user={mockUser} />
      <ContactForm />
    </Layout>
  );
}

export default App;
