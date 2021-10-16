import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import Breakfast from "../Breakfast/Breakfast";
import Checkout from "../Checkout/Checkout";
import Dinner from "../Dinner/Dinner";
import FoodDetails from "../FoodDetails/FoodDetails";
import Lunch from "../Lunch/Lunch";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="py-4">
      <hr />

      <div className="my-5">
        <div>
          <NavLink
            to="/home/breakfast"
            activeClassName="cat-btn-active"
            className="cat-btn"
          >
            Breakfast
          </NavLink>
          <NavLink
            to="/home/lunch"
            activeClassName="cat-btn-active"
            className="cat-btn"
          >
            Lunch
          </NavLink>
          <NavLink
            to="/home/dinner"
            activeClassName="cat-btn-active"
            className="cat-btn"
          >
            Dinner
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/home/breakfast">
          <Breakfast></Breakfast>
        </Route>
        <Route path="/home/lunch">
          <Lunch></Lunch>
        </Route>
        <Route path="/home/dinner">
          <Dinner></Dinner>
        </Route>
        <PrivateRoute path="/home/checkout">
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path="/home/food/:foodCat/:foodId">
          <FoodDetails></FoodDetails>
        </Route>

        <Route path="/">
          <Dinner></Dinner>
        </Route>
      </Switch>

      
    </div>
  );
};

export default Categories;
