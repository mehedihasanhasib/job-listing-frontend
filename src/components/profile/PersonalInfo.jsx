import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const PersonalInfo = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser({...user, ...data});
        setIsLoading(true);
      });
  }, []);
  return (
    <Col md={9}>
      <Card className="shadow-sm rounded border-0">
        <Card.Header className="bg-primary text-white border-0 d-flex align-items-center justify-content-between">
          <div>Personal Info</div>
          <Button
            variant="link"
            className="d-flex align-items-center gap-1"
            style={{ color: "white" }}
          >
            <FaEdit /> <span>Edit</span>
          </Button>
        </Card.Header>

        <Card.Body>
          <Row className="mb-4">
            {isLoading ? (
              <>
                <Col md={6} >
                  <span style={{ fontSize: "15px" }}>First Name</span><p><strong>{user.firstName}</strong></p>
                </Col>
                <Col md={6} >
                  <span style={{ fontSize: "15px" }}>Last Name</span><p><strong>{user.lastName}</strong></p>
                </Col>
                <Col md={6} >
                  <span style={{ fontSize: "15px" }}>Email</span><p><strong>{user.email}</strong></p>
                </Col>
                <Col md={6} >
                  <span style={{ fontSize: "15px" }}>Phone</span><p><strong>{user.phone}</strong></p>
                </Col>
              </>
            ) : (
              <></>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalInfo;
