import { Col, ListGroup } from "react-bootstrap";
import { FaUser, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Col md={3} className="bg-white p-4 shadow-sm rounded">
        <ListGroup variant="flush">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              `${isActive ? "bg-primary p-2 text-white" : "p-2"}`
            }
          >
            <FaUser className="me-3" /> Personal Information
          </NavLink>
          <NavLink
            to="/profile/education"
            className={({ isActive }) =>
              `${isActive ? "bg-primary p-2 text-white" : "p-2"}`
            }
          >
            <FaCog className="me-3" /> Education/Training
          </NavLink>
          <NavLink href="#notifications" className="p-2">
            <FaBell className="me-3" /> Notifications
          </NavLink>
          <NavLink href="#logout" className="p-2">
            <FaSignOutAlt className="me-3" /> Logout
          </NavLink>
        </ListGroup>
      </Col>
    </>
  );
}
