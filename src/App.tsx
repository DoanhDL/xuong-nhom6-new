import { Routes, Route, Outlet } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import CategoryPage from "./components/CategoryPage";
import UserList from "./userlogin/Userlist";

function App() {
  return (
    <Routes>
      <Route path="admin" element={<LayoutAdmin><Outlet /></LayoutAdmin>}>
        <Route index element={<h2>Trang tổng quan</h2>} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="users" element={<UserList />} />
      </Route>
      <Route path="/" element={<h2>Trang chủ</h2>} />
    </Routes>
  );
}

export default App;
