import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product } from './types';
import { checkIsSelected } from './helpers';
import './styles.css';

function Orders() {
    const [products, setProducts] = useState<Product[]>([])   // estado que vai armazenar a lista de produtos inicializada com um array do tipo Product vazio
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>() 
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))      // .then é quando a requsição deu sucesso, .catch pra pegar os erros
    }, []); // qundo a lista de dependências estiver vazia "[]", significa que este código não depende de nenhum outro e vai rodar quando o componente Orders inicializar 

    const handleSelectProduct = (product: Product) => {     // um estado em nosso component onde terão todos os produtos selecionados 
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }  // fazendo o merge dos objetos tudo que já existe no orderlocation e adicionando a lista de products
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido de Nº ${response.data.id} enviado com sucesso!`);   // toast sendo chamado aqui
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
    }

    return (
        <>  {/* Fragment pra podermos retornar mais de um elemento na raiz do elemento */}
            <div className="orders-container">
                <StepsHeader/>
                <ProductsList
                    onSelectProduct={ handleSelectProduct }
                    products={products}
                    selectedProducts={ selectedProducts }
                />    {/* vamos ter que ter um estado armazenando os produtos selecionados */}
                <OrderLocation onChangeLocation={ location => setOrderLocation(location) }/>
                <OrderSummary 
                    amount={ selectedProducts.length } 
                    totalPrice={ totalPrice }
                    onSubmit={ handleSubmit }
                />
            </div>
            <Footer/>
        </>
    )
}

export default Orders;
// 1:30:40