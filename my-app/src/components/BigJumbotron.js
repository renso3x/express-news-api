import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const BigJumbotron = () => {
  return (
    <Row>
      <Col xs="12">
        <div>
          <Jumbotron className="lead">
            <h1>News Room</h1>
          </Jumbotron>
        </div>
      </Col>
    </Row>
  );
}

export default BigJumbotron