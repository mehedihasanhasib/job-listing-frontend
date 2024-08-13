/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";

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

  const labelMap = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    fatherName: "Father Name",
    motherName: "Mother Name",
    dob: "Date of Birth",
    gender: "Gender",
    phone: "Phone",
  };

  const [user, setUser] = useState(userData);
  const [editMode, setEditMode] = useState(false);

  const { firstName, lastName, email, fatherName, motherName, dob, gender, phone } = user;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <CardHeader text={"Personal Info"} editMode={editMode} action={toggleEditMode} />

        <Card.Body>
          <Row className="mb-4">
            {!editMode ? (
              <>
                {Object.entries(user).map(([key, value]) => (
                  <TextView
                    key={uuidv4()}
                    label={labelMap[key]}
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
                  label="Father Name"
                  name="fatherName"
                  value={fatherName}
                  onChange={handleChange}
                />
                <EditView
                  label="Mother Name"
                  name="motherName"
                  value={motherName}
                  onChange={handleChange}
                />
                <EditView
                  label="Date of Birth"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                />
                <EditView
                  label="Gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                />
                <EditView
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalInfo;
