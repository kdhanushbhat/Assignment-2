import image from "./images.jpg";
export default function Collage() {
  return (
    <div className=" row mx-auto ">
      <div className="col-md-6 px-4 mx-auto ms-0 row ">
        <img
          alt="house"
          className="col-9 m-auto"
          style={{ width: "100%", height: "95%" }}
          src="https://img.staticmb.com/mbphoto/property/cropped_images/2021/Aug/10/Photo_h300_w450/56397697_8_s_one10-newtown-kolkata-ps_group_300_450.jpeg"
        />
      </div>

      <div className="col-md-6 row mx-auto">
        <img
          style={{ width: "50%", height: "45%" }}
          className="col-5 m-auto"
          alt="kitchen"
          src={image}
        />
        <img
          style={{ width: "50%", height: "45%" }}
          className="col-5 m-auto"
          alt="kitchen"
          src={image}
        />
        <img
          style={{ width: "50%", height: "45%" }}
          className="col-5 m-auto"
          alt="kitchen"
          src={image}
        />
        <img
          style={{ width: "50%", height: "45%" }}
          className="col-5 m-auto"
          alt="kitchen"
          src={image}
        />
      </div>
    </div>
  );
}
