import React,{useState,memo,Fragment} from 'react'

//React-Bootstrap
import { ButtonGroup, Button, Nav, Tab} from 'react-bootstrap'

// components
import Card from '../../components/bootstrap/card'


const ButtonGroups = memo(() =>{
    const [counter, setCount] = useState(0);
    const increase = () => setCount(counter + 1);
    const decrease = () => setCount(( counter > 0 ) ? counter - 1 : 0);

    return(
        <Fragment>
            <article id="button-group">
                <div className="bd-heading sticky-xl-top align-self-start">
                    <Card className="">
                        <Card.Body className="">
                            <h5>Button Group</h5>
                            <div className="d-flex align-items-center mt-2">
                                <Button bsPrefix=" d-flex" href="https://templates.iqonic.design/hope-ui/pro/documentation/react/buttongroup" target="_blank">
                                    <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span>Documentation</span>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Card className=" iq-document-card">
                    <Tab.Container defaultActiveKey="first">
                        <div className="d-flex justify-content-end">
                            <Nav as="ul" className=" nav-tabs nav-tunnel nav-slider" data-toggle="slider-tab" role="tablist">
                                <Nav.Item as="li" className="" role="presentation">
                                    <Nav.Link as="button" eventKey="first" className=" d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Buttongroup-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                        <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                            <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                            <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                        </svg>
                                        Preview
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="" role="presentation">
                                    <Nav.Link as="button" eventKey="second" className=" d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Buttongroup-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                        <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                            <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                            <mask fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                            </mask>
                                            <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                            <mask fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                            </mask>
                                            <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                        </svg>
                                        Code
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="tab-pane bd-heading-1 fade show" id="content-Buttongroup-prv" role="tabpanel" aria-labelledby="typo-output">
                                <div className="bd-example">
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <ButtonGroup className="me-2 mt-2" role="group" aria-label="First group">
                                            <Button type="button" variant="gray">1</Button>
                                            <Button type="button" variant="gray">2</Button>
                                            <Button type="button" variant="gray">3</Button>
                                            <Button type="button" variant="gray">4</Button>
                                        </ButtonGroup>
                                        <div className="btn-group me-2 mt-2" role="group" aria-label="Second group">
                                            <Button type="button" variant="gray">5</Button>
                                            <Button type="button" variant="gray">6</Button>
                                            <Button type="button" variant="gray">7</Button>
                                        </div>
                                        <div className="btn-group mt-2" role="group" aria-label="Third group">
                                            <Button type="button" variant="gray">8</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bd-example">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <Button type="button" variant="primary">Home</Button>
                                        <Button type="button" variant="outline-primary">Profile</Button>
                                        <Button type="button" variant="outline-primary">Message</Button>
                                    </div>
                                </div>
                                <div className="bd-example">
                                    <div className="btn-group-vertical" role="group" aria-label="Basic example">
                                        <Button type="button" variant="primary">Home</Button>
                                        <Button type="button" variant="outline-primary">Profile</Button>
                                        <Button type="button" variant="outline-primary">Message</Button>
                                    </div>
                                </div>
                                <div className="bd-example">
                                    <div className="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
                                        <Button variant="outline-primary iq-quantity-minus" size="sm" onClick={decrease}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                                                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
                                            </svg>
                                        </Button> 
                                        <input type="text" data-qty="input" className="btn btn-sm btn-outline-primary input-display"  defaultValue={counter}  title="Qty" placeholder=""/>
                                        <Button variant="outline-primary iq-quantity-plus" size="sm" onClick={increase}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
                                            </svg>
                                        </Button>
                                    </div>{' '}
                                    <div className="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
                                        <Button variant="outline-secondary iq-quantity-minus" size="sm" onClick={decrease}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                                                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
                                            </svg>
                                        </Button> 
                                        <input type="text" data-qty="input" className="btn btn-sm btn-outline-secondary input-display"  defaultValue={counter}  title="Qty" placeholder=""/>
                                        <Button variant="outline-secondary iq-quantity-plus" size="sm" onClick={increase}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
                                            </svg>
                                        </Button>
                                    </div>{' '}
                                    <div className="btn-group iq-qty-btn" data-qty="btn" role="group">
                                        <Button variant="outline-light iq-quantity-minus" size="sm" onClick={decrease}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                                                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
                                            </svg>
                                        </Button> 
                                        <input type="text" data-qty="input" className="btn btn-sm btn-outline-light input-display"  defaultValue={counter}  title="Qty" placeholder=""/>
                                        <Button variant="outline-light iq-quantity-plus" size="sm" onClick={increase}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className=" bd-heading-1 fade show" id="content-Buttongroup-code" role="tabpanel" aria-labelledby="typo-output">
                                <div className="section-block">
<pre className="language-markup"><code className="language-markup">
{`<div className="bd-example">
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" role="group" aria-label="First group">
            <Button type="button" variant="secondary">1</Button>
            <Button type="button" variant="secondary">2</Button>
            <Button type="button" variant="secondary">3</Button>
            <Button type="button" variant="secondary">4</Button>
        </ButtonGroup>
        <div className="btn-group me-2" role="group" aria-label="Second group">
            <Button type="button" variant="secondary">5</Button>
            <Button type="button" variant="secondary">6</Button>
            <Button type="button" variant="secondary">7</Button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
            <Button type="button" variant="secondary">8</Button>
        </div>
    </div>
</div>
<div className="bd-example">
    <div className="btn-group" role="group" aria-label="Basic example">
        <Button type="button" variant="primary">Home</Button>
        <Button type="button" variant="outline-primary">Profile</Button>
        <Button type="button" variant="outline-primary">Message</Button>
    </div>
</div>
<div className="bd-example">
    <div className="btn-group-vertical" role="group" aria-label="Basic example">
        <Button type="button" variant="primary">Home</Button>
        <Button type="button" variant="outline-primary">Profile</Button>
        <Button type="button" variant="outline-primary">Message</Button>
    </div>
</div>
<div className="bd-example">
    <div className="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
        <Button variant="outline-primary iq-quantity-minus" size="sm" onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
            </svg>
        </Button> 
        <input type="text" data-qty="input" className="btn btn-sm btn-outline-primary input-display" disabled value={counter}  title="Qty" placeholder=""/>
        <Button variant="outline-primary iq-quantity-plus" size="sm" onClick={increase}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
            </svg>
        </Button>
    </div>
    <div className="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
        <Button variant="outline-secondary iq-quantity-minus" size="sm" onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
            </svg>
        </Button> 
        <input type="text" data-qty="input" className="btn btn-sm btn-outline-secondary input-display" disabled value={counter}  title="Qty" placeholder=""/>
        <Button variant="outline-secondary iq-quantity-plus" size="sm" onClick={increase}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
            </svg>
        </Button>
    </div>
    <div className="btn-group iq-qty-btn" data-qty="btn" role="group">
        <Button variant="outline-light iq-quantity-minus" size="sm" onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
            </svg>
        </Button> 
        <input type="text" data-qty="input" className="btn btn-sm btn-outline-light input-display" disabled value={counter}  title="Qty" placeholder=""/>
        <Button variant="outline-light iq-quantity-plus" size="sm" onClick={increase}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
            </svg>
        </Button>
    </div>
</div>
`}
</code></pre>
                                </div>                        
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Card>
            </article>
         </Fragment>
    )
})

ButtonGroups.displayName="ButtonGroups"
export default ButtonGroups;