/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

const Text = ({label, value}) => {
  return (
    <>
      <Col md={6}>
        <span style={{ fontSize: "15px" }}>{label}</span>
        <p>
          <strong>{value}</strong>
        </p>
      </Col>
    </>
  );
};

export default Text;
