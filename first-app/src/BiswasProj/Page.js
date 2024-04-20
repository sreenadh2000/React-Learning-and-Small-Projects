function Page(props) {
  const { titleText, descText } = props;

  return (
    <div className="block1">
      <h1>{titleText}</h1>
      <p>{descText}</p>
    </div>
  );
}

export default Page;
