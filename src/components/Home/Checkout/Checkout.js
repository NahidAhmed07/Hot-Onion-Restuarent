import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useCartData from "../../../hooks/useCartData";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import FoodItem from "../FoodItem/FoodItem";

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems, handleMinus, handlePlus, quantity } = useCartData();
  console.log(cartItems);
 
  return (
    <Container fluid id="checkout">
      <br />

      <Container className="my-5 ">
        <Row xs={1} md={2} className="g-5">
          <Col>
            <div className="px-lg-5">
              <h5>Edit Delevery Details </h5>
              <hr />
              <br />
              <h6>Deliver to door</h6>
              <input
                type="text"
                value={user.displayName}
                className="form-control"
              />{" "}
              <br />
              <input
                type="email"
                value={user.email}
                className="form-control"
              />{" "}
              <br />
              <input
                type="text"
                value="107 Rd No 8"
                className="form-control"
              />{" "}
              <br />
              <input
                placeholder="Flat, suite or floor"
                type="text"
                className="form-control"
              />
              <br />
              <input
                placeholder="Business name"
                type="text"
                className="form-control"
              />
              <br />
              <input
                placeholder="Add delivery instructor"
                type="text"
                className="form-control"
              />
              <br />
              <button className="btn btn-danger w-100">
                Save &amp; Continue
              </button>
            </div>
          </Col>
          <Col>
            <div>
              <br />

              <p>
                From <strong>Gulshan Plaza Restura GPR</strong>
              </p>
              <p>Arriving in 20-30 min</p>
              <p>107 Rd No 8</p>
            </div>

            <div>
              {cartItems.map((food) => <CheckoutItem food={food} key={food.id} ></CheckoutItem>)}
            </div>

            
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Checkout;
