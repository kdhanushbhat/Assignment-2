import "./styles.css";
import Navbar from "./components/Navbar";
import MainDetails from "./components/MainDetails";
import Overview from "./components/Overview";
import FeatAmen from "./components/FeatAmen";
import SimilarProp from "./components/SimilarProp";
export default function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <Navbar />
      <MainDetails />
      <Overview />
      <FeatAmen />
      <SimilarProp />
    </div>
  );
}
