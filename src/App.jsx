import { Routes, Route } from "react-router-dom";
import StartHere from "./pages/StartHere";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Api from "./pages/Api";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartHere />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
