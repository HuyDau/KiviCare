import React, { memo } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import topHeader from '/assets/images/dashboard/top-header.png'

const SubHeader = memo((props) => {
    return (
        <div className="iq-navbar-header">
            <Container fluid className=" iq-container">
                <Row>
                    <Col md="12">
                        <div className="flex-wrap d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div>
                                <h1 className="fw-bold mb-0">Hello KiviCare!</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="iq-header-img">
                <img src={topHeader} alt="header" className="theme-color-default-img img-fluid w-100 h-100" loading="lazy" />
            </div>
        </div>

    )
})

SubHeader.displayName = "SubHeader"
export default SubHeader
