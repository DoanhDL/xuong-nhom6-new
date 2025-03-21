import { Routes, Route, Outlet } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import CategoryPage from "./components/CategoryPage";
import ListOrders from "./components/ListOrders";
import AddOrder from "./components/AddOrders";
import EditOrder from "./components/EditOrders";

function App() {
  return (
    <Routes>
      <Route path="admin" element={
        <LayoutAdmin>
          <Outlet />
        </LayoutAdmin>}>
        <Route path="category" element={<CategoryPage />} />
        <Route path="orders" element={<ListOrders />} />
        <Route path="orders/add" element={<AddOrder />} />
        <Route path="orders/edit/:id" element={<EditOrder />} />
      </Route>
    </Routes>
  );
}

export default App;


