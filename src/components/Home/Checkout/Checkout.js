import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useCartData from "../../../hooks/useCartData";
import FoodItem from "../FoodItem/FoodItem";

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems, handleMinus, handlePlus, quantity } = useCartData();
  console.log(cartItems);
 
  return (
    <div id="checkout">
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
              {cartItems.map((food) => (
                <div className="d-flex">
                  <img
                    style={{ width: "180px", height: "180px" }}
                    src={food.img}
                    alt=""
                  />
                  <div className="my-4 text-start ms-2">
                    <strong>
                      <small>{food.title.slice(0, 15)}</small>
                    </strong>
                    <h5 className="text-danger my-3">$ {food.price}</h5>
                    <small>{food.cat}</small>
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <h5 className="quantity">
                      <span onClick={()=> handleMinus(food)} className="minus">
                        <i className="fas fa-minus"></i>
                      </span>
                      <span className="digit">{quantity}</span>
                      <span onClick={()=> handlePlus(food)} className="plus">
                        <i className="fas fa-plus"></i>
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>

            <h6></h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
