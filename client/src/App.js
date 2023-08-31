import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Books } from "./pages/Books";
import { Add } from "./pages/Add";
import { Update } from "./pages/Update";

import "./style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
  {
    path: "/update",
    element: <Update/>,
  },
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
