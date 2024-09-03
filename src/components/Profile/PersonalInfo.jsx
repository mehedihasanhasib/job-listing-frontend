/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Col, Card, Spinner } from "react-bootstrap";

import TextView from "../Inputs/TextView";
import EditView from "../Inputs/EditView";
import CardHeader from "./CardHeader";
import { personalConfig } from "../../../utils/inputConfig";
import { apiEndPoint } from "../../../utils/apiEndPoint";
import Buttons from "../Buttons";

const PersonalInfo = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    fetch(`${apiEndPoint}/profile/personal/1`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setInitialData(data);
        setLoading(false);
      });
  }, []);

  const toggleEditMode = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const closeEdit = ()=>{
    setUser(initialData)
    setEditMode(false);
  }

  const updateUserData = () =>{
    setEditMode(false);
  }

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        {loading ? (
          <div
            className="d-flex justify-content-center h-100"
            style={{ padding: "12% 0" }}
          >
            <Spinner
              animation="border"
              variant="primary"
            />
          </div>
        ) : (
          <>
            <CardHeader
              text={"Personal Info"}
              editMode={editMode}
              action={toggleEditMode}
            />
            <Card.Body>
              <form className="mb-4 row">
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
                    <Buttons close={closeEdit} update={updateUserData}/>
                  </>
                )}
              </form>
            </Card.Body>
          </>
        )}
      </Card>
    </Col>
  );
};

export default PersonalInfo;
