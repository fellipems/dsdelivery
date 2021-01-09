import axios from "axios";

// métodos utilitários para fazer as requisições

const API_URL = 'http://localhost:8080';    //base URL do nosso BACK

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}