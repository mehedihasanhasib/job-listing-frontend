/* eslint-disable react/prop-types */

import { Button, Card } from "react-bootstrap";

const CardHeader = ({action, text, editMode}) => {
  return (
    <Card.Header className="bg-primary text-white border-0 d-flex align-items-center justify-content-between">
      <div>{text}</div>

      <Button
        className="d-flex align-items-center gap-1"
        style={{ color: "white" }}
        onClick={action}
      >
        {/* <FaEdit /> */}
        <span>{editMode ? "Save" : "Edit"}</span>
      </Button>
    </Card.Header>
  );
};

export default CardHeader;
