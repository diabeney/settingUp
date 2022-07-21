import React, { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contribute from "./Pages/Contribute";
import Error from "./Pages/Error";

const Articles = lazy(() =>
  Promise.all([
    import("./Pages/Articles"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    }),
  ]).then(([m]) => m)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <PuffLoader
        className="first-page"
        color={"hsl(127,95%,65%)"}
        size={"70px"}
      />
    }
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="Articles" element={<Articles />} />
        <Route path="Contribute" element={<Contribute />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
