import React from 'react';
import { Row, Col } from 'reactstrap';

const Grid = (props) => {
  return (
    <Row>
      <Col className="border">
        <Row>
          <Col className="border">1</Col>
          <Col className="border">2</Col>
        </Row>
      </Col>
      <Col className="border">
        <Row>
          <Col className="border">&nbsp;</Col>
          <Col className="border">&nbsp;</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Grid;