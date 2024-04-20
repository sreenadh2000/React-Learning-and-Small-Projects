export default function ChildCards(props) {
  const { CardData } = props;
  return (
    <div className="card m-4 shadow p-3 mb-5 bg-body-tertiary rounded bg-info-subtle">
      <img src={CardData.ImgUrl} className="card-img-top h-25" alt="History" />
      <div className="card-body">
        <h5 className="card-title">{CardData.CardTitle}</h5>
        <p className="card-text">{CardData.CardText}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}
