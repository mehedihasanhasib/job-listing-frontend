import React from "react";
import {Col, ListGroup} from 'react-bootstrap';
import {FaUser, FaCog, FaBell, FaSignOutAlt} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Col md={3} className="bg-white p-4 shadow-sm rounded">
        <ListGroup variant="flush">
          <NavLink
            href="/"
            // className={"d-flex align-items-center"}
            className={({isActive})=>
               `bg-primary ${isActive ? "p-2 text-white" : ""}`
            }
          >
            <FaUser className="me-3" /> Profile
          </NavLink>
          <NavLink
            href="#settings"
            className="p-2"
          >
            <FaCog className="me-3" /> Settings
          </NavLink>
          <NavLink
            href="#notifications"
            className="p-2"
          >
            <FaBell className="me-3" /> Notifications
          </NavLink>
          <NavLink
            href="#logout"
            className="p-2"
          >
            <FaSignOutAlt className="me-3" /> Logout
          </NavLink>
        </ListGroup>
      </Col>
    </>
  );
}
