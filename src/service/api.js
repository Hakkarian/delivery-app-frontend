import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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

export const findOrdere = async (order) => {
  const { data: result } = await axios.post(`/orders/history`, order);
  return result;
}