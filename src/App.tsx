import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import RoutesMain from "./RoutesMain";
import PrimarySearchAppBar from "./components/AppBar/AppBar";
import { fetchAuth } from "./redux/actions/UserAction";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") as any;
  useEffect(() => {
    if (token) {
      dispatch(fetchAuth(token) as any);
    }
  });
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <RoutesMain />
    </div>
  );
}

export default App;
