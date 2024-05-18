import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";

function TrackOrder() {
  return (
    <>
    <Header/>
      <div className="bg-light pt-1">
        <img src="//vimalclothing.com/cdn/shop/files/vimal_clothing_c0eafb7c-4d96-4c7d-9f4d-fe5cbc38cc92.png?v=1706553278&amp;width=100" alt="" />
      </div>
      <div className="post_order_info">
        <div className="title">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-package"
            >
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <strong>Track status of your shipment</strong>
          </span>
          <hr />
          <div className="Search_text">
            Search By :
            <input type="radio" />
            <label>Order Id</label>
            <input type="radio" />
            <label>AWB</label>
          </div>
          <div>
            <input
              type="text"
              className="Input_text"
              placeholder="Enter Order Id to search"
            ></input>
          </div>
          <Button variant="primary" className="mt-2">
            Submit
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default TrackOrder;
