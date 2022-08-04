import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import EditOrder from './EditOrder';
import DeleteOrder from './DeleteOrder';

export default function OrderTable({data, setData}){
    const tableData = data.map(item => {
        return(
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.orderDueDate}</td>
            <td>{item.customerBuyerName}</td>
            <td>{item.customerAddress}</td>
            <td>{item.customerPhone}</td>
            <td>{item.totalOrderValue}</td>
            <td className='d-flex'>
                <EditOrder data={data} setData={setData} dataItem={item}/>
                <DeleteOrder orderNumber={item.orderNumber} data={data} setData={setData}/>
            </td>
        </tr>
    )});
    
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order No.</th>
          <th>Due Date</th>
          <th>Buyer Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </Table>
    );
}
  