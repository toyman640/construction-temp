import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressChart from './ProgrssChart';
import TaskTable from './TaskTable';

const SecondSection = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Card.Title>Project Progress</Card.Title>
              <ProgressChart />
            </Row>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body>
            <Row>
              <Card.Title>Project Progress</Card.Title>
              <ProgressChart />
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Card.Title>Project Task(s)</Card.Title>
              <TaskTable />
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SecondSection;
