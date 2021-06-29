import React from 'react';
import { Row, Col } from 'reactstrap';

const Grid = () => {
  return (
    <Row>
      <Col className="border">
        <Row>
<Col md="5" className="border">
            1
          </Col>
          <Col md="6" className="border">
            2
          </Col>
          <Col md="1" className="border">
            3
          </Col>
        </Row>
      </Col>
      <Col className="border">
        <Row>
          <Col md="5" className="border">
            1
          </Col>
          <Col md="6" className="border">
            2
          </Col>
          <Col md="1" className="border">
            3
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Grid;
