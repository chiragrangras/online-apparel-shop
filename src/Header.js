import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UserLogin } from "./App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


function Header() {
  const { setLoginUser } = useContext(UserLogin);
  const cartDetail = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")): [];
  const loginUser = localStorage.getItem("loggedInUser");

  const navigate = useNavigate();

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    for(const product of cartDetail){
      
      // short-hand operator e.g. += -= *= /=
      // totalQuantity = totalQuantity + product.quantity is same as totalQuantity += product.quantity
      totalQuantity += product.quantity;

      // increment operator increases the value of variable
      // increment operator e.g. product.quantity++

      // decrement operator decrease the value of variable
      // decrement operator e.g. product.quantity--
    }
    return totalQuantity;
  }

  // const calculateQtyReduce = () => {
  //   return cartDetail.reduce((accummulator, currentProduct)=>{
  //     return accummulator + currentProduct.quantity;
  //   }, 0);
  // }

  const handleLogout = () => {
    localStorage.clear();
    setLoginUser("");
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <div className="d-flex gap-2">
            <Button variant="outline-primary">Search</Button>
          </div>
        </Form>
        <div className="logo">
          <a className="site-branding" href="/">
            <img
              src="//vimalclothing.com/cdn/shop/files/vimal_clothing_c0eafb7c-4d96-4c7d-9f4d-fe5cbc38cc92.png?v=1706553278
              &amp;width=440"
              alt=""
              width="110"
              loading="lazy"
              className="site-branding-image"
            />
          </a>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex gap-2">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Men" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link
                    to={"/men-product"}
                    className="text-decoration-none text-dark"
                  >
                    T-shirt
                  </Link>{" "}
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="men-product">T-shirt</NavDropdown.Item> */}
                <NavDropdown.Item href="#action4">Sweat shirt</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Oversizes shirt
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">Track suits</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Gym Vests</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Co-ord sets</NavDropdown.Item>
                <NavDropdown.Item href="#action9">Night suits</NavDropdown.Item>
                <NavDropdown.Item href="#action10">
                  Oversizes co-ord sets
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Women" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link
                    to={"/women-product"}
                    className="text-decoration-none text-dark"
                  >
                    T-shirt
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Women Tank Top
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  Women Sweat shirt
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Women Capri</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Women Shorts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Women Trackpants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Women Thermal Top
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Women Thermal Bootom
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">Women Set</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kids" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                  <Link
                    to={"/KidsTShits"}
                    className="text-decoration-none text-dark"
                  >
                    T-shirt
                  </Link>{" "}
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action1">
                  Kids T-shirts
                </NavDropdown.Item> */}
                <NavDropdown.Item href="#action2">Kids Shorts</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Kids Trackpants
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Kids Sweat suits
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Kids Top & Bottom
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Kids Track suits
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Kids Thermal
                </NavDropdown.Item>
              </NavDropdown>
              <div className="link d-flex gap-4">
                <Nav.Link as={Link} to="/track-order">
                  Track Your Order
                </Nav.Link>
                <Nav.Link as={Link} to="/sell-our-product">
                  Sell Our Product
                </Nav.Link>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Nav.Link as={Link} to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="1x"
                />
                {/* <span>{cartDetail.length > 0 ? cartDetail.length : ''}</span> */}
                {calculateTotalQuantity() > 0 && <span className="calculate-quantity">{calculateTotalQuantity()}</span>}
                {/* <span>{calculateQtyReduce() > 0 ? calculateQtyReduce() : ''}</span> */}
              </Nav.Link>

              {loginUser ? (
                <>
                  <span>Welcome {loginUser}</span>
                  <Nav.Link variant="outline-primary" onClick={handleLogout}>
                    Sign-out
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/sign-in" variant="outline-primary">
                    Sign-In
                  </Nav.Link>
                  <Nav.Link variant="outline-primary" as={Link} to="/sign-up">
                    Sign-Up
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;