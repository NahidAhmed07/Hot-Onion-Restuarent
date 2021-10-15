import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const FoodItem = ({ food }) => {
  const { img, title, details, price,id, cat } = food;
  return (
    <Col>
      <Card>
        <Card.Img style={{width:"250px", height:'250px'}} className="mx-auto"  src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="text-muted">
            {details}
          </p>
          <h5>$ {price}</h5>
        </Card.Body>
        <Card.Footer>
          <NavLink to={`/home/food/${cat}/${id}`} style={{ cursor: "pointer" }} className="text-muted">more details
          </NavLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default FoodItem;