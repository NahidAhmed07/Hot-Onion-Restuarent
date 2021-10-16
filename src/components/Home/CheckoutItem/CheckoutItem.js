import React, { useState } from 'react';
import { addToDb } from '../../../utilities/fakeDb';

const CheckoutItem = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      addToDb(food.id, false);
    }
  };

  const handlePlus = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
      addToDb(food.id);
    }
  };
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
      <img style={{ width: "180px", height: "180px" }} src={food.img} alt="" />
      <div className="my-4 text-start ms-2">
        <strong>
          <small>{food?.title?.slice(0, 15)}</small>
        </strong>
        <h5 className="text-danger my-3">$ {food.price}</h5>
        <small>{food.cat}</small>
      </div>
      <div className="d-flex align-items-center ms-4">
        <h5 className="quantity">
          <span onClick={() => handleMinus()} className="minus">
            <i className="fas fa-minus"></i>
          </span>
          <span className="digit">{quantity}</span>
          <span onClick={() => handlePlus()} className="plus">
            <i className="fas fa-plus"></i>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default CheckoutItem;