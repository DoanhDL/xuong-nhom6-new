import { useRoutes } from "react-router-dom";
import "./App.css";
import List from "./components/list";

function App() {
  {
    /* Viết router ở đây như ví dụ bên dưới */
  }
  const routes = useRoutes([{ path: "/books", element: <List /> }]);
  return routes;

}

export default App;
