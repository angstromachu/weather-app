import Home from "./Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
