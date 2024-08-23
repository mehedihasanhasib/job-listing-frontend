import { Card, Col, Row } from "react-bootstrap";
import { useState } from "react";

import CardHeader from "./CardHeader";
import TextView from "../Inputs/TextView";
import EditView from "../Inputs/EditView";
import { employmentConfig } from "../../../utils/inputConfig";

export default function Employment() {
  const employmentData = [
    {
      companyName: "Google",
      companyLocation: "Dhaka, Bangladesh",
      designation: "Frontend Developer",
      from: "2023-01-01",
      to: "2024-01-01",
      responsibilities: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, unde!",
    },
  ];

  const [employments, setEmployments] = useState(employmentData);
  const [editModes, setEditModes] = useState(employmentData.map(() => false));
  console.log(employments);

  const toggleEditMode = (index) => {
    setEditModes((prevEditModes) => {
      prevEditModes[index] = !prevEditModes[index];
      return [...prevEditModes];
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEmployments((prev) => {
      prev[index][name] = value;
      return [...prev];
    });
  };

  return (
    <Col md={9}>
      {employments.map((employment, index) => {
        return (
          <Card key={index} className="shadow-sm rounded border-0">
            <CardHeader text={"Employment" + " " + (parseInt(index) + 1)} editMode={editModes[index]} action={() => toggleEditMode(index)} />
            <Card.Body>
              <Row className="mb-4">
                {!editModes[index] ? (
                  <>
                    {Object.entries(employment).map(([key, value], ind) => (
                      <TextView key={ind} label={employmentConfig[key].label} value={value} />
                    ))}
                  </>
                ) : (
                  <>
                    {Object.entries(employment).map(([key, value], ind) => (
                      <EditView key={ind} type={employmentConfig[key].type} label={employmentConfig[key].label} name={key} value={value} onChange={(e) => handleChange(e, index)} />
                    ))}
                  </>
                )}
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
}
