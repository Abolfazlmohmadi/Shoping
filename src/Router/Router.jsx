import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Components/Main/FormwLogin/Login";
import SingUp from "../Pages/Home/Components/Main/FormwLogin/SingUp";
import Sabad from "../Pages/Home/Components/Main/DabadKhared/Sabad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
  {
    path: "/Sabad",
    element: <Sabad />,
  },
]);

export default router;
