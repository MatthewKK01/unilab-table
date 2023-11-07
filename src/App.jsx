import { Routes, Route } from "react-router-dom";
import StartHere from "./pages/StartHere";
import Login from "./pages/Login";

import Form from "./pages/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartHere />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
