import { Routes, Route, Outlet } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import CategoryPage from "./components/Danhmuc/CategoryPage";
import FurnitureLanding from "./Client/Layout";
import ListOrders from "./components/Orders/ListOrders";
import AddOrders from "./components/Orders/AddOrders";
import EditOrders from "./components/Orders/EditOrders";


function App() {
  return (
    <Routes>
      <Route path="admin" element={<LayoutAdmin><Outlet /></LayoutAdmin>}>
        <Route path="category" element={<CategoryPage />} />
        <Route path="orders" element={<ListOrders />} />
        <Route path="orders/add" element={<AddOrders />} />
        <Route path="orders/edit/:id" element={<EditOrders />} />
      </Route>
      <Route path="home" element={<FurnitureLanding />} />
    </Routes>
  );
}

export default App;
