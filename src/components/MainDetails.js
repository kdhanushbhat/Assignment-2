import { useState } from "react";
import Collage from "./Collage";
export default function MainDetails() {
  const [actv, setActv] = useState(0);
  return (
    <div className="col-12 contianer text-start">
      <p
        className="  d-inline-block rounded py-1 px-3 ms-5"
        style={{ backgroundColor: "#bd34eb", color: "white" }}
      >
        For Rent
      </p>
      <h3 className=" ms-md-5 ms-3 p-2 fw-bold">
        2BHK Apartment for Sale in Newton, Kolkata, West Bengal
      </h3>
      <Collage />
      <div className="row container-fluid p-0 ">
        <p
          className="col-5 my-auto fs-4 fw-bold ms-md-5 ms-5 mx-3 "
          style={{ color: "#bd34eb" }}
        >
          25,000 Rs
        </p>
        <div className=" col-md-6 col-5  m-auto my-3 text-end d-flex flex-md-row justify-content-md-end justify-content-center align-items-center">
          <i className="border p-2 mx-md-2 mx-1 rounded bi bi-heart"></i>
          <i className="border rounded p-2 mx-md-2 mx-1 bi bi-arrow-bar-up"></i>
          <i className="border rounded mx-md-2 p-2 mx-1 bi bi-repeat"></i>
        </div>
        <p className="col-md-8 text-md-start text-center me-1 ms-md-5 mx-2 ">
          SP Sukhobrishti LPs, Action Area III, Newton, Kolkata, West Bengal
          700035, India
        </p>
        <div className="mx-auto col-md-3 col-10  d-flex flex-row align-items-center justify-content-around my-2 ">
          <p className="col-md-2 mx-md-auto">
            <i
              className="bi bi-whatsapp fs-4 rounded p-2 px-4"
              style={{ color: "#ffffff", backgroundColor: "#25D366" }}
            ></i>
          </p>
          <p
            className="col-md-6  fw-semibold rounded  text-center p-2"
            style={{ backgroundColor: "#bd34eb", color: "white" }}
          >
            Contact Owner
          </p>
        </div>
      </div>
      <div className="my-5 nav-2 p-0 text-center d-md-block d-none pt-5">
        <ul
          style={{ listStyle: "none" }}
          className=" mx-0 d-flex flex-row justify-content-around align-items-center"
        >
          <li
            onClick={() => setActv(0)}
            className={actv === 0 ? "li-active" : ""}
          >
            <a href="#Overview">Overview</a>
          </li>
          <li
            onClick={() => setActv(1)}
            className={actv === 1 ? "li-active" : ""}
          >
            <a href="#Details">Details</a>
          </li>
          <li
            onClick={() => setActv(2)}
            className={actv === 2 ? "li-active" : ""}
          >
            <a href="#FeaturesAmenities">Features & Amenities</a>
          </li>
          <li
            onClick={() => setActv(3)}
            className={actv === 3 ? "li-active" : ""}
          >
            <a href="#Nearby">Nearby</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
