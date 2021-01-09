import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([])   // estado que vai armazenar a lista de produtos inicializada com um array do tipo Product vazio
    
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))      // .then é quando a requsição deu sucesso, .catch pra pegar os erros
    }, []); // qundo a lista de dependências estiver vazia "[]", significa que este código não depende de nenhum outro e vai rodar quando o componente Orders inicializar 

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders;