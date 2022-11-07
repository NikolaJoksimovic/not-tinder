import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // if there is Authorization you can acces onboarding and dashboard
  const authToken = cookies.authToken;

  useEffect(() => {
    setLoading(false);
  }, [cookies]);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            ></Home>
          }
        ></Route>
        {authToken && (
          <Route
            path='/dashboard'
            element={
              <Dashboard
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
              ></Dashboard>
            }
          ></Route>
        )}
        {authToken && (
          <Route
            path='/onboarding'
            element={
              <OnBoarding
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
              ></OnBoarding>
            }
          ></Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
