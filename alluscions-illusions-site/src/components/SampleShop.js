import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SampleShop(props) {
  const { paintings } = props;
  return (
    <div id="sample-shop">
      <Container fluid="sm" className="thumbs-div">
        <h4 id="thumbs-header">
        ~ Shop for prints and originals ~
        </h4>
        <Row className='thumbs-row'>
            <Col md={2}>
              <img className="painting-thumb"src='./images/Ent.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260494.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260498.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260503.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260505.jpg' alt='painting' />
            </Col>
        </Row>
        <Row className='thumbs-row'>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260508.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260512.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/PA080586.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260514.jpg' alt='painting' />
            </Col>
            <Col md={2}>
              <img className="painting-thumb"src='./images/P9260517.jpg' alt='painting' />
            </Col>
        </Row>
    </Container>
    </div>
    
  );
};

export default SampleShop;