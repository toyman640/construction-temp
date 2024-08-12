import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

const TaskTable = () => (
  <div style={{ height: '300px', overflowY: 'auto' }}>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Task Name</th>
          <th>Sataus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td colSpan={2}>Lay Foundation</td>
          <td><Badge bg="success">completed</Badge></td>
        </tr>
        <tr>
          <td>2</td>
          <td colSpan={2}>Borehole</td>
          <td><Badge bg="success">completed</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Roofing</td>
          <td><Badge bg="warning">pending</Badge></td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default TaskTable;
