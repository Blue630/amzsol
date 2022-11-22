import React from 'react'
import Table from 'react-bootstrap/Table';
import './index.css'

function campaignTable(props) {
    
    return (
        <Table className='campaign-table asin-table' responsive hover>
            <tbody>
                {props.data.map((rowData, colIndex) => (
                    <tr key={colIndex} className = {colIndex == 0 ? 'bg-light parent-row' : '' }>
                        {rowData.map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default campaignTable;