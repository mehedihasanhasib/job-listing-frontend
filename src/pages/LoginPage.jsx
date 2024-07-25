import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <>
    <Header title={"Login"}/>
    <Container fluid className="d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={8} lg={6} xl={5} className="mx-auto">
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Welcome Back!</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FontAwesomeIcon icon={faUser} />
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
                <Form.Group className="mb-4">
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
                <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="#" className="text-primary">Forgot password?</a>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-4">
                  Sign In
                </Button>
              </Form>
              <div className="text-center">
                <p>Dont have an account? <NavLink to="/signup" className="text-primary">Sign up</NavLink></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LoginPage;