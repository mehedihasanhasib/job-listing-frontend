/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";

const EducationInfo = () => {
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
  const inputTypes = {
    firstName: "text",
    lastName: "text",
    email: "email",
    fatherName: "text",
    motherName: "text",
    dob: "text",
    gender: "select",
    phone: "text",
  };

  const genders = ["Male", "Female"];

  const [user, setUser] = useState(userData);
  const [editAcdemic1, setAcademic1] = useState(false);
  const [editAcdemic2, setAcademic2] = useState(false);
  

  const toggleeditAcdemic1 = () => {
    setAcademic1(!editAcdemic1);
  };
  const toggleeditAcdemic2 = () => {
    setAcademic2(!editAcdemic2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <CardHeader
          text={"Academic 1"}
          editMode={editAcdemic1}
          action={toggleeditAcdemic1}
        />

        <Card.Body>
          <Row className="mb-4">
            {!editAcdemic1 ? (
              <>
                {Object.entries(user).map(([key, value]) => (
                  <TextView
                    key={uuidv4()}
                    label={labelMap[key]}
                    name={key}
                    value={value}
                  />
                ))}
              </>
            ) : (
              <>
                {Object.entries(user).map(([key, value], index) => (
                  <EditView
                    key={index}
                    type={inputTypes[key]}
                    label={labelMap[key]}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    genders={genders}
                  />
                ))}
              </>
            )}
          </Row>
        </Card.Body>
      </Card>

      {/* academic 2 starts here */}
      <Card className="shadow-sm rounded border-0">
        <CardHeader
          text={"Academic 2"}
          editMode={editAcdemic2}
          action={toggleeditAcdemic2}
        />
        <Card.Body>
          <Row className="mb-4">
            {!editAcdemic2 ? (
              <>
                {Object.entries(user).map(([key, value]) => (
                  <TextView
                    key={uuidv4()}
                    label={labelMap[key]}
                    name={key}
                    value={value}
                  />
                ))}
              </>
            ) : (
              <>
                {Object.entries(user).map(([key, value], index) => (
                  <EditView
                    key={index}
                    type={inputTypes[key]}
                    label={labelMap[key]}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    genders={genders}
                  />
                ))}
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EducationInfo;
