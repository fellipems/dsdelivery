// colcaor algoritmos para ver se o card está selecionado ou não

import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
    return selectedProducts.some(item => item.id === product.id);    // se tem pelo menos um item selecionado
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(price);
}