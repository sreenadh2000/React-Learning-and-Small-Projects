export default function Child(props) {
  const { name, age } = props;
  return (
    <>
      <p>
        {name} and age is {age}
      </p>
      <p>
        {props.role} and Salary is {props.salary}
      </p>
    </>
  );
}
