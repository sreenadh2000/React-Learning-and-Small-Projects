import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import ContactUS from "./ContactUs/ContactUs";
import SalaryCalc from "./SalaryCalculation/SalaryCalc";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import UserListing from "./UseDetails/UserListing";
import AddUser from "./UseDetails/AddUser";
import UpdateUser from "./UseDetails/UpdateUser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
const router = createBrowserRouter([
  {
    path: "/",
    // Component: Home,
    element: <App />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/ContactUs",
        element: <ContactUS />,
      },
      {
        path: "/EmployeeDetails",
        element: <EmployeeDetails />,
      },
      {
        path: "/Salary",
        element: <SalaryCalc />,
      },
      {
        path: "/user",
        element: <UserListing />,
      },
      {
        path: "/user/add",
        element: <AddUser />,
      },
      {
        path: "/user/edit/:code",
        element: <UpdateUser />,
      },
    ],
  },
]);
function Main() {
  return (
    <Provider store={Store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}
function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <RouterProvider router={router} />
    // </div>

    <div className="App">
      <NavBar />
      <Outlet />
      <ToastContainer
        className="toast-position"
        position="bottom-right"
      ></ToastContainer>
    </div>
  );
}

export default Main;

///////////////////////////////////////////////////////////
////////////////// Routing Paths //////////////////////////
///////////////////////////////////////////////////////////

// {
//   path: "/ContactUs",
//   element: <ContactUS />,
// },
// {
//   path: "/EmployeeDetails",
//   element: <EmployeeDetails />,
// },
// {
//   path: "/Salary",
//   element: <SalaryCalc />,
// },
