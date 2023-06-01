import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = baseUrl;

export const fetchShopse = async () => {
  const { data: result } = await axios.get(`/shops`)
    return result;
}

export const fetchProductse = async () => {
  const { data: result } = await axios.get(`/products`);
  return result;
};

export const fetchProductsByIde = async (shopId) => {
  const { data: result } = await axios.get(`/products/${shopId}`);
  return result;
};

export const submitOrdere = async (order) => {
  const { data: result } = await axios.post(`/orders`, order);
  return result;
};