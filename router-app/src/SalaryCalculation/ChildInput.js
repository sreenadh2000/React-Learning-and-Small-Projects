export default function ChildInput(props) {
  const { lbName, name, eventHandled } = props;
  return (
    <div className="input-group input-group-lg Inside pb-3">
      <span
        className="w-25 bg-dark-subtle input-group-text fs-5"
        id="inputGroup-sizing-lg"
      >
        {lbName}
      </span>
      <input
        ref={props.Ref}
        value={name}
        onChange={eventHandled}
        type="number"
        className="form-control "
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
}
