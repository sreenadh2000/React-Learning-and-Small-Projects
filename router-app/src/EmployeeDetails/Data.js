export default function Data(params) {
  const { singleEmpData } = params;
  return (
    <tr>
      <th scope="row">{singleEmpData.Id}</th>
      <td>{singleEmpData.fName}</td>
      <td>{singleEmpData.lName}</td>
      <td>{singleEmpData.role}</td>
    </tr>
  );
}
