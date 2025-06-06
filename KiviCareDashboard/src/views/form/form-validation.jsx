import React from 'react'
import { useState, Fragment } from 'react'

//react-bootstrap
import { Row, Col, Form, Button, CardHeader } from 'react-bootstrap'

//components
import Card from '../../components/bootstrap/card'

const FormValidation = () => {
    // form validation
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    const [validated1, setValidated1] = useState(false);
    const handleSubmit1 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated1(true);
    };
    return (
        <Fragment>
            <div>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <CardHeader className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title"> Default Validation</h4>
                                </div>
                            </CardHeader>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <form>
                                    <Row>
                                        <Col md="6" className="mb-3">
                                            <Form.Label md="6" htmlFor="validationDefault01">First Name</Form.Label>
                                            <Form.Control type="text" id="validationDefault01" required />
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label md="6" htmlFor="validationDefault02">Last Name</Form.Label>
                                            <Form.Control type="text" id="validationDefault02" required />
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                                            <Form.Group className="form-group input-group">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                <Form.Control type="text" id="validationCustomUsername" aria-label="Username" aria-describedby="basic-addon1" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault05">City</Form.Label>
                                            <Form.Control type="text" id="validationDefault005" required />
                                        </Col>
                                        <Col md="6" className='mb-3'>
                                            <Form.Label htmlFor="validationDefault04">State</Form.Label>
                                            <Form.Select id="validationDefault04" required>
                                                <option defaultValue>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md="6" className="mb-3">
                                            <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                                            <Form.Control type="text" id="validationDefault05" required />
                                        </Col>
                                    </Row>
                                    <Form.Group className='form-group'>
                                        <Form.Check className="mb-3">
                                            <Form.Check.Input type="checkbox" defaultValue id="invalidCheck2" required />
                                            <Form.Check.Label htmlFor="invalidCheck2">
                                                Agree to terms and conditions
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group className='form-group'>
                                        <Button variant="primary" type="submit">Submit Form</Button>
                                    </Form.Group>
                                </form>
                            </div>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title"> Supported elements</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form className="was-validated" validated>
                                    <Form.Group className='mb-3 form-group'>
                                        <Form.Label htmlFor="validationTextarea" className="form-label">Textarea</Form.Label>
                                        <Form.Control as="textarea" className="is-valid" id="validationTextarea" placeholder="Required example textarea" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a message in the textarea.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Check className="form-group">
                                        <Form.Check.Input type="checkbox" id="validationFormCheck1" required />
                                        <Form.Check.Label htmlFor="validationFormCheck1">Check this checkbox</Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
                                    </Form.Check>
                                    <Form.Check>
                                        <Form.Check.Input type="radio" id="validationFormCheck2" name="radio-stacked" required />
                                        <Form.Check.Label htmlFor="validationFormCheck2">Toggle this radio</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="form-group">
                                        <Form.Check.Input type="radio" id="validationFormCheck3" name="radio-stacked" required />
                                        <Form.Check.Label htmlFor="validationFormCheck3">Or toggle this other radio</Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
                                    </Form.Check>
                                    <Form.Group className="mb-3">
                                        <select className="form-select" required aria-label="select example">
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid select feedback</div>
                                    </Form.Group>
                                    <Form.Group className="mb-0">
                                        <Form.Control type="file" aria-label="file example" required />
                                        <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Custom Validation</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form noValidate validated={validated} onClick={handleSubmit} className='row g-3 needs-validation'>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationCustom01">First Name</Form.Label>
                                            <Form.Control type="text" defaultValue="" id="validationCustom01" required />
                                            <Form.Control.Feedback>
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationCustom02">Last Name</Form.Label>
                                            <Form.Control type="text" defaultValue="" id="validationCustom02" required />
                                            <Form.Control.Feedback>
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationCustomUsername01">Username</Form.Label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <Form.Control type="text" defaultValue="" id="validationCustomUsername01" aria-describedby="inputGroupPrepend" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationCustom03">City</Form.Label>
                                            <Form.Control type="text" defaultValue="" id="validationCustom03" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationDefault041">State</Form.Label>
                                            <Form.Select id="validationDefault041" required>
                                                <option defaultValue="">Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a valid state.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6">
                                            <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                                            <Form.Control defaultValue="" type="text" id="validationCustom05" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid zip.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <div className="col-12">
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" defaultValue id="invalidCheck" required />
                                                <Form.Check.Label htmlFor="invalidCheck">
                                                    Agree to terms and conditions
                                                </Form.Check.Label>
                                                <Form.Control.Feedback type="invalid">
                                                    You must agree before submitting.
                                                </Form.Control.Feedback>
                                            </Form.Check>
                                        </div>
                                        <div className="col-12">
                                            <Button type="button" variant='primary'>Submit Form</Button>
                                        </div>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Tooltips</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form validated={validated1} onClick={handleSubmit1} className="needs-validation" noValidate>
                                    <Row className="row g-3 needs-validation">
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip01">First Name</Form.Label>
                                            <Form.Control type="text" id="validationTooltip01" defaultValue="Mark" required />
                                            <Form.Control.Feedback tooltip >
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip02">Last Name</Form.Label>
                                            <Form.Control type="text" id="validationTooltip02" defaultValue="Otto" required />
                                            <Form.Control.Feedback tooltip >
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltipUsername">Username</Form.Label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                <Form.Control defaultValue="" type="text" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                                <Form.Control.Feedback tooltip type="invalid">
                                                    Please choose a unique and valid username.
                                                </Form.Control.Feedback>
                                            </div>
                                        </Col>
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip03">City</Form.Label>
                                            <Form.Control type="text" id="validationTooltip03" required />
                                            <Form.Control.Feedback tooltip type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip04">State</Form.Label>
                                            <Form.Select id="validationTooltip04" required>
                                                <option defaultValue>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                            <Form.Control.Feedback tooltip type="invalid">
                                                Please select a valid state.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col md="6" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip05">Zip</Form.Label>
                                            <Form.Control defaultValue="" type="text" id="validationTooltip05" required />
                                            <Form.Control.Feedback tooltip type="invalid">
                                                Please provide a valid zip.
                                            </Form.Control.Feedback>
                                        </Col>
                                        <div className="col-12">
                                            <Button variant="primary" type="button">Submit Form</Button>
                                        </div>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default FormValidation
