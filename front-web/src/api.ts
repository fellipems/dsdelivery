import axios from "axios";

// métodos utilitários para fazer as requisições

const API_URL = 'http://localhost:8080';    //base URL do nosso BACK
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}