import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AddOrder({data, setData}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDueDate, setOrderDueDate] = useState('');
  const [customerBuyerName, setCustomerBuyerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [totalOrderValue, setTotalOrderValue] = useState('');
  const [error, setError] = useState(''); 
  const addOrder = () => {
    if(customerPhone.length === 10){
      const newData = [...data, {orderNumber, orderDueDate, customerBuyerName, customerAddress, customerPhone, totalOrderValue}];
      setData(newData);
      setShow(false);
      setError('');
    }
    else{
      setError('Phone number must be 10 digits long');
    }
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        New Order
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Order Number"
                onChange={(e) => setOrderNumber(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Slect Date"
                onChange={(e) => setOrderDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Buyer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Buyer Name"
                onChange={(e) => setCustomerBuyerName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control 
              as="textarea" rows={2} 
              placeholder="Enter Customer Address" 
              onChange={(e) => setCustomerAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Phone</Form.Label>
              <Form.Control
                type="number" 
                maxlength="10"
                placeholder="Customer Phone Number"
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Order Value</Form.Label>
              <Form.Control
                type="number" placeholder="Total Order"
                onChange={(e) => setTotalOrderValue(e.target.value)}
              />
            </Form.Group>
            <div style={{color: 'red'}}>
              {error}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={addOrder}>
            Add Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}