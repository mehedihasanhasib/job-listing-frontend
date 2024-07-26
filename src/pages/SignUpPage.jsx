import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faBuilding } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('jobseeker');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { fullName, email, password, userType });
  };

  return (
    <>
    <Header title={"SingUp"}/>
    <Container fluid className="d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={8} lg={6} xl={5} className="mx-auto">
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Create an Account</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <Form.Select
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    >
                      <option value="jobseeker">Job Seeker</option>
                      <option value="employer">Employer</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-4">
                  Sign Up
                </Button>
              </Form>
              <div className="text-center">
                <p>Already have an account? <NavLink to="/login" className="text-primary">Sign in</NavLink></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SignupPage;