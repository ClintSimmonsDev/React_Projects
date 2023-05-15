import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileFolder from './FileFolder';
import RightBar from './RightBar';
import SampleShop from './SampleShop';

function MainContent(props) {
  const { paintings } = props;
  return (
    <Container fluid="lg" id="main-content" class=".w-100" >
      <Row>
        <Col lg={9}>
         <FileFolder />
          <Row>
          <Col lg={12}>
            <SampleShop paintings = {paintings}/>
          </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <RightBar />
        </Col>

      </Row>
    </Container>
  );
}

export default MainContent;