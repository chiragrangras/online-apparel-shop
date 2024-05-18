import "./App.css";
import "./SignIn.css";
import "./Signup.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { createContext, useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import TrackOrder from "./TrackOrder";
import SellOurProduct from "./SellOurProduct";
import MenProduct from "./MenProduct";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import WomenProduct from "./WomenProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentGateway from "./PaymentGateway";
import KidsTShits from "./KidsT-Shirts";

export const UserLogin = createContext();
export const CartDetails = createContext();

// npm i bootstrap
// npm i react-bootstrap
// npm i react-router-dom
// npm i axios
// npm i react-toastify
// npm i json-server
// json-server --watch db.json --port 4000

function App() {
  const [loginUser, setLoginUser] = useState("");
  const [cartDetail, setCartDetail] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserLogin.Provider value={{ loginUser, setLoginUser }}>
          <CartDetails.Provider value={{ cartDetail, setCartDetail }}>
            <ToastContainer hideProgressBar={false} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/men-product" element={<MenProduct />}></Route>
              <Route path="/women-product" element={<WomenProduct />}></Route>
              <Route path="/KidsTShits" element={<KidsTShits/>}></Route>
              <Route path="/track-order" element={<TrackOrder />}></Route>
              <Route
                path="/sell-our-product"
                element={<SellOurProduct />}
              ></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/payment" element={<PaymentGateway />}></Route>
            </Routes>
          </CartDetails.Provider>
        </UserLogin.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;