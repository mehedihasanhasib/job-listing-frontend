/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Text from "./Text";

const TextView = ({ label, value }) => (
  <Text label={label} value={value} />
);

const EditView = ({ label, name, value, onChange }) => (
  <Col md={6} className="mt-2">
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control id={name} name={name} value={value} onChange={onChange} />
    </Form.Group>
  </Col>
);

const PersonalInfo = () => {
  const userData = {
    firstName: "Mehedi Hasan",
    lastName: "Hasib",
    email: "hasib@gmail.com",
    phone: "01965046625",
  };

  const [user, setUser] = useState(userData);
  const [editMode, setEditMode] = useState(false);

  const { firstName, lastName, email, phone } = user;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <Card.Header className="bg-primary text-white border-0 d-flex align-items-center justify-content-between">
          <div>Personal Info</div>

          <Button
            variant="link"
            className="d-flex align-items-center gap-1"
            style={{ color: "white" }}
            onClick={toggleEditMode}
          >
            <FaEdit /> <span>{editMode ? "Save" : "Edit"}</span>
          </Button>
        </Card.Header>

        <Card.Body>
          <Row className="mb-4">
            {!editMode ? (
              <>
                <TextView label="First Name" value={firstName} />
                <TextView label="Last Name" value={lastName} />
                <TextView label="Email" value={email} />
                <TextView label="Phone" value={phone} />
              </>
            ) : (
              <>
                <EditView label="First Name" name="firstName" value={firstName} onChange={handleChange} />
                <EditView label="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                <EditView label="Email" name="email" value={email} onChange={handleChange} />
                <EditView label="Phone" name="phone" value={phone} onChange={handleChange} />
                <Col md={12} className="d-flex justify-content-end mt-4">
                  <Button onClick={toggleEditMode}>Update</Button>
                </Col>
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalInfo;
