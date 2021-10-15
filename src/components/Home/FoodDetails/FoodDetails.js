import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useCartData from '../../../hooks/useCartData';
import { addToDb } from '../../../utilities/fakeDb';
import "./FoodDetails.css"

const FoodDetails = () => {
  const { foodId, foodCat } = useParams();
  const [food, setFood] = useState({});
  const [foods, setFoods] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const history = useHistory();

  const { cartItems, setCartItems, handleMinus,handlePlus, quantity, setQuantity} = useCartData();

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/NahidAhmed07/api/main/Onion-resturent/${foodCat}.json`
    ).then(res => res.json())
      .then(data => {
        setFoods(data);
        const findFood = data.find(food => food.id === foodId);
        setFood(findFood);

      });
    
  }, [])
  
  

  
  
  const handleImgIndex = () => {
    if (imgIndex < 4) {
      setImgIndex( imgIndex + 1 )
    } else {
      setImgIndex(0);
   }
  }

  const handleImgDetails = (food) => {
    history.push(`/home/food/${food?.cat}/${food?.id}`);
    console.log(food.cat, food.id);
    console.log(food);
  }

  
  const handleAddBtn = () => {

    addToDb(food.id);
    const exists = cartItems.find(item => item.id === food.id);

    if (exists) {
      alert("food already added")
      
    } else {
      food.quantity = 1;
      setCartItems([...cartItems, food ])
    }
  }

  

  return (
    <div>
      <Container className="my-5">
        <Row xs={1} md={2} className="g-5">
          <Col>
            <div className="text-start">
              <h3 className="mt-5">{food.title}</h3>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt et saepe sunt ut, minus atque eveniet ipsa
                consequuntur? Sunt id quos asperiores alias eaque unde delectus
                explicable ratione earum repellat quo nihil optio provident
                eligendi excepturi odio, maxime reiciendis voluptatibus.
              </p>

              <br />

              <div className="d-flex align-items-center">
                <h1 className="price">
                  $ {(food.price * quantity).toFixed(2)}
                </h1>

                <h5 className="quantity">
                  <span onClick={()=>handleMinus(food)} className="minus">
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className="digit">{quantity}</span>
                  <span onClick={()=>handlePlus(food)} className="plus">
                    <i className="fas fa-plus"></i>
                  </span>
                </h5>
              </div>

              <button className="btn-red mt-4" onClick={handleAddBtn}>
                <i className="fas fa-cart-arrow-down"></i> Add
              </button>

              <div className="small-img mt-5">
                <img
                  onClick={() => handleImgDetails(foods[imgIndex])}
                  className="img-fluid me-4"
                  src={foods[imgIndex]?.img}
                  alt=""
                />
                <img
                  onClick={() => handleImgDetails(foods[imgIndex + 1])}
                  className="img-fluid"
                  src={foods[imgIndex + 1]?.img}
                  alt=""
                />
                <div className="d-flex justify-content-center align-items-center ">
                  <i
                    onClick={handleImgIndex}
                    className="fas fa-2x  fa-chevron-right right-arrow"
                  ></i>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img className="img-fluid" src={food?.img} alt="" />
          </Col>
        </Row>
         <br />
        <NavLink as={NavLink} className="checkout-btn my-4" to="/home/checkout">
          Checkout Your Food
        </NavLink>
      </Container>
    </div>
  );
};
