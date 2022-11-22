import React from "react";
import Table from 'react-bootstrap/Table'
import './index.css'
function BusinessReport(props) {
  const tableData = [
    ['10/26/2022', 'SKU 1', 'Released', 'Order Payment', '250-8143712-1363046', 'ボックスシｰツ 綿100％ 抗菌 防臭 シーツ ベッドカバー マットレスカバー ワイドダブルロング 150×210 (グレー)', '¥3,355', '-¥373', '-¥1043', '¥708', '¥2647'],
    ['10/15/2022', 'SKU 2', 'Released', 'Order Payment', '250-8143712-1363046', 'ボックスシｰツ 綿100％ 抗菌 防臭 シーツ ベッドカバー マットレスカバー シングルロング 100×210(キナリ)', '¥3,355', '-¥373', '-¥1043', '¥708', '¥2647'],
  ]
  return (
    <>
      <h3 className="table-title--bold m-3">Transactions</h3>
      <Table className="transaction-view-table thead-lined" responsive hover>
          <thead className='bg-secondary'>
              <tr>
                <th className="text-white bg-grey">Date</th>
                <th className="text-white bg-grey">SKU</th>
                <th className="text-white bg-grey">Transaction Status</th>
                <th className="text-white bg-grey">Transaction Type</th>
                <th className="text-white bg-grey">Order ID</th>
                <th className="text-white bg-grey width15">Product Details</th>
                <th className="text-white bg-grey">Total Product Charges</th>
                <th className="text-white bg-grey">Total Promotional Rebates</th>
                <th className="text-white bg-grey">Amazon Fees</th>
                <th className="text-white bg-grey">Other</th>
                <th className="text-white bg-grey">Total</th>
              </tr>
          </thead>
          <tbody>
              {tableData.filter(data=>(data[2] === props.transactionStatus && new Date(data[0]) >= new Date(props.startDate) && new Date(data[0]) <= new Date(props.endDate))).length ? tableData.filter(data=>(data[2] === props.transactionStatus && new Date(data[0]) >= new Date(props.startDate) && new Date(data[0]) <= new Date(props.endDate))).map((rowData, colIndex) => (
                  <tr key={colIndex}>
                      {rowData.map((data, index) => (
                          <td key={index}>{data}</td>
                      ))}
                  </tr>
              )) : 
              <tr>
                <td colSpan={11}>No matching records found</td>
              </tr>}
          </tbody>
      </Table>
    </>
  );
}

export default BusinessReport;