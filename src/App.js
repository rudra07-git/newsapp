import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apikey = '0e8b0d16c4ed43ebac1ac28362f48254'
  let [progress, setting] = useState(0);
  const setProgress = (progress) => {
    setting(progress);
  };

  return (
    <div>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="general"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="business"
              category={"business"}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="entertainment"
              category={"entertainment"}
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="general"
              category={"general"}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="health"
              category={"health"}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="science"
              category={"science"}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="sports"
              category={"sports"}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="technology"
              category={"technology"}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              key="science"
              category="science"
            />
          }
        />
      </Routes>
    </div>
  );

}
export default App;