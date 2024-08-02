import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaEdit,
} from "react-icons/fa";

const EducationInfo = () => {
  const [input, setInput] = useState(true);
  function getEducation(degree, institute, year, cgpa) {
    return (
      <>
        <Col md={12}>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="text-primary m-0">{degree}</h6>
            <Button
              variant="link"
              size="sm"
              className="d-flex align-items-center"
            >
              <FaEdit /> Edit
            </Button>
          </div>
          <p>
            <FaUniversity className="me-2" />
            <strong>{institute}</strong>
          </p>
          <p>
            <FaCalendarAlt className="me-2" />
            <strong>Year: {year}</strong>
          </p>
          <p>
            <FaGraduationCap className="me-2" /> <strong>GPA: {cgpa}</strong>
          </p>
          <hr />
        </Col>
      </>
    );
  }
  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <Card.Header className="bg-primary text-white border-0">
          Education Information
        </Card.Header>
        <Card.Body>
          <Row className="mb-4">
            {getEducation("BSC", "National University", "2020", "3.84/4.00")}
          </Row>
          {/* <Row>
        <Col>
          <h6 className="text-primary">Skills Acquired</h6>
          <p>
            During my education, I gained expertise in software development, 
            data structures, algorithms, and database management. I also 
            developed strong problem-solving and analytical skills through 
            various projects and coursework.
          </p>
        </Col>
      </Row> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EducationInfo;
