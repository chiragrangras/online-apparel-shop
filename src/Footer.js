import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons/faSquareYoutube";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";


function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-dark text-white p-4">
          <Col className="mx-5">
            <Stack>
              <h6 className="pt-5">
                Vimal Clothing - Where Style Meets Comfort!
              </h6>
              <div className="d-flex gap-4 pt-4">
              <FontAwesomeIcon icon={faSquareTwitter} size="2x"/>
              <FontAwesomeIcon icon={faSquareYoutube} size="2x" />
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x"/>
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
              </div>
              <Image
                className="pl-6"
                src="https://vimalclothing.com/cdn/shop/files/vimal_clothing.png?v=1692260090"
                alt=""
                rounded
                width={300}
                height={300}
              />
              <p>© 2024 Vimal Clothing store. Powered by Shopify.</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column pt-5">
              <h1>Menu</h1>
              <NavLink href="/" className="text-white">
                Home
              </NavLink>
              <NavLink href="#" className="text-white">
                About Us
              </NavLink>
              <NavLink href="#" className="text-white">
                Contact Us
              </NavLink>
              <NavLink href="#" className="text-white">
                Blog
              </NavLink>
              <NavLink href="#" className="text-white">
                Terms of Services
              </NavLink>
              <NavLink href="#" className="text-white">
                Refund Policy
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column pt-5">
              <h1>Info</h1>
              <NavLink href="/track-order" className="text-white">
                Track Your Order
              </NavLink>
              <NavLink href="#" className="text-white">
                Request a Return/Exchange
              </NavLink>
              <NavLink href="#" className="text-white">
                Privacy Policy
              </NavLink>
              <NavLink href="#" className="text-white">
                Shipping Policy
              </NavLink>
              <NavLink href="#" className="text-white">
                Return Policy
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
