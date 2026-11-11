import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Components/Main/FormwLogin/Login";
import SingUp from "../Pages/Home/Components/Main/FormwLogin/SingUp";
import Sabad from "../Pages/Home/Components/Main/DabadKhared/Sabad";
import Eror from "../Pages/Home/Components/Eror/ErorSite404";

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
  {
    path: "*",
    element: <Eror />,
  },
]);

export default router;
