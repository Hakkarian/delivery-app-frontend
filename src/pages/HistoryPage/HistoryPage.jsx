import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'shared/components/Container.styled';
import { HistoryPageSheet } from './HistoryPage.styled';
import { findOrder } from 'redux/operations/order-operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const HistoryPage = () => {
    const orders = useSelector((state) => state.order.history);
      const dispatch = useDispatch();

    const handleSubmitHistory = (values) => {
        dispatch(findOrder(values))
    }

    const calculateTotalPrice = (data) => {
      return data.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
  return (
    <Container>
      <HistoryPageSheet>
        <div className="cart-wrap">
          <h2 className="cart-wrap__title">Order Form</h2>
          <Formik
            initialValues={{
              email: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitHistory}
          >
            <Form className="cart-form">
              <div className="wrapper-connect">
                <div className="wrapper-wrap">
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
                  <button type='submit'>Submit</button>
                </div>
                <ul className="orders-list">
                  {orders.map((order) => (
                    <li key={order._id}>
                      <ul className="cart-list">
                        {order.items.map((item) => (
                          <li className="cart-list__item" key={item.id}>
                            <h3 className="cart-list__item-title">
                              {item?.name}
                            </h3>
                            <p className="cart-list__item-price">
                              Price: {item?.price}
                            </p>
                            <p className="cart-list__item-quantity">
                              Quantity: {item?.quantity}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <p className="cart-total">
                        Total price: {calculateTotalPrice(order.items)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cart__submit-wrap"></div>
            </Form>
          </Formik>
        </div>
      </HistoryPageSheet>
    </Container>
  );
}

export default HistoryPage