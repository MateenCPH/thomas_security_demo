import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import './index.css'
import App from "./App.jsx";
import Error404NotFound from "./pages/Error404NotFound.jsx";
import ErrorProvoker from "./pages/ErrorProvoker.jsx";

const ErrorPage = () => {
  return (
    <div>
      <h1>500 Internal Server Error</h1>
      <p>Sorry, the application encountered an error</p>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="about" element={<h1>About</h1>} />
      <Route path="error" element={<ErrorProvoker />} errorElement={<ErrorPage />} />
      <Route path="*" element={<Error404NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
