/* eslint-disable react/prop-types */
import { Form, Col } from "react-bootstrap";

const Edit = ({label, value, handleChange}) => {
 
  return (
    <Col md={6} className="mt-2">
      <Form>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control value={value} onChange={handleChange} />
        </Form.Group>
      </Form>
    </Col>
  );
};

export default Edit;
