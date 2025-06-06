import React from 'react'
import { Fragment } from 'react'
import {Row,Col, CardBody, CardHeader} from 'react-bootstrap'
//components
import Card from '../../components/bootstrap/card'

const MapGoogle = () => {
    return (
        <Fragment>
            <div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex justify-content-between mb-0">
                                <div className="header-title">
                                    <h4 className="card-title">Basic</h4>
                                </div>
                            </CardHeader>
                            <Card.Body className="pt-3">
                                <p>Creating basic google map</p>
                                <iframe loading="lazy" className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin" height="500" allowFullScreen=""></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex justify-content-between mb-0">
                                <div className="header-title">
                                    <h4 className="card-title">Street View</h4>
                                </div>
                            </CardHeader>
                            <Card.Body className="pt-3">
                                <p>Street View google map</p>
                                <iframe loading="lazy" className="w-100" src="https://www.google.com/maps/embed?pb=!4v1576670414304!6m8!1m7!1sCAoSLEFGMVFpcFBmeGNVWUhFYmRqNWFzLTlsTjgyQUVMbTY1ckNqcmdMRDFjcy16!2m2!1d37.41885!2d-122.0798!3f191.60895907234024!4f-16.305518968749!5f0.4000000000000002" height="500" allowFullScreen=""></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex justify-content-between mb-0">
                                <div className="header-title">
                                    <h4 className="card-title">Stellite</h4>
                                </div>
                            </CardHeader>
                            <Card.Body className="pt-3">
                                <p>Stellite View google map</p>
                                <iframe loading="lazy" className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.6523460203307!2d-121.8326811833386!3d38.44960145310393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085259f4fcf781d%3A0x80a4c8c2bb5a0123!2s835%20Woodvale%20Dr%2C%20Dixon%2C%20CA%2095620%2C%20USA!5e1!3m2!1sen!2sin!4v1576670825530!5m2!1sen!2sin" height="500" allowFullScreen=""></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default MapGoogle
