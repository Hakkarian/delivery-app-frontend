import { block, For } from "million/react";

const { default: Product } = require("components/Product");
const { ProductSheet } = require("components/Product/Product.styled");

const BShoppingList = ({products, selectedShop}) => {
    return (
      <div className="products">
        {products.length !== 0 && (
          <For each={products} className="products-list">
            {(product) => (
              <ProductSheet key={product._id}>
                {/* <Product product={product} selectedShop={selectedShop} /> */}
              </ProductSheet>
            )}
          </For>
        )}
      </div>
    );
}

const ShoppingList = block(BShoppingList);

export default ShoppingList;