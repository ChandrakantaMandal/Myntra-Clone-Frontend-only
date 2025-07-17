import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Living from "./pages/Living.jsx";
import Beauty from "./pages/Beauty.jsx";
import Login from "./Auth/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path: "/bag",element: <Bag />},
      {path: "/Men",element: <Men />},
      {path: "/Women",element: <Women />},
      {path: "/Kids",element: <Kids />},
      {path: "/Living",element: <Living />},
      {path: "/Beauty",element: <Beauty/>},
      
    ],
  },
  {path: "/login", element: <Login /> }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
