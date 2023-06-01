import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/reducers/cart';

const Product = ({product, selectedShop}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const { _id: id, name, price } = product;
        console.log('product add to cart', id)
        const payload = {
            id,
            name, price
        }
        if (selectedShop) {
            dispatch(addToCart(payload));
        } else {
            console.log('You need to choose the shop first')
        }
    }

  return (
    <>
      <h3 className="products-list__title">{product.name}</h3>
      <p className="products-list__price">Price: {product.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to cart
      </button>
    </>
  );
}

export default Product