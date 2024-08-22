import { Col, ListGroup } from "react-bootstrap";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Col
        md={3}
        className="bg-white p-4 shadow-sm rounded"
      >
        <ListGroup variant="flush">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) => `${isActive ? "bg-primary p-2 text-white" : "p-2"}`}
          >
            <FaUser className="me-3" /> Personal Information
          </NavLink>
          <NavLink
            to="/profile/education"
            className={({ isActive }) => `${isActive ? "bg-primary p-2 text-white" : "p-2"}`}
          >
            <FaCog className="me-3" /> Education/Training
          </NavLink>
          <NavLink
            to="/profile/employment"
            className={({ isActive }) => `${isActive ? "bg-primary p-2 text-white" : "p-2"}`}
          >
            <MdWork className="me-3" /> Employment
          </NavLink>
          <NavLink
            href="#"
            className="p-2"
          >
            <FaSignOutAlt className="me-3" /> Logout
          </NavLink>
        </ListGroup>
      </Col>
    </>
  );
}
