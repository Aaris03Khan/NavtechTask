import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteOrder({orderNumber, data, setData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteOrder = () => {
        const newData = data.filter(item => item.orderNumber !== orderNumber);
        setData(newData);
        setShow(false);
    }
  
    return (
    <div>
        <Button variant="danger" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Hold On!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              cancel
            </Button>
            <Button variant="danger" onClick={deleteOrder}>
              Yes, Delete.
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}