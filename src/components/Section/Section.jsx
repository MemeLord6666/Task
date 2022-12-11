import Table from 'react-bootstrap/Table';

function SmallExample(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.lastName}</td>
          <td>{props.age}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;