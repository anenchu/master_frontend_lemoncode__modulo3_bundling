import "./mystyles.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
import { HelloComponent } from "./components/helloComponent";
import { Root } from "react-dom/client";

const root: Root = createRoot(document.getElementById("root"));
root.render(
    <HelloComponent />
);