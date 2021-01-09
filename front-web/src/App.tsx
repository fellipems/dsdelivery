import './App.css';
import Routes from './routes';
//import Orders from './Orders'

function App() { // Esse fragment será representado no HTML com div="root", mesmo a tag estando vazia
  return (
    <>
      <Routes/>
    </>
  );  // React fragment <> </>. Criamos um bloco de código, porém esse fragment não é representado no HTML
}

export default App;
