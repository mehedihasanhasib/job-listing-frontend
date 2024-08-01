// src/components/ProfilePage.js
import { Container, Row } from "react-bootstrap";

import Sidebar from "../components/profile/Sidebar";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        <Sidebar />
        
        <Outlet />
      </Row>
    </Container>
  );
};

export default ProfilePage;
