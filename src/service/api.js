import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = baseUrl;

export const fetchShops = async () => {
  const { data: result } = await axios.get(`/shops`)
    return result;
}

export const fetchProducts = async () => {
  const { data: result } = await axios.get(`/products`);
  return result;
};

export const fetchProductsById = async (shopId) => {
  const { data: result } = await axios.get(`/products/${shopId}`);
  return result;
};

export const submitOrder = async (order) => {
  const { data: result } = await axios.post(`/orders`, order);
  return result;
};