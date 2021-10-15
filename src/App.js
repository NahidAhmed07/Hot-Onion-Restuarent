import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home/Home';
       
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Menubar from './components/Shared/Menubar/Menubar';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Menubar></Menubar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/cart">
                <Cart></Cart>
              </PrivateRoute>
              <Route path="/register">
                <Login></Login>
              </Route>

              <Route path="/login">
                <Register></Register>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
