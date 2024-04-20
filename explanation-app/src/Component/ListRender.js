import { Component } from "react";

const NameList = [
  { id: 1, name: "Sreenadh", age: 23 },
  { id: 2, name: "Anil", age: 25 },
  { id: 3, name: "Yogesh", age: 34 },
];

const Names = NameList.map((Name, index) => {
  return (
    <tr key={index}>
      <td>{Name.name}</td>
      <td>{Name.age}</td>
    </tr>
  );
});

class ListRender extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>{Names}</tbody>
        </table>
      </div>
    );
  }
}
export default ListRender;
