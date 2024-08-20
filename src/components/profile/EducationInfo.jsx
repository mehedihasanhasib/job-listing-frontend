/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";

import TextView from "./inputs/TextView";
import EditView from "./inputs/EditView";
import CardHeader from "./CardHeader";

const EducationInfo = () => {
  const educationData = [
    {
      degree: "Bachelor of Science",
      exam: "BSC",
      group: "CSE",
      year: "2024",
      cgpa: "3.94",
      scale: "4.00",
    },
    {
      degree: "Higher Secondery School",
      exam: "HSC",
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
          const { degree, exam, group, year, cgpa, scale } = education;
          return (
            <Card
              key={index}
              className="shadow-sm rounded border-0"
            >
              <CardHeader
                text={degree}
                editMode={editModes[index]}
                action={() => toggleEditMode(index)}
              />
              <Card.Body>
                <Row className="mb-4">
                  {!editModes[index] ? (
                    <>
                      <TextView
                        label="Degree"
                        value={degree}
                      />
                      <TextView
                        label="Exam"
                        value={exam}
                      />
                      <TextView
                        label="Group/Subject"
                        value={group}
                      />
                      <TextView
                        label="Year"
                        value={year}
                      />
                      <TextView
                        label="CGPA/GPA"
                        value={cgpa}
                      />
                      <TextView
                        label="Scale"
                        value={scale}
                      />
                    </>
                  ) : (
                    <>
                      <EditView
                        type="text"
                        label="Degree"
                        name="degree"
                        value={degree}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <EditView
                        type="text"
                        label="Exam"
                        name="exam"
                        value={exam}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <EditView
                        type="text"
                        label="Group/Subject"
                        name="group"
                        value={group}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <EditView
                        type="text"
                        label="Year"
                        name="year"
                        value={year}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <EditView
                        type="text"
                        label="CGPA/GPA"
                        name="cgpa"
                        value={cgpa}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <EditView
                        type="text"
                        label="Scale"
                        name="scale"
                        value={scale}
                        onChange={(e) => handleChange(e, index)}
                      />
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
