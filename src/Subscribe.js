import React from "react";
import { Button } from "react-bootstrap";

function Subscribe() {
  return (
    <div className="bg-light mt-4">
      <h3>
        Be the first to know about new collections and ENJOY UPTO 70% OFF on
        <br />
        your next purchase! Email
      </h3>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <input type="text" placeholder="Email" required=""/>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
export default Subscribe;
