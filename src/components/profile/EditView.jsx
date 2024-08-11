/* eslint-disable react/prop-types */
import { Form, Col } from "react-bootstrap";

const EditView = ({ label, name, value, onChange }) => (
  <Col md={6} className="mt-2">
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control id={name} name={name} value={value} onChange={onChange} />
    </Form.Group>
  </Col>
);

export default EditView;
