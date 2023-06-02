import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShops } from "redux/selectors/shop-selectors";
import { fetchShops } from "redux/operations/shop-operations";
import { fetchProductById } from "redux/operations/product-operations";
import Product from "components/Product";
import { ShoppingPageSheet } from "./ShoppingPage.styled";
import { ProductSheet } from "components/Product/Product.styled";
import { Container } from "shared/components/Container/Container.styled";

const ShoppingPage = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const dispatch = useDispatch();
  const shops = useSelector(selectShops);
  const products = useSelector((state) => state.shops.products) || [];

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const handleOpenList = (shop) => {
    setSelectedShop(shop);
    dispatch(fetchProductById(shop.name));
  };

  return (
    <Container>
      <ShoppingPageSheet>
        <div className="shops">
          <h1 className="shops-title">Shops</h1>
          <ul className="shops-list">
            {shops.map((shop) => (
              <li className="shops-list__item" key={shop._id}>
                {" "}
                <button
                  type="button"
                  onClick={() => handleOpenList(shop)}
                  className={selectedShop === shop ? "selected" : ""}
                  disabled={selectedShop && selectedShop !== shop}
                >
                  {shop.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="products">
          {products.length !== 0 && (
            <ul className="products-list">
              {" "}
              {products.map((product) => (
                <ProductSheet key={product._id}>
                  <Product product={product} selectedShop={selectedShop} />
                </ProductSheet>
              ))}
            </ul>
          )}
        </div>
      </ShoppingPageSheet>
    </Container>
  );
};

export default ShoppingPage;
