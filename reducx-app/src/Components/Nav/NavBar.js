import { Link } from "react-router-dom";
import Home from "../Home";
import UserListing from "../UserListing";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="text-white" to={"/"}>
        Home
      </Link>
      <Link className="text-white" to={"/user"}>
        User
      </Link>
    </nav>
  );
};
export default NavBar;
