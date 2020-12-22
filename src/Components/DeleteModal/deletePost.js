import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./deletepost.css"
export default function DeleteModal(props) {
  const { handleDelete } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
   
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>do you want to delete this Post ?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.onHide}
        >
          {" "}
          Cancel
        </Button>

        <Button variant="primary"  onClick={handleDelete}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
