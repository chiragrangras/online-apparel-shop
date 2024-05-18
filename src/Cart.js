import React, { useContext } from "react";
import { CartDetails } from "./App";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const navigate = useNavigate();

  const { setCartDetail } = useContext(CartDetails);
  const cartDetail = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];

  const addQuantityHandler = (id) => {
    const foundProduct = cartDetail.find((product) => product.id === id);
    foundProduct.quantity++;
    setCartDetail([...cartDetail]);
    localStorage.setItem("cart", JSON.stringify([...cartDetail]));
  };

  const removeQuantityHandler = (id) => {
    const foundProduct = cartDetail.find((product) => product.id === id);
    if (foundProduct.quantity > 1) {
      foundProduct.quantity--;
      setCartDetail([...cartDetail]);
      localStorage.setItem("cart", JSON.stringify([...cartDetail]));
    } else {
      const updatedCartDetail = cartDetail.filter(
        (product) => product.id !== id
      );
      setCartDetail(updatedCartDetail);
      localStorage.setItem("cart", JSON.stringify(updatedCartDetail));
    }
  };

  const computeTotal = () => {
    let sum = 0;
    for (const product of cartDetail) {
      sum += product.quantity * product.price;
    }
    return sum;
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="cart">
          <div>
            <h1 className="mt-3">Cart items</h1>
          </div>

          {cartDetail?.length > 0 && (
            <div className="table">
              <div className="header d-flex">
                <div className="w-40">Product</div>
                <div className="w-15">Size</div>
                <div className="w-15">Price</div>
                <div className="w-15">Quantity</div>
                <div className="w-15">Sub-total</div>
              </div>
              <div className="line"></div>
              <div className="body">
                {cartDetail.map((product, index) => (
                  <div key={index} className="d-flex">
                    <div className="w-40 align-left">{product.name}</div>
                    <div className="w-15">{product.size}</div>
                    <div className="w-15">{product.price}</div>
                    <div className="w-15 d-flex justify-content-center align-items-center gap-3">
                      <FontAwesomeIcon
                        icon={faMinus}
                        size="1x"
                        onClick={() => {
                          removeQuantityHandler(product.id);
                        }}
                        className="cursorPointer"
                      />
                      <div>{product.quantity}</div>
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="1x"
                        onClick={() => {
                          addQuantityHandler(product.id);
                        }}
                        className="cursorPointer"
                      />
                    </div>
                    <div className="w-15">
                      {product.quantity * product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          )}
          <div className="line"></div>
          <div className="ms-2 mt-2">Total Price: {computeTotal()}</div>
          <div className="d-flex justify-content-center gap-3 my-3">
            <Button onClick={()=>navigate(-1)} className="btn btn-primary">
              Back
            </Button>
            <Button onClick={()=>navigate("/payment")} className="btn btn-primary">Payment</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cart;
