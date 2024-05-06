import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllRoutes />} />
      </Routes>
    </>
  );
}

export default App;
