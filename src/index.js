import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "leaflet/dist/leaflet.css";
import reducer, { initialState } from "./components/reducer";
import  {StateProvider} from './components/StateProvider'
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <CookiesProvider>
                <App />
            </CookiesProvider>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
