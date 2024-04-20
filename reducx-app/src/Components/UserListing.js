import { connect } from "react-redux";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loaduser();
    // eslint-disable-next-line
  }, []);
  const handledelete = (code) => {
    if (window.confirm("Do you want to Remove?")) {
      props.removeUser(code);
      props.loaduser();
      toast.success("User Removed Successfully.");
    }
  };
  return props.user.loading ? (
    <div>
      <h2>Loading.....</h2>
    </div>
  ) : props.user.errMessage ? (
    <div>
      <h2>{props.user.errMessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card-header m-4">
        <Link to={"/user/add"} className="btn btn-success">
          Add User [+]
        </Link>
      </div>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">code</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.userList &&
            props.user.userList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.role}</td>
                <td>
                  <Link to={"edit/" + item.id} className="btn btn-primary mx-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handledelete(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeUser: (code) => dispatch(RemoveUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
