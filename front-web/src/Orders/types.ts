// simoblizará tudo que estivermos utilizando nos tipos de dados no front end;
export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {     // atributos/entidades/classe necessários para enviarmos para nosso backend para novo pedido com endereço
    latidude: number;
    longitude: number;
    address: string;
}