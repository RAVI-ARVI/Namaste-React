// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

const h1 = React.createElement("h1", { id: "key" }, "Heading 1");

const h2 = React.createElement("h2", { id: "key" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
