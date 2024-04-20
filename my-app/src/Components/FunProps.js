let Details = (props) => {
  return (
    <div>
      <h5>Name : {props.name} </h5>
      <h5>Age : {props.age}</h5>
      {/* {props.children} */}
    </div>
  );
};

export default Details;
