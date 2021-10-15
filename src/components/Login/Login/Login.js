import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logoImg from "../../../images/logo2.png";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { googleSignIn, error, user,setUser, setError, registerNewUser , success } = useAuth();

  const redirect_uri = location?.state?.from || "/";
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Contain at least 6 character")
    }
   else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Ensure password has two uppercase letters.");
    }else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Ensure password has two digits.");
    } else if (password !== confirmPass) {
      setError("password and Confirm Password Not Matched")
      
    } else {
  registerNewUser(email, password, name, redirect_uri);
    }
  
}
  
const handleGoogleSignIn = () => {
  googleSignIn()
    .then((result) => {
      setUser(result.user);
      history.push(redirect_uri);
    })
    .catch((err) => setError(err.message));
};
  
  
  return (
    <div>
      <h3>This Login</h3>
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
                  onBlur={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                ></input>
                <br />
                <br />

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
                <br />

                <input
                  required
                  onBlur={(e) => setConfirmPass(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                ></input>
                <br />

                <p className="text-danger">
                  <span>&nbsp; &nbsp;</span>
                  {error}
                </p>

                <input
                  className="btn btn-danger w-100"
                  type="submit"
                  value="Register "
                />
              </form>
              <br />
              <p onClick={handleGoogleSignIn} className="googleSignIn">
                Sign in Using Google
              </p>

              <p onClick={() => history.push("/login")}>
                {" "}
                Already have an account ?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
