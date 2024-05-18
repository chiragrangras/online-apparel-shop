import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Instagram(){
    return(
        <div className="container-fluid">
        <h1 className="mt-4">FOLLOW US ON INSTAGRAM @VIMAL.JONNEY</h1>
        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column gap-4 mt-4 ">
        <img src="Images/Instagram-img1.jpg" className="p-3" alt="" width={150} height={150}/>
        <img src="Images/Instagram-img2.jpg" className="p-3" alt="" width={150} height={150}/>
        <img src="Images/Instagram-img3.jpg" className="p-3" alt="" width={150} height={150}/>
        <img src="Images/Instagram-img4.jpg" className="p-3" alt="" width={150} height={150}/>
        <img src="Images/Instagram-img5.jpg" className="p-3" alt="" width={150} height={150}/>
        <img src="Images/Instagram-img6.jpg" className="p-3" alt="" width={150} height={150}/>
        </div>
        </div>
    )
}
export default Instagram;