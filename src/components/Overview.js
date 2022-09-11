export default function Overview() {
  const list = [
    {
      header: "BHK",
      caption: "3BHK",
      id: 1
    },
    {
      header: "Bathroom",
      caption: "2",
      id: 2
    },
    {
      header: "Furnishing Status",
      caption: "Semi-Furnished",
      id: 3
    },
    {
      header: "Super Build Area",
      caption: "1311 Sq.ft.",
      id: 4
    }
  ];

  const cards = list.map((x) => {
    return (
      <div
        key={x.id}
        className="rounded det-card   text-start my-3 mx-md-2  mx-auto px-2 p-3"
        style={{
          border: "2px #bd34eb solid",
          borderColor: "#bd34eb",
          color: "#3d05f5"
        }}
      >
        <i className="ms-3 fs-5 bi bi-arrows-fullscreen"></i>
        <p className="mx-2 fw-semibold fs-5 m-0 mt-3">{x.header}</p>
        <p className="ms-2">{x.caption}</p>
      </div>
    );
  });
  return (
    <>
      <div
        id="Overview"
        className="overview container-fluid row  py-3"
        style={{ margin: "2rem 0rem" }}
      >
        <h3
          className="text-center fw-bold mt-2 mb-3"
          style={{ color: "#bd34eb" }}
        >
          Overview
        </h3>
        <p className="text-center col-12  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare
          vehicula orci, consequat egestas enim mattis eget. Suspendisse neque
          sem, finibus nec convallis eu, eleifend a elit. Nulla facilisi. In
          eleifend posuere sapien id scelerisque. Donec nec lacus mi. Curabitur
          vitae dignissim est. Pellentesque vel.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Morbi ornare vehicula orci, consequat
          egestas enim mattis eget.
        </p>
      </div>
      <div id="Details" className="details container-fluid my-5">
        <h2 className="text-center fw-bold mb-3" style={{ color: "#bd34eb" }}>
          Details
        </h2>
        <div className="container-fluid  card-group d-flex flex-md-row flex-column justify-content-center align-items-center  mx-auto">
          {cards}
        </div>
      </div>
    </>
  );
}
