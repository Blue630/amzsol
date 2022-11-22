import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function CampaignModal(props) {
    const [campaignType, setCampaignType] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [targetValue, setTargetValue] = useState('')
    const [addLetters, setAddLetters] = useState('')
    
    const handleCampaignType = (e) => {
        setCampaignType(e.target.value)
        if (props.campaign === 'ASIN') {
            if(e.target.value === 'SP Auto') {
                setAddLetters('AUTO_low_bid')
                setDisabled(true)
                setTargetValue('SP_AUTO')
            } else setDisabled(false)
        } else {
            if(e.target.value === 'SP Auto') {
                setAddLetters('AUTO_')
                setDisabled(true)
            } else setDisabled(false)
            if(e.target.value === 'SP ASIN') setAddLetters('ASIN')
        }
        if(e.target.value === 'SP Keyword') setAddLetters('KW_Yankees_high bid')
        if(e.target.value === 'SP Category') setAddLetters('CT_sports hats')
    }
    const handleTarget = (e) => {
        setTargetValue(e.target.value)
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title> */}

            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-row d-flex">
                        <div className="col form-group m-2">
                            <Form.Select className="form-control" id="selproduct">
                                <option>Choose Product</option>
                                <option>001  BSBL_HAT  B0OAJDFN5G  baseball hat</option>
                                <option>002  BSBL_SHRT B0325HF340 baseball shirt</option>
                                <option>003  BSBL_GLV B0AC8H3FH baseball glove</option>
                            </Form.Select>
                        </div>
                        <div className="col form-group m-2">
                            <Form.Select className="form-control" id="selcampaignType" onChange={handleCampaignType}>
                                <option>Choose Campaign Type</option>
                                <option value="SP Auto">SP Auto</option>
                                <option value="SP Keyword">SP keyword</option>
                                <option value="SP ASIN">SP ASIN</option>
                                <option value="SP Category">SP category</option>
                            </Form.Select>
                        </div>
                        <div className="col form-group m-2">
                            <input type="text" onChange={handleTarget} value={targetValue} className="form-control targets" placeholder="Enter targets" disabled={disabled} />
                        </div>
                        <div className="col form-group m-2">
                            <input type="text" className="form-control usertag" placeholder="Enter user tag (optional)" />
                        </div>
                        {props.campaign === 'KW' && <div className="col form-group m-2">
                            <input type="text" className="form-control usertag" />
                        </div>}
                    </div>
                </form>
                {(campaignType === 'SP Auto' || campaignType === 'SP Keyword' || campaignType === 'SP Category') && <div className="m-4 mt-1 campaigns spauto">
                    <h3 className="row mt-4 mb-4" >001_SP_AUTO_BSBL_HAT_baseball hat_low bid</h3>
                    <div className="row d-flex align-items-center mt-3 newadgrp">
                        <img style={{width: '70px'}} src={process.env.PUBLIC_URL + '/images/51y3u4JhO8L.__AC_SX300_SY300_QL70_ML2_.jpg'}/>
                        <div className="adgrp ml-5 col">001a_BSBL_HAT_S_{addLetters}</div>
                    </div>
                    <div className="row d-flex align-items-center mt-3 newadgrp">
                        <img style={{width: '70px'}} src={process.env.PUBLIC_URL + "/images/51y3u4JhO8L.__AC_SX300_SY300_QL70_ML2_.jpg"}/>
                        <div className="adgrp ml-5 col">001b_BSBL_HAT_M_{addLetters}</div>
                    </div>
                    <div className="row d-flex align-items-center mt-3 newadgrp">
                        <img style={{width: '70px'}} src={process.env.PUBLIC_URL + "/images/51y3u4JhO8L.__AC_SX300_SY300_QL70_ML2_.jpg"}/>
                        <div className="adgrp ml-5 col">001c_BSBL_HAT_L_{addLetters}</div>
                    </div>
                </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CampaignModal;