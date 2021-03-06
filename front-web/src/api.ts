import { OrderPayload } from './Orders/types';
import axios from "axios";

// métodos utilitários para fazer as requisições

const API_URL = process.env.REACT_APP_API_URL;    //base URL do nosso BACK
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload)
}