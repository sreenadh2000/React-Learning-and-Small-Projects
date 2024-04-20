const details = [
  { id: 1, name: "sreenadh", age: 23, role: "ASE" },
  { id: 2, name: "Venkat", age: 25, role: "Developer" },
  { id: 3, name: "Jagadish", age: 20, role: "Tester" },
];
const DetailsMap = details.map((details) => {
  return (
    <li key={details.id}>
      Hi i am {details.name} and my age is {details.age} my skills are{" "}
      {details.role}{" "}
    </li>
  );
});
export default function ListRender(props) {
  const { salary } = props;

  // return (
  //   <ol>
  //     {details.map((details) => {
  //       return <li>{details}</li>;
  //     })}
  //   </ol>
  // );
  return (
    <ul>
      {DetailsMap} and Salary is {salary}
    </ul>
  );
}
