/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import TextView from "./TextView";
import EditView from "./EditView";

const PersonalInfo = () => {
  const userData = {
    firstName: "Mehedi Hasan",
    lastName: "Hasib",
    email: "hasib@gmail.com",
    fatherName: "Abul Kalam Azad",
    motherName: "Masuda Begum",
    dob: "05 Dec 1998",
    gender: "Male",
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
            className="d-flex align-items-center gap-1"
            style={{ color: "white" }}
            onClick={toggleEditMode}
          >
            {/* <FaEdit /> */}
            <span>{editMode ? "Save" : "Edit"}</span>
          </Button>
        </Card.Header>

        <Card.Body>
          <Row className="mb-4">
            {!editMode ? (
              <>
                {Object.entries(user).map(([key, value]) => (
                <TextView
                  key={key}
                  label={key}
                  value={value}
                />
                ))}
              </>
            ) : (
              <>
                <EditView
                  label="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <EditView
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                <EditView
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <EditView
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                <Col
                  md={12}
                  className="d-flex justify-content-end mt-4"
                >
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
