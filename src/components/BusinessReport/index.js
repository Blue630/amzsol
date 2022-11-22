import React from "react";
import Table from 'react-bootstrap/Table'
function BusinessReport() {
  const tableData = [
    ['B01M5GZGLR', 'B01MCZB42S', 46, '1.73%', 60, '1.82%', '98.33%', 4, 0, '8.7%', '¥13,880.00', '¥0', 4, 0],
    ['B01M5GZGLR', 'B01MCZB42S', 27, '1.01%', 40, '1.22%', '97.50%', 5, 0, '18.52%', '¥13,880.00', '¥0', 4, 0],
  ]
  return (
    <>
      <h3 className="table-title--bold m-3">Detail Page Sales and Traffic</h3>
      <Table className="thead-lined" responsive hover>
          <thead className='bg-secondary'>
              <tr>
              <th className="text-white bg-grey">(Parent) ASIN</th>
              <th className="text-white bg-grey">(Child) ASIN</th>
              <th className="text-white bg-grey">Sessions - Total</th>
              <th className="text-white bg-grey">Session Percentage - Total</th>
              <th className="text-white bg-grey">Page Views - Total</th>
              <th className="text-white bg-grey">Page Views Percentage - Total</th>
              <th className="text-white bg-grey">Featured Offer (Buy Box) Percentage</th>
              <th className="text-white bg-grey">Units Ordered</th>
              <th className="text-white bg-grey">Units Ordered - B2B</th>
              <th className="text-white bg-grey">Unit Session Percentage</th>
              <th className="text-white bg-grey">Ordered Product Sales</th>
              <th className="text-white bg-grey">Ordered Product Sales - B2B</th>
              <th className="text-white bg-grey">Total Order Items</th>
              <th className="text-white bg-grey">Total Order Items - B2B</th>
              </tr>
          </thead>
          <tbody>
              {tableData.map((rowData, colIndex) => (
                  <tr key={colIndex}>
                      {rowData.map((data, index) => (
                          <td key={index}>{data}</td>
                      ))}
                  </tr>
              ))}
          </tbody>
      </Table>
    </>
  );
}

export default BusinessReport;