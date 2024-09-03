/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

export default function Buttons({close, update}) {
  return (
    <div className="mt-2 d-flex justify-content-end">
      <Button
        variant="outline-primary"
        className="m-1"
        onClick={close}
      >
        Close
      </Button>
      <Button
        className="m-1"
        onClick={update}
      >
        Update
      </Button>
    </div>
  );
}
