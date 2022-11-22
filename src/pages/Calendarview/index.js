import React, { useState } from "react";
import Header from '../../components/Header'
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import './index.css'
function Calendarview() {
    const [startDate, setStartDate] = useState(new Date());
    const [viewStatus, setViewStatus] = useState('all');
    const redBtn = <Button className="redBtn" type="submit">Upload</Button>;
    const viewNegativeBtn = <Button className="view-negative-btn" variant="secondary" type="submit">View Negative data</Button>;
    const generateReport = <Button className="generate-report" variant="secondary" type="submit">Generate Report</Button>;
    const createBtn = <Button variant="secondary" type="submit">Create</Button>;
    const deletedBtn = <>
        <p style={{color:'green'}}>Uploaded Filename</p>
        <Button variant="primary" type="submit">Delete</Button>
    </>;
    const tableData = [
    [1,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [2,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [3,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [4,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [5,deletedBtn,deletedBtn,deletedBtn,deletedBtn,deletedBtn,deletedBtn,
        <Button className="view-negative-btn" type="submit"><Link to="/details">View Negative data</Link></Button>,
        <Button className="generate-report" type="submit"><Link to="/report">Generate Report</Link></Button>,
        <Button type="submit"><Link to="/createkwcampaign">Create</Link></Button>,
        <Button type="submit"><Link to="/createasincampaign">Create</Link></Button>],              
    [6,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [7,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [8,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [9,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    [10,redBtn,redBtn,redBtn,redBtn,redBtn,redBtn,viewNegativeBtn, generateReport, createBtn, createBtn],              
    ];
    
    const handleNegativeView = () => {
        setViewStatus('negative')
    }
    const handleReportView = () => {
        setViewStatus('report')
    }
    const handleCampaignView = () => {
        setViewStatus('campaign')
    }
    const handleViewAll = () => {
        setViewStatus('all')
    }
    return (
        <>
            <Header />
            <div className="p-4">
                <form className="nd-navtab nd-padtop10 m-5">
                    <h3 className="companyname mb-5">Company 1</h3>
                    <div className="datepicker-label-group">
                        <label htmlFor="startDate">Date :</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </form>
                <div className="thead-btn-group mb-3">
                    <button style={{ marginLeft: '10px'}} onClick={handleNegativeView}>Negative View</button>{' '}
                    <button onClick={handleReportView}>Report View</button>{' '}
                    <button onClick={handleCampaignView}>Campaign View</button>{' '}
                    <button onClick={handleViewAll}>View all</button>
                </div>
                {viewStatus === 'negative' && <Table className="calendar-table" responsive hover>
                    <thead>
                        <tr>
                            <th className="text-white bg-calendar-thead0">Nov-2022</th>
                            <th className="text-white bg-calendar-thead0">Bulk file / 一括操作	</th>
                            <th className="bg-calendar-thead1">SP Search term report / SP検索用語</th>
                            <th className="text-white bg-calendar-thead0">Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, colIndex) => (
                            <tr key={colIndex}>
                                {rowData.map((data, index) => (
                                    [0,1,2,7].includes(index) && <td key={index}>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>}
                {viewStatus === 'report' && <Table className="calendar-table" responsive hover>
                    <thead>
                        <tr>
                            <th className="text-white bg-calendar-thead0">Nov-2022</th>
                            <th className="text-white bg-calendar-thead0">Bulk file / 一括操作</th>
                            <th className="bg-calendar-thead1">SP Search term report / SP検索用語</th>
                            <th className="bg-calendar-thead2">SB Search term report / SB検索用語</th>
                            <th className="bg-calendar-thead1">SD Matched target / SD一致ターゲット</th>
                            <th className="bg-calendar-thead2">SP Advertised product / SP広告対象商品</th>
                            <th className="bg-calendar-thead1">SD Advertised product / SD広告対象商品</th>
                            <th className="text-white bg-calendar-thead0">Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, colIndex) => (
                            <tr key={colIndex}>
                                {rowData.map((data, index) => (
                                    [0,1,2,3,4,5,6,8].includes(index) && <td key={index}>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>}
                {viewStatus === 'campaign' && <Table className="calendar-table" responsive hover>
                    <thead>
                        <tr>
                            <th className="text-white bg-calendar-thead0">Nov-2022</th>
                            <th className="text-white bg-calendar-thead0">Bulk file / 一括操作</th>
                            <th className="text-white bg-calendar-thead0">Create SP KW campaign</th>
                            <th className="text-white bg-calendar-thead0">Create SP ASIN campaign</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, colIndex) => (
                            <tr key={colIndex}>
                                {rowData.map((data, index) => (
                                    [0,1,9,10].includes(index) && <td key={index}>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>}
                {viewStatus === 'all' && <Table className="calendar-table" responsive hover>
                    <thead>
                        <tr>
                            <th className="text-white bg-calendar-thead0">Nov-2022</th>
                            <th className="text-white bg-calendar-thead0">Bulk file / 一括操作</th>
                            <th className="bg-calendar-thead1">SP Search term report / SP検索用語</th>
                            <th className="bg-calendar-thead2">SB Search term report / SB検索用語</th>
                            <th className="bg-calendar-thead1">SD Matched target / SD一致ターゲット</th>
                            <th className="bg-calendar-thead2">SP Advertised product / SP広告対象商品</th>
                            <th className="bg-calendar-thead1">SD Advertised product / SD広告対象商品</th>
                            <th className="text-white bg-calendar-thead0">Negative</th>
                            <th className="text-white bg-calendar-thead0">Report</th>
                            <th className="text-white bg-calendar-thead0">Create SP KW campaign</th>
                            <th className="text-white bg-calendar-thead0">Create SP ASIN campaign</th>
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
                </Table>}
            </div>
        </>
    );
}

export default Calendarview;