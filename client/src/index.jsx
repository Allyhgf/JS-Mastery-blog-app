import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, apllyMiddleware, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
