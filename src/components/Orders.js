import React, {useState} from 'react';
import AddOrder from './AddOrder';
import OrderTable from './Table';

export default function Orders() {

  const [data, setData] = useState([
    {
        orderNumber: 1,
        orderDueDate: '2020-01-01',
        customerBuyerName: 'John Doe',
        customerAddress: '123 Main St',
        customerPhone: '1234567890',
        totalOrderValue: 100
    },
    {
        orderNumber: 2,
        orderDueDate: '2020-01-01',
        customerBuyerName: 'Dom jackson',
        customerAddress: '123 Main St',
        customerPhone: '1234567890',
        totalOrderValue: 200
    },
    {
        orderNumber: 3,
        orderDueDate: '2020-01-01',
        customerBuyerName: 'Paul Walker',
        customerAddress: '123 Main St',
        customerPhone: '1234567890',
        totalOrderValue: 300
    }
]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >Navtech O.M.S</a>
          <div className="navbar-nav ml-auto">
              <div className="form-inline">
                  <AddOrder data={data} setData={setData}/>
              </div>
          </div>
      </nav>
      <div className='justify-content-center align-items-center mt-5 mb-5'>
          <h3 className='text-center'>Current Orders</h3>
      </div>
      <OrderTable data={data} setData={setData}/>
  </div>
  );
}