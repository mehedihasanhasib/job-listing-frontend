/* eslint-disable react/prop-types */

import { Button, Card } from "react-bootstrap";

const CardHeader = ({ action, text, editMode }) => {
  return (
    <Card.Header className="bg-primary text-white border-0 d-flex align-items-center justify-content-between">
      <div>{text}</div>
      {!editMode ? (
        <>
          <Button
            className="d-flex align-items-center gap-1 btn-sm"
            style={{ color: "white" }}
            onClick={action}
          >
            <span>Edit</span>
          </Button>
        </>
      ) : (
        <></>
      )}
    </Card.Header>
  );
};

export default CardHeader;
