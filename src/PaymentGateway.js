import React from "react";
import { useContext, useState } from "react";
import { CartDetails } from "./App";
import { Form, FormLabel, FormControl, Button } from "react-bootstrap";
import "./PaymentGateway.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";

function PaymentGateway() {
  const navigate = useNavigate();

  const { cartDetail, setCartDetail } = useContext(CartDetails);

  const notifyPaymentSuccess = () => {
    localStorage.removeItem('cart');
    setCartDetail([]);
    toast.success(`Payment successful.`, { position: "top-center", draggable: true, });
    navigate("/cart");
  };

  const [selectedOption, setSelectedOption] = useState(null);

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
      <h1>Payment</h1>
      <div className="line"></div>
      <div className="d-flex justify-content-center">
        <Form className="form-layout">
          <fieldset>
            <FormLabel as="legend">Select Payment Option:</FormLabel>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`gpay`}
                label={`GPay`}
                value="gpay"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              {selectedOption === "gpay" && (
                <FormControl
                  type="text"
                  placeholder="Enter GPay ID"
                  maxLength={16}
                />
              )}
            </Form.Group>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`phonepay`}
                label={`PhonePay`}
                value="phonepay"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              {selectedOption === "phonepay" && (
                <FormControl
                  type="text"
                  placeholder="Enter PhonePay ID"
                  maxLength={16}
                />
              )}
            </Form.Group>
            <Form.Group>
              <Form.Check
                name="paymentOption"
                type="radio"
                id={`cod`}
                label={`Cash-on-delivery`}
                value="cod"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
            </Form.Group>
          </fieldset>
        </Form>
      </div>
      <div>Total : {computeTotal()}</div>
      <div className="d-flex justify-content-center gap-3 my-3">
        <Button onClick={() => navigate(-1)} className="btn btn-primary">
          Back
        </Button>
        <Button className="btn btn-primary" onClick={notifyPaymentSuccess}>
          Order
        </Button>
      </div>
      <div className="line"></div>
      <Footer />
    </>
  );
}
export default PaymentGateway;
