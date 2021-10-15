import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={12} md={8} className="mx-auto">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="display-5 fw-bol">
                Best food waiting for your belly
              </h1>

              <button
                className="btn-red mt-4 text-end me-lg-5 align-self-end
"
              >
                Search
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
