import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
  const [id, idChange] = useState(0);
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("Staff");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userObj = useSelector((state) => state.user.userObj);

  const handlesubmit = (e) => {
    e.preventDefault();
    const userObj = { id, name, email, phone, role };
    dispatch(FunctionUpdateUser(userObj, id));
    // console.log(userObj);
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userObj) {
      idChange(userObj.id);
      nameChange(userObj.name);
      emailChange(userObj.email);
      phoneChange(userObj.phone);
      roleChange(userObj.role);
    }
  }, [userObj]);
  return (
    <div
      className="card mt-4 w-75 mx-auto"
      style={{ textAlign: "left", fontSize: "20px" }}
    >
      <form onSubmit={handlesubmit}>
        <div
          className="card-header"
          style={{ height: "50px", textAlign: "center" }}
        >
          Edit User
        </div>
        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Id</label>
              <input
                value={id || ""}
                disabled="disabled"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input
                value={name || ""}
                onChange={(e) => nameChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input
                value={email || ""}
                onChange={(e) => emailChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone</label>
              <input
                value={phone || ""}
                onChange={(e) => phoneChange(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select
                value={role || ""}
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
          <button className="btn btn-primary mx-2" type="submit">
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

export default UpdateUser;
