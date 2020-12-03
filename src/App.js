import "../src/css/App.css";
import Appupperpart from "../src/Appupperpart";
// import Map from "./Map";
import AppMiddle from "../src/AppMiddle";
import Map1 from "../src/Map1";
function App() {
  return (
    <div className="App">
      <Appupperpart></Appupperpart>
      <AppMiddle></AppMiddle>
      <div className="mapsection">
        {/* <Map></Map> */}
        <Map1></Map1>
      </div>
    </div>
  );
}

export default App;
