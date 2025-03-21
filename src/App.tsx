import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListOrders from "./components/ListOrders";
import AddOrders from "./components/AddOrders";
import EditOrders from "./components/EditOrders";

// Tạo instance của Query Client
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="orders">
            <Route index element={<ListOrders />} />
            <Route path="add" element={<AddOrders />} />
            <Route path="edit/:id" element={<EditOrders />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  )

}

export default App;
