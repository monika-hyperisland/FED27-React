import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout';
import mockUser from './mockUser.json'


function App() {
  return (
    <Layout>
      <Homepage user={mockUser} />
    </Layout>
  );
}

export default App;
