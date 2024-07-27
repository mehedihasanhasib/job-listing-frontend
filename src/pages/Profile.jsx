// src/components/ProfilePage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUser, FaCog, FaBell, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaClock } from 'react-icons/fa';
import Sidebar from '../components/profile/Sidebar';

const ProfilePage = () => {
    return (
        <Container fluid className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                {/* <Col md={3} className="bg-white p-4 shadow-sm rounded">
                    <ListGroup variant="flush">
                        <ListGroup.Item action href="#profile" className="d-flex align-items-center">
                            <FaUser className="me-3" /> Profile
                        </ListGroup.Item>
                        <ListGroup.Item action href="#settings" className="d-flex align-items-center">
                            <FaCog className="me-3" /> Settings
                        </ListGroup.Item>
                        <ListGroup.Item action href="#notifications" className="d-flex align-items-center">
                            <FaBell className="me-3" /> Notifications
                        </ListGroup.Item>
                        <ListGroup.Item action href="#logout" className="d-flex align-items-center">
                            <FaSignOutAlt className="me-3" /> Logout
                        </ListGroup.Item>
                    </ListGroup>
                </Col> */}
                <Sidebar />
                <Col md={9}>
                    <Card className="shadow-sm rounded border-0">
                        <Card.Header className="bg-primary text-white border-0">
                            Employee Profile
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={4} className="text-center">
                                    <div className="profile-img-wrapper">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Profile"
                                            className="img-fluid rounded-circle mb-3 profile-img"
                                        />
                                    </div>
                                    <h5>John Doe</h5>
                                    <p className="text-muted">Software Engineer</p>
                                    <Button variant="outline-primary" className="mt-2">Edit Profile</Button>
                                </Col>
                                <Col md={8}>
                                    <h6 className="text-primary">Contact Information</h6>
                                    <p><FaEnvelope className="me-2" /> <strong>john.doe@example.com</strong></p>
                                    <p><FaPhone className="me-2" /> <strong>(123) 456-7890</strong></p>
                                    <p><FaMapMarkerAlt className="me-2" /> <strong>New York, USA</strong></p>
                                    <hr />
                                    <h6 className="text-primary">Professional Information</h6>
                                    <p><FaBriefcase className="me-2" /> Position: <strong>Software Engineer</strong></p>
                                    <p><FaBuilding className="me-2" /> Department: <strong>Development</strong></p>
                                    <p><FaClock className="me-2" /> Experience: <strong>5 Years</strong></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 className="text-primary">About Me</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
