import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function EditOrder({data, setData, dataItem}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orderNumber, setOrderNumber] = useState(dataItem.orderNumber);
  const [orderDueDate, setOrderDueDate] = useState(dataItem.orderDueDate);
  const [customerBuyerName, setCustomerBuyerName] = useState(dataItem.customerBuyerName);
  const [customerAddress, setCustomerAddress] = useState(dataItem.customerAddress);
  const [customerPhone, setCustomerPhone] = useState(dataItem.customerPhone);
  const [totalOrderValue, setTotalOrderValue] = useState(dataItem.totalOrderValue);
  const [error, setError] = useState(''); 
  const editOrder = () => {
    if(customerPhone.length === 10){
      const newData = data.map(item => {
        if(item.orderNumber === dataItem.orderNumber){
          return {orderNumber, orderDueDate, customerBuyerName, customerAddress, customerPhone, totalOrderValue};
        }
        return item;
      });
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
      <Button variant="primary" onClick={handleShow} className='mr-2'>
        Edit Order
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
                value={orderNumber}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Slect Date"
                onChange={(e) => setOrderDueDate(e.target.value)}
                value={orderDueDate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Buyer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Buyer Name"
                onChange={(e) => setCustomerBuyerName(e.target.value)}
                value={customerBuyerName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control 
              as="textarea" rows={2} 
              placeholder="Enter Customer Address" 
              onChange={(e) => setCustomerAddress(e.target.value)}
              value={customerAddress}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Phone</Form.Label>
              <Form.Control
                type="number" 
                maxlength="10"
                placeholder="Customer Phone Number"
                onChange={(e) => setCustomerPhone(e.target.value)}
                value={customerPhone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Order Value</Form.Label>
              <Form.Control
                type="number" placeholder="Total Order"
                onChange={(e) => setTotalOrderValue(e.target.value)}
                value={totalOrderValue}
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
          <Button variant="primary" onClick={editOrder}>
            Edit Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}