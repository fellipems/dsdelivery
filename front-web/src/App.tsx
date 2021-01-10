import { ToastContainer } from 'react-toastify';    // toast tem que ser invocado somente uma vez na aplicação, por isso colocamos no app.tsx
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './routes';

function App() { // Esse fragment será representado no HTML com div="root", mesmo a tag estando vazia
  return (
    <>
      <Routes/>
      <ToastContainer />
    </>
  );  // React fragment <> </>. Criamos um bloco de código, porém esse fragment não é representado no HTML
}

export default App;
