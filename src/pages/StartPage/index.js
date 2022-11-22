import React, {useState} from 'react'
import Header from './../../components/Header'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import './index.css'

function StartPage() {
    const [modalShow, setModalShow] = useState(false)
    const handleEdit = () => {
        setModalShow(!modalShow)
    }
    const btnGroup = <div>
        <Button className="m-1 mt-0 mb-0" onClick={handleEdit} type="submit">Edit</Button>    
        <Button className="m-1 mt-0 mb-0" type="submit">Upload BusinessReport</Button>    
        <a href='/companysettings'><Button className="m-1 mt-0 mb-0" type="submit">Settings</Button></a>    
    </div>
    const tableData = [
        [<a href='/'>Company 1</a>, btnGroup],
        [<a href='/'>Company 2</a>, btnGroup],
        [<a href='/'>Company 3</a>, btnGroup],
        [<a href='/'>Company 4</a>, btnGroup],
        [<a href='/'>Company 5</a>, btnGroup],
    ]
    return (
        <>
            <Header />
            <div className="p-4">
                <Button type="submit">Add Company</Button>    
                <Table style={{marginTop: '20px', width: '80%'}} responsive hover>
                    <thead className='bg-secondary'>
                        <tr>
                            <th className='text-white'>Company Name <br /> 会社名</th>
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
            </div>
            <Modal
                show={modalShow}
                onHide={() => {setModalShow(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Company
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex p-5">
                    <h4 className='m-5 mt-1 mb-1 p-5 pt-0 pb-0'>Company Name</h4>
                    <Button  className='m-1'>Edit Details</Button>
                    <Button className='m-1' onClick={() => {window.confirm('Are you sure?')}}>Delete</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => {setModalShow(false)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StartPage;