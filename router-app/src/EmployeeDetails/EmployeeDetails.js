import Data from "./Data";

export default function EmployeeDetails() {
  const details = {
    employee1: {
      Id: 1,
      fName: "Sreenadh",
      lName: "Bathalakuri",
      role: "UX Developer",
    },
    employee2: {
      Id: 2,
      fName: "Sreenadh",
      lName: "Bathalakuri",
      role: "UX Developer",
    },
    employee3: {
      Id: 3,
      fName: "Sreenadh",
      lName: "Bathalakuri",
      role: "UX Developer",
    },
    employee4: {
      Id: 4,
      fName: "Sreenadh",
      lName: "Bathalakuri",
      role: "UX Developer",
    },
    employee5: {
      Id: 5,
      fName: "Venkat",
      lName: "Bathalakuri",
      role: "UX Developer",
    },
  };
  return (
    <>
      {/* <h1 className="mt-5">Employee Details</h1> */}
      <table className="mt-3 table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">EMP ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <Data singleEmpData={details.employee1} />
          <Data singleEmpData={details.employee2} />
          <Data singleEmpData={details.employee3} />
          <Data singleEmpData={details.employee4} />
          <Data singleEmpData={details.employee5} />
        </tbody>
      </table>
    </>
  );
}
