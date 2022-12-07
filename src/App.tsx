import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./view/landing";
import NoPage from "./view/nopage/index";

const Login = React.lazy(() => import("./view/authentication/login/index"));
// TODO: Other pages will be define as a Lazy React Component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<div>...</div>}>
            <Login />
          </React.Suspense>
        }
      />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
