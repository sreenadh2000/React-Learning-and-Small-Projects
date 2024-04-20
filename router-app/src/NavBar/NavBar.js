import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row bg-dark-subtle py-3 px-4">
      {/* <a
        class="flex-sm-fill text-sm-center nav-link active "
        aria-current="page"
        href="#"
      >
        Active
      </a>
      <a class="flex-sm-fill text-sm-center nav-link" href="#">
        Longer nav link
      </a>
      <a class="flex-sm-fill text-sm-center nav-link" href="#">
        Link
      </a>
      <a class="flex-sm-fill text-sm-center nav-link ">Disabled</a> */}
      <NavLink
        className="flex-sm-fill text-sm-center nav-link "
        to="/"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="flex-sm-fill text-sm-center nav-link "
        to="/Salary"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Salary Details
      </NavLink>
      <NavLink
        className="flex-sm-fill text-sm-center nav-link "
        to="/EmployeeDetails"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Employee Details
      </NavLink>
      <NavLink
        className="flex-sm-fill text-sm-center nav-link "
        to="/ContactUs"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        About Us
      </NavLink>
      <NavLink
        className="flex-sm-fill text-sm-center nav-link "
        to={"/user"}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        User
      </NavLink>
    </nav>
  );
}

//////////////////////////////////////////////////
/////////////////// Replasable code //////////////
//////////////////////////////////////////////////

//"--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);"
// // <nav class="navbar" style={{ backgroundColor: "#e3f2fd" }}>
// <ul className="fs-5 mx-3 nav nav-underline">
//   <li className="px-5 nav-item">
//     <a className="nav-link" aria-current="page" href="/">
//       Home
//     </a>
//   </li>
//   <li className="px-5 nav-item">
//     <a className="nav-link" href="/Salary">
//       Salary Details
//     </a>
//   </li>
//   <li className="px-5 nav-item">
//     <a className="nav-link" href="/EmployeeDetails">
//       Employee Details
//     </a>
//   </li>
//   <li className="px-5 nav-item">
//     <a className="nav-link" href="/ContactUs">
//       About Us
//     </a>
//     {/* <NavLink
//       to="/ContactUs"
//       style={({ isActive, isPending }) => {
//         return {
//           fontWeight: isActive ? "bold" : "",
//           color: isPending ? "red" : "black",
//         };
//       }}
//     >
//       Messages
//     </NavLink> */}
//   </li>
// </ul>
// // </nav>
