import { Routes, Route, Outlet } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import LayoutAdmin from "./components/LayoutAdmin";
import ShopPage from "./components/products/list";
import AdminProductManagement from "./components/products/AdminProduct";
import { ProductProvider } from "./components/products/ProductContext";

function App() {
  return (
    <ProductProvider>  {/* Bọc tất cả các component trong ProductProvider */}
      <Routes>
        <Route path="admin" element={<LayoutAdmin><Outlet /></LayoutAdmin>}>
          <Route path="category" element={<CategoryPage />} />
          <Route path="products" element={<AdminProductManagement />} />
        </Route>
        <Route path="product" element={<ShopPage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
