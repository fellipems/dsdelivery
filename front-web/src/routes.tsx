import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>   { /* importamos nosso component Navbar para funcionar o <Link to> dentro do mecanismo de navagação das rotas */ }
            <Switch>
                <Route path="/orders">  {/* Usuário digitou /orders ou foi pra tela de orders, será renderizado o component de orders */}
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;