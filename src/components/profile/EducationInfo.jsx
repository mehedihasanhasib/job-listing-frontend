
import { Row, Col, Card } from "react-bootstrap";

const EducationInfo = () => {

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <Card.Header className="bg-primary text-white border-0">Education Information</Card.Header>
        <Card.Body>
          <Row className="mb-4">
            {/* <GetEducation degree="BSC" institute="National University" year="2020" cgpa="3.84/4.00" /> */}
           
              education
            
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EducationInfo;
