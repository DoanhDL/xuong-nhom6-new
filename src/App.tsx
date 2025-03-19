import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/LayoutAdmin";
import CategoryPage from "./components/CategoryPage";
import LayoutAdmin from "./components/LayoutAdmin";



function App() {
  return (
    <Routes>
      <Route path="admin" element={<LayoutAdmin>
        <Outlet/>
      </LayoutAdmin>}>
      <Route index element={<CategoryPage/>}/>
      </Route>

    </Routes>
  );
}

export default App;