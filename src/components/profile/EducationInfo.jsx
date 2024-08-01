import { Row, Col, Card } from "react-bootstrap";
import { FaUniversity, FaCalendarAlt, FaGraduationCap, FaCertificate} from "react-icons/fa";

const EducationInfo = () => {
  return (
    <Col md={9}>
  <Card className="shadow-sm rounded border-0">
    <Card.Header className="bg-primary text-white border-0">
      Education Information
    </Card.Header>
    <Card.Body>
      <Row className="mb-4">
        
        <Col md={8}>
          <h6 className="text-primary">University Information</h6>
          <p>
            <FaUniversity className="me-2" />{" "}
            <strong>Example University</strong>
          </p>
          <p>
            <FaCalendarAlt className="me-2" /> <strong>Graduation: 2020</strong>
          </p>
          <p>
            <FaGraduationCap className="me-2" /> <strong>GPA: 3.8/4.0</strong>
          </p>
          <hr />
          <h6 className="text-primary">Certifications</h6>
          <p>
            <FaCertificate className="me-2" /> AWS Certified Developer
          </p>
          <p>
            <FaCertificate className="me-2" /> Google Cloud Professional Data Engineer
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="text-primary">Skills Acquired</h6>
          <p>
            During my education, I gained expertise in software development, 
            data structures, algorithms, and database management. I also 
            developed strong problem-solving and analytical skills through 
            various projects and coursework.
          </p>
        </Col>
      </Row>
    </Card.Body>
  </Card>
</Col>
  );
};

export default EducationInfo;
