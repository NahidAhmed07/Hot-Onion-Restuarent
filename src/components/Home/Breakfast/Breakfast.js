import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";

const Breakfast = () => {
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/Onion-resturent/Breakfast.json"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-3 g-lg-5">
          {Foods.map((food) => (
            <FoodItem food={food} key={food.id}></FoodItem>
          ))}
        </Row>
        <br />
        <NavLink as={NavLink} className="checkout-btn my-4" to="/home/checkout">
          Checkout Your Food
        </NavLink>
      </Container>
    </>
  );
};

export default Breakfast;
