import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from 'redux/operations/order-operations';
import { addToCart, removeFromCart } from 'redux/reducers/cart';
import * as Yup from 'yup';
import { ShoppingCartPageSheet } from './ShoppingCartPage.styled';
import { Container } from 'shared/components/Container';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const ShoppingCartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let data = JSON.parse(localStorage.getItem('cart')) || [];

  
  const calculateTotalPrice = () => {
    return data.reduce(( total, item ) => total + item.price * item.quantity, 0).toFixed(2);
  }

  const handleSubmitOrder = (values, {resetForm}) => {
    let totalPrice = calculateTotalPrice();
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      address: values.address,
      totalPrice,
      items: data
    }
    dispatch(submitOrder(payload))
    resetForm()
  }

  return (
    <Container>
      <ShoppingCartPageSheet>
        <div className="cart-wrap">
          <h2 className="cart-wrap__title">Order Form</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitOrder}
          >
            <Form className="cart-form">
              <div className="wrapper-connect">
                <div className="wrapper-wrap">
                  <div className="cart-form__wrap">
                    <label className="cart-form__label" htmlFor="name">
                      Name:
                    </label>
                    <Field
                      className="cart-form__field"
                      type="text"
                      id="name"
                      name="name"
                    />
                    <ErrorMessage
                      className="cart-form__error"
                      name="name"
                      component="div"
                    />
                  </div>
                  <div className="cart-form__wrap">
                    <label className="cart-form__label" htmlFor="email">
                      Email:
                    </label>
                    <Field
                      className="cart-form__field"
                      type="email"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      className="cart-form__error"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="cart-form__wrap">
                    <label className="cart-form__label" htmlFor="phone">
                      Phone:
                    </label>
                    <Field
                      className="cart-form__field"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                    <ErrorMessage
                      className="cart-form__error"
                      name="phone"
                      component="div"
                    />
                  </div>
                  <div className="cart-form__wrap">
                    <label className="cart-form__label" htmlFor="address">
                      Address:
                    </label>
                    <Field
                      className="cart-form__field"
                      type="address"
                      id="address"
                      name="address"
                    />
                    <ErrorMessage
                      className="cart-form__error"
                      name="address"
                      component="div"
                    />
                  </div>
                </div>
                <ul className="cart-list">
                  {data.map((item) => (
                    <li className="cart-list__item" key={item.id}>
                      <img
                        style={{ borderRadius: "10px" }}
                        src={item.preview}
                        alt="product"
                        width={100}
                        height={100}
                      />
                      <h3 className="cart-list__item-title">{item?.name}</h3>
                      <p className="cart-list__item-price">
                        Price: {item?.price}
                      </p>
                      <div className="cart-list__buttonwrap">
                        <button
                          className="cart-list__item-add"
                          type="button"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                        <button
                          className="cart-list__item-remove"
                          type="button"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          -
                        </button>
                      </div>
                      <p className="cart-list__item-quantity">
                        Quantity: {item?.quantity}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cart__submit-wrap">
                <p className="cart-total">
                  Total price: {calculateTotalPrice(cartItems)}
                </p>
                <button className="cart-submit" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </ShoppingCartPageSheet>
    </Container>
  );
}

export default ShoppingCartPage