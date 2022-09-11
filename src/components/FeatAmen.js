export default function FeatAmen() {
  const list = [
    {
      id: 1,
      text: "Hospital"
    },
    {
      id: 2,
      text: "Park"
    },
    {
      id: 3,
      text: "Bus"
    },
    {
      id: 4,
      text: "Bus"
    }
  ];

  const icons = list.map((x) => {
    return (
      <div
        key={x.id}
        className=" icon-card d-inline-block col-lg-2 col-md-2 col-4 text-start text-lg-center rounded py-3 m-3 bg-primary text-light"
      >
        <i className="bi bi-building ms-lg-0 ms-md-3 fw-semibold fs-4"></i>
        <p className="ms-lg-0 ms-md-2 fw-semibold fs-md-5">{x.text}</p>
      </div>
    );
  });
  return (
    <>
      <div id="FeaturesAmenities" className=" text-center p-3 my-5">
        <h2 className=" fw-bold  mb-3" style={{ color: "#bd34eb" }}>
          Features and Amenities
        </h2>
        <p className="d-inline px-3 fs-5 fw-bold">
          <i className="bi bi-bullseye "></i> CCTV
        </p>
        <p className="d-inline px-3 fs-5 fw-bold">
          <i className="bi bi-bullseye "></i> Security
        </p>
        <p className="d-inline px-3 fs-5 fw-bold">
          <i className="bi bi-bullseye "></i> Life
        </p>
      </div>
      <div id="Nearby" className=" p-3 my-5">
        <h2 className="text-center fw-bold  mb-3" style={{ color: "#bd34eb" }}>
          Nearby
        </h2>
        <div className="icon-group text-start row  ms-md-3  justify-content-center">
          {icons}
        </div>
      </div>
    </>
  );
}
