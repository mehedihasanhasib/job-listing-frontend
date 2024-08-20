/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

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

  

  const [user, setUser] = useState(userData);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const {firstName, lastName, email, fatherName, motherName, dob, gender, phone} = user;
  
  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <CardHeader
          text={"Personal Info"}
          editMode={editMode}
          action={toggleEditMode}
        />

        <Card.Body>
          <Row className="mb-4">
            {!editMode ? (
              <>
                <TextView label="First Name" value={firstName}/>
                <TextView label="Last Name" value={lastName}/>
                <TextView label="Email" value={email}/>
                <TextView label="Father Name" value={fatherName}/>
                <TextView label="Mother Name" value={motherName}/>
                <TextView label="Date of Birth" value={dob}/>
                <TextView label="Gender" value={gender}/>
                <TextView label="phone" value={phone}/>
              </>
            ) : (
              <>
                <EditView type="text" label="First Name" name="firstName" value={firstName} onChange={handleChange} />
                <EditView type="text" label="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                <EditView type="email" label="Email" name="email" value={email} onChange={handleChange} />
                <EditView type="text" label="Father Name" name="fatherName" value={fatherName} onChange={handleChange} />
                <EditView type="text" label="Mother Name" name="motherName" value={motherName} onChange={handleChange} />
                <EditView type="text" label="Date of Birth" name="dob" value={dob} onChange={handleChange} />
                <EditView type="select" label="Gender" name="gender" value={gender} onChange={handleChange} />
                <EditView type="text" label="Phone" name="phone" value={phone} onChange={handleChange} />
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalInfo;
