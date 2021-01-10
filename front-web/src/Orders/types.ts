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

type ProductId = {
    id: number
}

export type OrderPayload = {    // classe payload que vamos enviar para nosso back-end
    products: ProductId[];
    // fazendo merge entre dois tipos. Juntando o orderPayLoad com o ordeLocationData
} & OrderLocationData; // temos os atributos tando do PayLoad quanto o do OrderLocationData