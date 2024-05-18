import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Card, CardBody } from "react-bootstrap";
import "./Kids.css";
import { CartDetails } from "./App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function KidsTShits() {
  const { cartDetail, setCartDetail } = useContext(CartDetails);

  const addToCartHandle = (id, name, size, price) => {
    let product = cartDetail.find((product) => product.id === id);

    if (product) {
      product.quantity++;
      console.log(`Product in if: ${JSON.stringify(product)}`);
    } else {
      product = { id, name, size, price, quantity: 1 };
      console.log(`Product in else: ${JSON.stringify(product)}`);
      localStorage.setItem("cart", JSON.stringify([...cartDetail, product]));
      setCartDetail(JSON.parse(localStorage.getItem("cart")));
    }
  };
  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column gap-5 p-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_77_PINK_01_1_360x493.jpg?v=1712733414"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <Link className="link-dark text-decoration-none">Pink Regular T-shirts For Kids</Link>
            </Card.Title>
            <p className="price-kids">Rs.100</p>
            <div className="d-flex justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                2-3Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                3-4Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                4-5Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                5-6Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                6-7Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                7-8Y
              </Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                8-9Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                9-10Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                10-11Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                11-12Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                12-13Y
              </Button>
            </div>
            <div className="d-flex mt-3 gap-2">
              <Button className="btn btn-light border border-2 btn-sm">
                13-14Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                14-15Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                15-16Y
              </Button>
            </div>
          </CardBody>
          <CardBody>
            <div className="box-pink"></div>
            <Button variant="primary" onClick={() => addToCartHandle(7, "Pink Kids Tshirt", "2-3Y", 100)}>Add to Cart</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_76_RUST_01_1_360x493.jpg?v=1712733401"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <Link className="link-dark text-decoration-none">Rust Regular T-shirts For Kids</Link>
            </Card.Title>
            <p className="price-kids">Rs.200</p>
            <div className="d-flex justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                2-3Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                3-4Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                4-5Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                5-6Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                6-7Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                7-8Y
              </Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                8-9Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                9-10Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                10-11Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                11-12Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                12-13Y
              </Button>
            </div>
            <div className="d-flex mt-3 gap-2">
              <Button className="btn btn-light border border-2 btn-sm">
                13-14Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                14-15Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                15-16Y
              </Button>
            </div>
          </CardBody>
          <CardBody>
            <div className="box-orange"></div>
            <Button variant="primary" onClick={() => addToCartHandle(8, "Orange Kids Tshirt", "3-4Y", 200)}>Add to Cart</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" />
          <img
            data-variants=""
            src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PRINT_75_LGREEN_01_1_360x493.jpg?v=1712733388"
            data-sizes="auto"
            data-aspectratio="0.75"
            data-parent-fit="contain"
            alt=""
          ></img>
          <CardBody>
            <Card.Title>
              <Link className="link-dark text-decoration-none">Green Regular T-shirts For Kids</Link>
            </Card.Title>
            <p className="price-kids">Rs.199</p>
            <div className="d-flex justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                2-3Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                3-4Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                4-5Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                5-6Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                6-7Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                7-8Y
              </Button>
            </div>
            <div className="d-flex mt-3 justify-content-around">
              <Button className="btn btn-light border border-2 btn-sm">
                8-9Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                9-10Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                10-11Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                11-12Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                12-13Y
              </Button>
            </div>
            <div className="d-flex mt-3 gap-2">
              <Button className="btn btn-light border border-2 btn-sm">
                13-14Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                14-15Y
              </Button>
              <Button className="btn btn-light border border-2 btn-sm">
                15-16Y
              </Button>
            </div>
          </CardBody>
          <CardBody>
            <div className="box-green"></div>
            <Button variant="primary" onClick={() => addToCartHandle(9, "Green Kids Tshirt", "4-5Y", 300)}>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </>
  );
}
export default KidsTShits;