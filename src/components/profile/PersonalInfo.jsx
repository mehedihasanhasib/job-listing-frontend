/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";
import { personalConfig } from "../../config/inputConfig";

const PersonalInfo = () => {
  const userData = {
    firstName: "Mehedi Hasan",
    lastName: "Hasib",
    email: "hasib@gmail.com",
    fatherName: "Abul Kalam Azad",
    motherName: "Masuda Begum",
    dob: "1998-12-05",
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
                {Object.entries(user).map(([key, value], index) => {
                  return (
                    <TextView
                      key={index}
                      label={personalConfig[key].label}
                      value={value}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {Object.entries(user).map(([key, value], index) => (
                  <EditView
                    key={index}
                    type={personalConfig[key].type}
                    label={personalConfig[key].label}
                    name={key}
                    value={value}
                    onChange={handleChange}
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
