/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";

const PersonalInfo = () => {
  const getUser = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getUser("https://dummyjson.com/users/1");
  }, []);
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
  const [editMode, setEditMode] = useState(false);

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
        <CardHeader
          text={"Personal Info"}
          editMode={editMode}
          action={toggleEditMode}
        />

        <Card.Body>
          <Row className="mb-4">
            {!editMode ? (
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

export default PersonalInfo;
