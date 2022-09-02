import { Route, Routes, Navigate } from "react-router-dom";
import Countries from "./pages/Countries";
import Counrty from "./pages/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/countries" />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/:country" element={<Counrty />} />
    </Routes>
  );
}

export default App;
