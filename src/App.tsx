import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/LayoutAdmin";
import CategoryPage from "./components/Danhmuc/CategoryPage";
import LayoutAdmin from "./components/LayoutAdmin";
import FurnitureLanding from "./Client/Layout";




function App() {
  return (
    <Routes> 
      <Route path="admin" element={<LayoutAdmin>
        <Outlet/>
      </LayoutAdmin>}>
      <Route path="category" element={<CategoryPage/>}/>
      
      </Route>
      <Route path="home" element={<FurnitureLanding/>}/>

    </Routes>
  );
}

export default App;