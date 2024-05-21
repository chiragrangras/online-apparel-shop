import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { CartDetails } from "./App";
import { toast } from "react-toastify";

function MenProduct() {
  const { cartDetail, setCartDetail } = useContext(CartDetails);

  const notifyCartAdded = () => {
    toast.success(`Cart added successful.`, { position: "top-center", draggable: true });
  };

  const addToCartHandle = (
    id,
    name,
    size,
    price
  ) => {
    let product = cartDetail.find(product => product.id === id);

    if(product){
      product.quantity++;
      console.log(`Product in if: ${JSON.stringify(product)}`);
      // setCartDetail([...cartDetail]);
    }else{
      product = { id, name, size, price, quantity: 1};
      console.log(`Product in else: ${JSON.stringify(product)}`);
      //setCartDetail([...cartDetail, product]);
      localStorage.setItem("cart", JSON.stringify([...cartDetail, product]));
      setCartDetail(JSON.parse(localStorage.getItem("cart")));
    }
    notifyCartAdded();
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column gap-5 p-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-PURPLE-01-1_b9a8fae2-9f29-49e2-8f26-c2b75f21a4a0_360x493.jpg?v=1711371184"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <Card.Body>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
                Purple T-Shirt for Men
              </a>
            </Card.Title>
            <p className="price">Rs.350.00</p>
            <div className="d-flex my-3 gap-2">
              <Button className="btn btn-light border border-2">Small</Button>
              <Button className="btn btn-light border border-2">X-Large</Button>
              <Button className="btn btn-light border border-2">
                XX-Large
              </Button>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="box-purple"></div>
            <Button variant="primary" onClick={() => addToCartHandle(1, "Purple Men's Tshirt", "XL", 350)}>Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-GREEN-01-1_0a7475f0-ccfd-4cba-8ff3-e7283422e832_360x493.jpg?v=1711371175"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <Card.Body>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
                Green T-Shirt for Men
              </a>
            </Card.Title>
            <p className="price">Rs.450.00</p>
            <div>
              <Button className="btn btn-light border border-2 mx-2 my-2">
                Small
              </Button>
              <Button className="btn btn-light border border-2 mx-2 my-2">
                Medium
              </Button>
              <Button className="btn btn-light border border-2 mx-2 my-2">
                Large
              </Button>
              <Button className="btn btn-light border border-2 mx-2 my-2">
                X-Large
              </Button>
              <Button className="btn btn-light border border-2 mx-2 my-2">
                XX-Large
              </Button>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="box-green"></div>
            <Button variant="primary" onClick={() => addToCartHandle(2, "Green Men's Tshirt", "XL", 450)}>Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-FEROZI-01-1_e375b2fa-30b2-4f7a-8d18-5513d58de5fb_360x493.jpg?v=1711371166"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <Card.Body>
            <Card.Title>
              <a href="#" className="link-dark text-decoration-none">
                Ferozi T-Shirt for Men
              </a>
            </Card.Title>
            <p className="price">Rs.550.00</p>
            <div className="d-flex my-3 gap-3">
              <Button className="btn btn-light border border-2">Medium</Button>
              <Button className="btn btn-light border border-2">Large</Button>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="box-Ferozi"></div>
            <Button variant="primary" onClick={() => addToCartHandle(3, "Ferozi Men's Tshirt", "M", 550)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default MenProduct;
