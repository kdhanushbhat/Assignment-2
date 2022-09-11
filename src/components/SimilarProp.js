export default function SimilarProp() {
  const cards = [1, 2, 3].map((x) => {
    return <Card key={x} />;
  });
  return (
    <div className="container-fluid similar-properties my-5">
      <h2 className="text-center fw-bold mb-3" style={{ color: "#bd34eb" }}>
        Similar Porperties
      </h2>
      <div className="row container-fluid mx-auto ">{cards}</div>
    </div>
  );
}

function Card() {
  return (
    <div
      className="prop-card col-lg-3 col-md-5 p-4 mx-auto  fw-semibold my-3 rounded "
      style={{ backgroundColor: "#bc67f5" }}
    >
      <img
        className="col-9 py-3 rounded"
        src="https://is1-3.housingcdn.com/4f2250e8/485edeb921d59d9d28bcfd4de689623e/v0/fs/gm_meena_orchid-bidhannagar-kolkata-gm_group.jpeg"
        alt="property pic"
        style={{ width: "95%" }}
      />
      <h3 className="text-start ms-4 fw-semibold text-light fs-4">
        2BHK Apartment
      </h3>
      <div className="row m-2">
        <p className="col-6 text-start text-light">
          <i className="bi bi-geo-alt"></i>Kolkata
        </p>
        <p className="col-6 text-end text-light">30,000Rs</p>
      </div>
      <button className="col-10 rounded p-1 btn btn-primary my-2 fw-semibold">
        Contact now
      </button>
      <button
        className="col-10 rounded p-1 my-2 btn fw-semibold"
        style={{ backgroundColor: "white" }}
      >
        Learn More
      </button>
    </div>
  );
}
