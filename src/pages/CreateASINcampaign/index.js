import React, { useState } from 'react'
import Header from './../../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CampaignModal from './../../components/CampaignModal'
import CampaignTable from './../../components/CampaignTable'
import './index.css'

function CreateASINcampaign() {
    const [modalShow, setModalShow] = useState(false)
    const handleExclude = (e) => {
        if (e.target.parentElement.closest('TR').classList.contains('parent-row'))
            e.target.parentElement.closest('TABLE').style.display = 'none';
        else e.target.parentElement.closest('TR').style.display = 'none'
    }
    const tableData = [
        ['Adgroup', '001_ASIN_SKU001_ASIN1_', 'ASIN1', <Form.Control type="text" placeholder="Add tag" />, <Button onClick={handleExclude} type="submit">Exclude</Button>],
        ['Adgroup', '001a_SKU001_ASIN1_', 'ASIN1', '', <Button onClick={handleExclude} type="submit">Exclude</Button>],
        ['Adgroup', '001a_SKU001_ASIN1_', 'ASIN1', '', <Button onClick={handleExclude} type="submit">Exclude</Button>],
        ['Adgroup', '001a_SKU001_ASIN1_', 'ASIN1', '', <Button onClick={handleExclude} type="submit">Exclude</Button>],
        ['Adgroup', '001a_SKU001_ASIN1_', 'ASIN1', '', <Button onClick={handleExclude} type="submit">Exclude</Button>],
        ['Adgroup', '001a_SKU001_ASIN1_', 'ASIN1', '', <Button onClick={handleExclude} type="submit">Exclude</Button>],
    ]
    const handleAddCampaign = () => {
        setModalShow(!modalShow)
    }
    return (
        <>
            <Header />
            <div className="p-4">
                <h2 className='campaign-title'>Create SP ASIN Campaign</h2>
                <CampaignTable data={tableData}/>
                <CampaignTable data={tableData}/>
                <CampaignTable data={tableData}/>
                <Button style={{marginRight: '5px', backgroundColor: '#568957', color: '#fff', padding: '10px', fontSize: '16px', fontWeight: 600}} type="submit">Gernerate</Button>
                <Button style={{backgroundColor: '#568957', color: '#fff', padding: '10px', fontSize: '16px', fontWeight: 600}} onClick={handleAddCampaign} type="submit">Add Campaign</Button>
            </div>
            <CampaignModal campaign="ASIN" show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default CreateASINcampaign;