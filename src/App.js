import "./App.css";
import Appupperpart from "../src/Appupperpart";
import Map from "./Map";
import AppMiddle from "../src/AppMiddle";

function App() {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div className="App">
      <Appupperpart></Appupperpart>
      <AppMiddle></AppMiddle>
      <div className="mapsection">
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
