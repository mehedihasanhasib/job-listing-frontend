/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";
import { educationConfig } from "../../config/inputConfig";

const EducationInfo = () => {
  const educationData = [
    {
      degree: "Bachelor of Science",
      exam: "BSC",
      institution: "University of Technology",
      group: "CSE",
      year: "2024",
      cgpa: "3.94",
      scale: "4.00",
    },
    {
      degree: "Higher Secondery School",
      exam: "HSC",
      institution: "Dhaka College",
      group: "Science",
      year: "2020",
      cgpa: "4.88",
      scale: "5.00",
    },
  ];

  const [educations, setEducations] = useState(educationData);
  const [editModes, setEditModes] = useState(educationData.map(() => false));

  const toggleEditMode = (index) => {
    setEditModes((prevEditModes) => {
      prevEditModes[index] = !prevEditModes[index];
      return [...prevEditModes];
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducations((prev) => {
      prev[index][name] = value;
      return [...prev];
    });
  };

  return (
    <>
      <Col md={9}>
        {educations.map((education, index) => {
          return (
            <Card
              key={index}
              className="shadow-sm rounded border-0"
            >
              <CardHeader
                text={education.degree}
                editMode={editModes[index]}
                action={() => toggleEditMode(index)}
              />
              <Card.Body>
                <Row className="mb-4">
                  {!editModes[index] ? (
                    <>
                      {Object.entries(education).map(([key, value], ind) => (
                        <TextView
                          key={ind}
                          label={educationConfig[key].label}
                          value={value}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {Object.entries(education).map(([key, value], ind) => (
                        <EditView
                          key={ind}
                          type={educationConfig[key].type}
                          label={educationConfig[key].label}
                          name={key}
                          value={value}
                          onChange={(e)=> handleChange(e, index)}
                        />
                      ))}
                    </>
                  )}
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </>
  );
};

export default EducationInfo;
