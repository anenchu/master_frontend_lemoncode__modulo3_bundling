import "./mystyles.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
import { HelloComponent } from "./components/helloComponent";
import { Root } from "react-dom/client";

console.log(`Api base: ${process.env.API_BASE}`);

const root: Root = createRoot(document.getElementById("root"));
root.render(
    <HelloComponent />
);