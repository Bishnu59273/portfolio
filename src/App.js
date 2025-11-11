import { AppRoutes } from "./Route";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./plugins/custom_css/main.css";
import "./plugins/custom_css/responsive.css";
import AddBootstrap from "./AddBootstrap";
import React from "react";

function App() {
  return (
    <>
      <AddBootstrap />
      <AppRoutes />
    </>
  );
}

export default App;
