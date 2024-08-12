import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const FirstSection = () => (
  <Container>
    <Row>
      <Col>
        <Card
          bg="Info"
          className="mr-2"
        >
          <Card.Body className="CardContent">
            <EngineeringIcon />
            <Card.Text>
              Project
              Crestview Towers
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Project Name</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card
          bg="Info"
          className="mr-2"
        >
          <Card.Body className="CardContent">
            <RequestQuoteIcon />
            <Card.Text>
              80,000
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Budget</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card
          bg="Info"
          className="mr-2"
        >
          <Card.Body className="CardContent">
            <PriceCheckIcon />
            <Card.Text>
              80,000
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Amount Spent</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card
          bg="Info"
          className="mr-2"
        >
          <Card.Body className="CardContent">
            <PriceChangeIcon />
            <Card.Text>
              80,000
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Balance</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default FirstSection;
