import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {  // Props: parâmetro que estamos passando para nosso component
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) { // extrair de dentro das Props, uma variável chamada products
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                        onSelectProduct={onSelectProduct}
                        key={product.id}
                        product={product}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))} {/* Iterando sobre a lista de produtos e para cada produto, vamos ter um produto em cada iteração. key={} é como se fosse uma chave/identificador única do component de iteração. Obrigatório quando estamos criando elementos através de listas */}
            </div>
        </div>
    )
}

export default ProductsList;