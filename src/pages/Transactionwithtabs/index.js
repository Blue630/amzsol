import React, { useState } from "react";
import Header from './../../components/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import TransactionView from './../../components/TransactionView'
import BusinessReport from './../../components/BusinessReport'
import "react-datepicker/dist/react-datepicker.css";
import './index.css'

function Transactionwithtabs() {
    const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 20));
    const [endDate, setEndDate] = useState(new Date());
    const [key, setKey] = useState('home');
    const [transactionStatus, setTransactionStatus] = useState('Released')

    const handleTransactionStatus = (e) => {
        setTransactionStatus(e.target.value)
    }
    return (
        <>
            <Header showOthers={true} />
            <div className="p-4">
                <form className="transactionsForm nd-navtab nd-padtop10 container">
                    <div className="nd-padtop10  row pl-5">
                    <div className="col-3 form-group">
                        <label htmlFor="accountType">Account Type</label>
                        <Form.Select id="accountType" className="select form-control ">
                            <option value="Standard Orders">Standard Orders</option>
                        </Form.Select>
                    </div>
                    <div className="col-3 form-group">
                        <label>Transaction Type</label>
                        <Form.Select className="select form-control ">
                            <option value="All">All tranaction types</option>
                            <option value="Order">Order</option>
                        </Form.Select>
                        <br />
                        <label>Transaction Status</label>
                        <Form.Select className="select form-control" id="tranactionStatus" onChange={handleTransactionStatus} defaultValue={"Released"}>
                            <option value="All">All tranaction status</option>
                            <option value="Released">Released</option>
                        </Form.Select>
                    </div>

                        <div className="col-3 form-group">
                        <label>Within:</label>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="daterange" id="daterange1" value="option1" defaultChecked={true} />
                        <label className="form-check-label" htmlFor="daterange1">
                            Custom Date Range
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="daterange" id="daterange2" value="option2" />
                        <label className="form-check-label" htmlFor="daterange2">
                            Past Number of Days
                        </label>
                        </div>
                        <div className="form-check disabled">
                        <input className="form-check-input" type="radio" name="daterange" id="daterange3" value="option3" />
                        <label className="form-check-label" htmlFor="daterange3">
                            Settlement Period
                        </label>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="d-flex form-group mb-4 row">
                        <div className="datepicker date" style={{width: '120px'}}>
                            <div>From</div>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="datepicker date" style={{width: '100px'}}>
                            <div>To</div>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                        </div>
                    </div>
                    </div>
                    </div>
                </form>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mt-5 mb-3"
                    >
                    <Tab eventKey="home" title="Transaction View">
                        <TransactionView transactionStatus={transactionStatus} startDate={startDate} endDate={endDate} />
                    </Tab>
                    <Tab eventKey="profile" title="Business Report">
                        <BusinessReport />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default Transactionwithtabs;