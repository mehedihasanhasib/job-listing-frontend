import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import CardHeader from "./CardHeader";
import TextView from "../Inputs/TextView";
import EditView from "../Inputs/EditView";
import { trainingConfig } from "../../../utils/inputConfig";

const Training = () => {
    const trainingData = [
        {
            trainingTitle: "Training 1",
            institute: "DYD",
            startDate: "2022-01-01",
            endDate: "2022-01-31",
            topic: "Databse Maganement",
            location: "Online"
        },
        {
            trainingTitle: "Training 2",
            institute: "DYD",
            startDate: "2022-01-01",
            endDate: "2022-01-31",
            topic: "Databse Maganement",
            location: "Online"
        },
    ]

    const [trainings, setTrainings] = useState(trainingData);
    const [editModes, setEditModes] = useState(trainingData.map(() => false));

    const toggleEditMode = (index) => {
        setEditModes((prevEditModes) => {
            prevEditModes[index] = !prevEditModes[index];
            return [...prevEditModes];
        });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setTrainings((prev) => {
          prev[index][name] = value;
          return [...prev];
        });
      };

    return (
        <Col md={9}>
            {trainings.map((training, index) => {
                return (
                    <Card
                        key={index}
                        className="shadow-sm rounded border-0"
                    >
                        <CardHeader
                            text={"Training" + " " +(parseInt(index) + 1)}
                            editMode={editModes[index]}
                            action={() => toggleEditMode(index)}
                        />
                        <Card.Body>
                            <Row className="mb-4">
                                {!editModes[index] ? (
                                    <>
                                        {Object.entries(training).map(([key, value], ind) => (
                                            <TextView
                                                key={ind}
                                                label={trainingConfig[key].label}
                                                value={value}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {Object.entries(training).map(([key, value], ind) => (
                                            <EditView
                                                key={ind}
                                                type={trainingConfig[key].type}
                                                label={trainingConfig[key].label}
                                                name={key}
                                                value={value}
                                                onChange={(e) => handleChange(e, index)}
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
    )
}

export default Training;