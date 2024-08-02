import { FaUniversity, FaCalendarAlt, FaGraduationCap, FaEdit } from "react-icons/fa";
import { Button, Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export const GetEducation = ({ degree, institute, year, cgpa }) => {
  return (
    <>
      <Col md={12}>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="text-primary m-0">{degree}</h6>
          <Button variant="link" size="sm" className="d-flex align-items-center">
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
};
