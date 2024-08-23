/* eslint-disable react/prop-types */
import { Form, Col } from "react-bootstrap";

const EditView = ({ type, label, name, value, onChange }) => {
  const genders = ["Male", "Female"];
  switch (type) {
    case "text":
      return (
        <Col
          md={6}
          className="mt-2"
        >
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      );
    case "email":
      return (
        <Col
          md={6}
          className="mt-2"
        >
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              type="email"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      );
    case "date":
      return (
        <Col
          md={6}
          className="mt-2"
        >
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              type="date"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      );
    case "select":
      return (
        <Col
          md={6}
          className="mt-2"
        >
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Select
              id={name}
              name={name}
              value={value}
              onChange={onChange}
            >
              {genders.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      );
    default:
      break;
  }
};

export default EditView;
