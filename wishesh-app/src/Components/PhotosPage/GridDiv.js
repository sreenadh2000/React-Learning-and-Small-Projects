export default function GridDiv({ Pic, Name }) {
  return (
    <div className={`card ${Name}`}>
      <img src={Pic} alt="Avatar" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
      </div>
    </div>
  );
}
