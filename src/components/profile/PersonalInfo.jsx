import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Spinner, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Text from "./Text";
import Edit from "./Edit";

const PersonalInfo = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...user, ...data });
        setIsLoading(true);
      });
  }, []);

  const {firstName, lastName, email, phone} = user;

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <Card.Header className="bg-primary text-white border-0 d-flex align-items-center justify-content-between">
          <div>Personal Info</div>
          <Button
            variant="link"
            className="d-flex align-items-center gap-1"
            style={{ color: "white" }}
            onClick={toggleEdit}
          >
            <FaEdit /> <span>Edit</span>
          </Button>
        </Card.Header>

        <Card.Body>
          <Row className="mb-4">
            {isLoading ? (
              !edit ? (
                <>
                  <Text
                    label={"First Name"}
                    value={firstName}
                  />
                  <Text
                    label={"Last Name"}
                    value={lastName}
                  />
                  <Text
                    label={"Email"}
                    value={email}
                  />
                  <Text
                    label={"Phone"}
                    value={phone}
                  />
                  
                </>
              ) : (
                <>
                  <Edit
                    label={"First name"}
                    value={firstName}
                  />
                  <Edit
                    label={"Laste name"}
                    value={lastName}
                  />
                  <Edit
                    label={"Email"}
                    value={email}
                  />
                  <Edit
                    label={"Phone"}
                    value={phone}
                  />
                  <Col md={12} className="d-flex justify-content-end mt-4">
                    <Button>Update</Button>
                  </Col>
                </>
              )
            ) : (
              <>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <Spinner variant="primary" />
                </div>
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalInfo;
