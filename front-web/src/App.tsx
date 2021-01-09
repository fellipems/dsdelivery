import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() { // Esse fragment será representado no HTML com div="root", mesmo a tag estando vazia
  return (
    <>
      <Navbar />
      <Home />
    </>
  );  // React fragment <> </>. Criamos um bloco de código, porém esse fragment não é representado no HTML
}

export default App;
