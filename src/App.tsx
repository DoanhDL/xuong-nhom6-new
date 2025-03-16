import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./components/admin/loginAdmin"; // Đúng tên component
import Category from "./pages/category";
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Home Page</h1>} />
      <Route path="/components/admin/loginAdmin" element={<LoginAdmin />} />
      <Route path="/pages/category" element={<Category />} />
    </Routes>
  );
}

export default App;
