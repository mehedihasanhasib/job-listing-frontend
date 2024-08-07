import { Form, Col } from "react-bootstrap";

const Edit = ({label, value}) => {
  return (
    <Col md={6} className="mt-2">
      <Form>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control value={value} />
        </Form.Group>
      </Form>
    </Col>
  );
};

export default Edit;
