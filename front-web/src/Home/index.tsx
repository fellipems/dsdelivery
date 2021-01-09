import "./styles.css";
import { ReactComponent as MainImage } from "./main.svg";
import Footer from '../Footer'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br />
              que entregamos
              <br /> para você!
            </h1>
            <h3 className="home-subtitle">
              Escolha o seu pedido que, em poucos minutos,
              <br /> levaremos na sua porta.
            </h3>
            <Link to="/orders" className="home-btn-order">
              FAZER MEU PEDIDO
            </Link>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer /> {/* fizemos um Fragment pois não podemos retornar dois elementos ao mesmo tempo na raiz de um componente react */}
    </>
  );
}

export default Home;
