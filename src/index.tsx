import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getLoader } from "./stores";
import { STORES } from "./constant/localStorageKey";

const loader = getLoader(STORES)
const stores = loader.loadFromLocalStore()
ReactDOM.render(<App stores={stores} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register()
