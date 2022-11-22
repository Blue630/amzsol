import React from 'react'
import Header from './../../components/Header'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './index.css'

function Details() {
    const handleClick = (e) => {
        e.target.innerHTML = 'Excluded';
        e.target.classList.add('excluded');
    }
    const tableData = [
        [1,'001_campaign', '001_campaign', 'Hat', 0, 45, <Button onClick={handleClick} type="submit">Exclude</Button>],
        [2,'001_campaign', '001_campaign', 'Hat', 0, 45, <Button onClick={handleClick} type="submit">Exclude</Button>],
        [3,'001_campaign', '001_campaign', 'Hat', 0, 45, <Button onClick={handleClick} type="submit">Exclude</Button>],
        [4,'001_campaign', '001_campaign', 'Hat', 0, 45, <Button onClick={handleClick} type="submit">Exclude</Button>],
        [5,'001_campaign', '001_campaign', 'Hat', 0, 45, <Button onClick={handleClick} type="submit">Exclude</Button>],
    ]
    return (
        <>
            <Header />
            <div className="p-4">
                <div className="nd-navtab nd-padtop10">
                    <div className="m-5">
                    <div className="row mb-3 align-items-center">
                        <div className="col-2">Negative search term paramaters:</div>
                        <div className="col-2 d-flex align-items-center">Conversions: <input type="number" className="form-control input ml-3" /></div>
                        <div className="col-2 d-flex align-items-center">Clicks: <input type="number" className="form-control input ml-3" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-2">Negative asin paramaters:</div>
                        <div className="col-2 d-flex align-items-center">Conversions: <input type="number" className="form-control input ml-3" /></div>
                        <div className="col-2 d-flex align-items-center">Clicks: <input type="number" className="form-control input ml-3" /></div>
                    </div>
                    </div>
                    <Button style={{display: 'block', margin: '70px auto 20px', padding: '10px 60px'}} type="submit">Gernerate File</Button>
                    <h3>Negative Keywords</h3>
                    <Table className='details-table' style={{width: '85%'}} responsive hover>
                        <thead className='bg-secondary'>
                            <tr>
                                <th></th>
                                <th className='text-white'>Campaign name</th>
                                <th className='text-white'>Adgroup name</th>
                                <th className='text-white'>Search term</th>
                                <th className='text-white'>Conversions</th>
                                <th className='text-white'>Clicks</th>
                                <th></th>
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
                    <h3>Negative ASINs</h3>
                    <Table className='details-table' style={{width: '85%'}} responsive hover>
                        <thead className='bg-secondary'>
                            <tr>
                                <th></th>
                                <th className='text-white'>Campaign name</th>
                                <th className='text-white'>Adgroup name</th>
                                <th className='text-white'>Search term</th>
                                <th className='text-white'>Conversions</th>
                                <th className='text-white'>Clicks</th>
                                <th className='text-white'></th>
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
                </div>
            </div>
        </>
    );
}

export default Details;