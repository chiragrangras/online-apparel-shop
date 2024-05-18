import Header from "./Header.js";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SellOurProduct() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Header />
      <h1 className="Sell_title">Sell Our Product</h1>
      <div className="Mob">
        <span>
          <strong>Mobile&nbsp;:&nbsp;</strong>
        </span>
        <a href="tel:+9182907323%2063">+07973539764</a>
      </div>
      <div className="Email">
        <span>
          <strong>Email&nbsp;:&nbsp;</strong>
        </span>
        <a href="mailto:info@jisora.com">support@vimalclothing.com</a>
      </div>
      <div className="Address">
        <span>
          <strong>Address&nbsp;:&nbsp;</strong>
        </span>
        <p>
          Mack Hosiery(Regd.), B/32/741, Bahadur ke Road, G.T Road(West)
          Ludhiana, Punjab. 141008
        </p>
      </div>
      <strong>Address&nbsp;:&nbsp;</strong>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className="my-4">Submit</Button>
      </Form>
      <Footer />
    </>
  );
}

export default SellOurProduct;