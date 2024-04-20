import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";

import AddUser from "./Components/AddUser";
import UserListing from "./Components/UserListing";
import UpdateUser from "./Components/UpdateUser";
import NavBar from "./Components/Nav/NavBar";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<UserListing></UserListing>}></Route>
            <Route path="/user/add" element={<AddUser></AddUser>}></Route>
            <Route
              path="/user/edit/:code"
              element={<UpdateUser></UpdateUser>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
        ></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
