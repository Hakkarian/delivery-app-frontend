import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/reducers/cart';

const Product = ({product, selectedShop}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const { _id: id, name, price, preview } = product;

        const payload = {
            id,
            name, price, preview
        }
        if (selectedShop) {
            dispatch(addToCart(payload));
        } else {
            toast("Please, choose the shop first", {
              icon: "❕",
              style: {
                borderRadius: "10px",
                background: "darkblue",
                color: "#fff",
              },
            });
        }
    }

  return (
    <>
      <img style={{borderRadius: '10px'}} src={product.preview} alt='product' width={100} height={100} />
      <h3 className="products-list__title">{product.name}</h3>
      <p className="products-list__price">Price: {product.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to cart
      </button>
    </>
  );
}

export default Product