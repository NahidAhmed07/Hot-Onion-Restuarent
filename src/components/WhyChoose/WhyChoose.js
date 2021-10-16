import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img1 from "../../images/img1 (1).png";
import img2 from "../../images/img1 (2).png";
import img3 from "../../images/img1 (3).png";


const WhyChoose = () => {
  return (
    <div className="container-fluid my-5 text-start">
      <Container>
        <Row className="text-start">
          <Col xs={12} md={8} lg={6}>
            <h1>Why You choose us</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              ipsa nemo quaerat obcaecati, modi qui sit saepe at dignissimos
              error beatae et! Velit impedit quae quo necessitatibus animi
              debitis porro!
            </p>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-lg-5 g-3 my-4">
          <Col>
            <div>
              <div>
                <img className="img-fluid" src={img1} alt="" />
              </div>
              <div className="d-flex my-3 gap-4">
                <div>
                  <i className="fas fa-truck "></i>
                </div>
                <div>
                  <h6>Fast Delevery</h6>
                  <small>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestias, obcaecati eum! Corporis numquam hic optio autem
                  </small>
                  <br />
                  <NavLink to="/">see more</NavLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoose;