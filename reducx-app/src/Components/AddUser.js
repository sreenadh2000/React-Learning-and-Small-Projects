import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("Staff");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userObj = { name, email, phone, role };

  const handlesubmit = (e) => {
    e.preventDefault();
    const userObj = { name, email, phone, role };
    dispatch(FunctionAddUser(userObj));

    navigate("/user");
  };
  return (
    <div className="card">
      <form onSubmit={handlesubmit}>
        <div className="card-header">
          <h2>Add User</h2>
        </div>
        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => nameChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => emailChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone</label>
              <input
                value={phone}
                onChange={(e) => phoneChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => roleChange(e.target.value)}
                className="form-control"
              >
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <Link className="btn btn-danger" to={"/user"}>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
