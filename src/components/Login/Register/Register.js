import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logoImg from "../../../images/logo2.png";
import "../Login/Login.css";

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const history = useHistory();
  const location = useLocation();
  const { googleSignIn, error, success, logInUser, setError, setUser } =
    useAuth();
  
  
  const redirect_uri = location?.state?.from || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message));
  }
  
  const HandleSubmit = (e) => {
    e.preventDefault()
    logInUser(email, password);
  }
  return (
    <div>
      <h4>this is Register</h4>
      <Container className="mt-5 pt-5">
        <Row>
          <Col xs={12} md={8} lg={4} className="mx-auto">
            <div>
              <img className="img-fluid logo-img" src={logoImg} alt="" />

              <form onSubmit={HandleSubmit}>
                <p className="text-success">
                  <span>&nbsp; &nbsp;</span>
                  {success}
                </p>

                <input
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
                <br />
                <br />

                <input
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                ></input>
                <br />

                <p className="text-danger">
                  <span>&nbsp; &nbsp;</span>
                  {error}
                </p>

                <input
                  className="btn btn-danger w-100"
                  type="submit"
                  value="Log in"
                />
              </form>
              <br />
              <p
                onClick={handleGoogleSignIn}
                className="googleSignIn"
              >
                Sign in Using Google
              </p>

              <p onClick={() => history.push("/register")}>
                {" "}
                Are You New ot Onion Restaurant ?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
<h4>this is Register</h4>;
