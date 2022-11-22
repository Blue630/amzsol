import React, {useState} from 'react'
import Header from './../../components/Header'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import Modal from 'react-bootstrap/Modal';
import { BsFillPlusCircleFill, BsFillDashCircleFill, BsArrowRight } from "react-icons/bs";

import './index.css'

function CompanySettings() {
    const [modalShow, setModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [formGroup, setFormGroup] = useState()
    const [expandedRows, setExpandedRows] = useState([]);
    const [expandState, setExpandState] = useState({});

    const handleEpandRow = (event, userId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(userId);
    
        let obj = {};
        isRowExpanded ? (obj[userId] = false) :  (obj[userId] = true);
        setExpandState(obj);
    
        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows = isRowExpanded ?
              currentExpandedRows.filter(id => id !== userId) :
              currentExpandedRows.concat(userId);
    
        setExpandedRows(newExpandedRows);
    }
    const handleAddProduct = () => {
        setModalShow(!modalShow)
    }
    const handleAddRow = () => {
        setFormGroup(<>
            {formGroup}
            <form className='d-flex p-2 pt-0 pb-0' style={{width: '90%'}}>
                <input type="text" placeholder='Enter Parent ASIN' className="m-2 mt-0 mb-1 form-control" />
                <input type="text" placeholder='Enter Child ASIN' className="m-2 mt-0 mb-1 form-control" />
                <input type="text" placeholder='Enter SKU' className="m-2 mt-0 mb-1 form-control" />
                <input type="text" placeholder='Enter Title' className="m-2 mt-0 mb-1 form-control" />
            </form>
        </>)
    }
    const tableData = [
        {sn: '001', image: "", parentOrChild: 'Parent/親', SKU: 'BH_Gr', ASIN: 'B0EOFU39234', title: 'Baseball hat'},
        {sn: 'a', parentId:'001', image: "/images/51y3u4JhO8L.__AC_SX300_SY300_QL70_ML2_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'b', parentId:'001', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-large', ASIN: 'B0EOFU39234', title: 'Large baseball hat'},
        {sn: '002', image: "", parentOrChild: 'Parent/親', SKU: 'SBALL', ASIN: 'B0OAI4HG943T', title: 'Soccer ball'},
        {sn: 'a', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'b', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'c', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'd', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'e', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'f', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'g', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: 'e', parentId:'002', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Child/子', SKU: 'BH_Gr-small', ASIN: 'B0EOFU39234', title: 'Small baseball hat'},
        {sn: '003', image: "/images/61RxOLGKt-L._AC_SX679_.jpg", parentOrChild: 'Parent/親', SKU: 'Shoe', ASIN: 'B0OQGI467', title: 'Red shoe'},
        {sn: '004', image: "/images/51y3u4JhO8L.__AC_SX300_SY300_QL70_ML2_.jpg", parentOrChild: 'Parent/親', SKU: 'Gloves', ASIN: 'B0ODYTR12', title: 'Red gloves'},
    ]
    return (
        <>
            <Header />
            <div className="p-4">
                <div className='d-flex mb-5'>
                    <h2 className='m-3 mt-4 mb-1'>Company Name</h2>
                    <Button className='m-5 mt-4' onClick={handleAddProduct} type="submit">Add Product</Button>    
                </div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th  className="text-white bg-calendar-thead0 width5" style={{color:"#fff"}}></th>
                            <th  className="text-white bg-calendar-thead0 width10" style={{color:"#fff"}}>Serial Number <br /><span className="jp">通し番号</span> </th>
                            <th  className="text-white bg-calendar-thead0"></th>
                            <th  className="text-white bg-calendar-thead0"></th>
                            <th  className="text-white bg-calendar-thead0" >SKU</th>
                            <th  className="text-white bg-calendar-thead0">ASIN</th>
                            <th  className="text-white bg-calendar-thead0">Title  <br /> <span className="jp">タイトル</span> </th>
                            <th  className="text-white bg-calendar-thead0"></th>
                            <th  className="text-white bg-calendar-thead0">Notes <br /> <span className="jp">注釈</span></th>
                            <th  className="text-white bg-calendar-thead0"></th>
                            <th  className="text-white bg-calendar-thead0"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    tableData.map((data, index) =>
                    <>
                        {
                            data.parentOrChild === 'Parent/親' ?
                            <tr key={index} className="parent-row">
                                <td>{index + 1}</td>                       
                                <td> 
                                    <span>{data.sn} </span>
                                    {tableData.filter(item => item.parentOrChild === 'Child/子' && item.parentId === data.sn).length > 0 && <Button     
                                        variant="link"
                                        onClick={event => handleEpandRow(event, data.sn)}>
                                        {
                                            expandState[data.sn] ?
                                            <BsFillDashCircleFill style={{color: '#286090', width: '20px', height: '20px', cursor: 'pointer'}} /> : <BsFillPlusCircleFill style={{color: '#286090', width: '20px', height: '20px', cursor: 'pointer'}} />
                                        }
                                    </Button>}
                                </td>
                                {data.image ? <td className="d-flex flex-column">
                                    <img style={{width: '50px'}} src={process.env.PUBLIC_URL + data.image} />
                                    <Button style={{padding: '4px', marginTop:'2px', fontSize: '12px', width: 'fit-content'}}>Update</Button>
                                </td> : <td></td>}
                                <td>{data.parentOrChild}</td>
                                <td>{data.SKU}</td>
                                <td>{data.ASIN}</td>
                                <td>{data.title}</td>
                                <td></td>
                                <td><textarea placeholder='Start next month'></textarea></td>
                                <td><Button onClick={()=>{setEditModalShow(true)}}>Edit</Button></td>
                                <td><Button>Delete</Button></td>
                            </tr> : ""
                        }
                        <>
                        {
                        expandedRows.includes(data.parentId) ?
                        <tr>
                            <td>{index+1}</td>
                            <td>{data.sn}</td>
                            <td className="d-flex flex-column">
                                <img style={{width: '50px'}} src={process.env.PUBLIC_URL + data.image} />
                                <Button style={{padding: '4px', marginTop:'2px', fontSize: '12px', width: 'fit-content'}}>Update</Button>
                            </td>
                            <td>{data.parentOrChild}</td>
                            <td>{data.SKU}</td>
                            <td>{data.ASIN}</td>
                            <td>{data.title}</td>
                            <td><Button>View on Amazon <BsArrowRight /></Button></td>
                            <td><textarea placeholder='Start next month'></textarea></td>
                            <td><Button onClick={()=>{setEditModalShow(true)}}>Edit</Button></td>
                            <td><Button>Delete</Button></td>
                        </tr> : null
                        }
                        </>
                    </> 
                    )}
                    </tbody>
                </Table>
            </div>
            <Modal
                show={modalShow}
                onHide={()=>{setModalShow(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex align-items-center'>
                        <form className='d-flex p-2 pt-0 pb-0' style={{width: '90%'}}>
                            <input type="text" placeholder='Enter Parent ASIN' className="m-2 mt-0 mb-1 form-control" />
                            <input type="text" placeholder='Enter Child ASIN' className="m-2 mt-0 mb-1 form-control" />
                            <input type="text" placeholder='Enter SKU' className="m-2 mt-0 mb-1 form-control" />
                            <input type="text" placeholder='Enter Title' className="m-2 mt-0 mb-1 form-control" />
                        </form>
                        <div className="form-group addrow" onClick={handleAddRow}>
                            <BsFillPlusCircleFill style={{color: '#286090', width: '20px', height: '20px', cursor: 'pointer'}} />
                        </div>
                    </div>
                    {formGroup}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {setModalShow(false)}}>Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={editModalShow}
                onHide={()=>{setEditModalShow(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='d-flex p-2 pt-0 pb-0' style={{width: '90%'}}>
                        <input type="text" placeholder='Enter Parent ASIN' className="m-2 mt-0 mb-1 form-control" />
                        <input type="text" placeholder='Enter Child ASIN' className="m-2 mt-0 mb-1 form-control" />
                        <input type="text" placeholder='Enter SKU' className="m-2 mt-0 mb-1 form-control" />
                        <input type="text" placeholder='Enter Title' className="m-2 mt-0 mb-1 form-control" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {setEditModalShow(false)}}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CompanySettings;