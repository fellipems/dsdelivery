import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {  // Props: parâmetro que estamos passando para nosso component
    products: Product[];
}

function ProductsList({ products }: Props) { // extrair de dentro das Props, uma variável chamada products
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))} {/* Iterando sobre a lista de produtos e para cada produto, vamos ter um produto em cada iteração. key={} é como se fosse uma chave/identificador única do component de iteração. Obrigatório quando estamos criando elementos através de listas */}
            </div>
        </div>
    )
}

export default ProductsList;