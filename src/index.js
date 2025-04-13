import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Receiver from "./Components/ReceiverDashboard";
import Donor from "./Components/DonorDashboard";

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
},
{
  path: "Receiver",
  element: <Receiver/>,
},
{
  path: "Donor",
  element: <Donor/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

