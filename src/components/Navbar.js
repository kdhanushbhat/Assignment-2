export default function Navbar() {
  return (
    <header
      className=" row container-fluid py-3 mx-auto px-0"
      style={{ width: "100%" }}
    >
      <h1 className="col-md-6 p-2 ">Property Bhavan</h1>
      <nav className="col-md-6 col-12 px-0">
        <ul
          style={{ listStyle: "none" }}
          className=" p-3 col-12 m-auto d-flex flex-row  align-items-center  justify-content-around"
        >
          <li className="mx-md-4 mx-sm-2 li-active">Home</li>
          <li className="mx-md-4 mx-sm-2">List-Property</li>
          <li className="mx-md-4 mx-sm-2">Blog</li>
          <li className="mx-md-4 mx-sm-2">
            <i className="bi bi-person-circle"></i>
          </li>
        </ul>
      </nav>
      <hr className="col-11 mx-auto" />
    </header>
  );
}
