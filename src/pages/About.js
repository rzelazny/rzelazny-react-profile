import React, { useEffect, useState } from "react";
import { Container, Row, Col, Media} from 'reactstrap';

import Headshot from "../components/images/headshot.jpg";
import Rutgers from "../components/images/Rutgers.png";
import PSU from "../components/images/PSU.png";

function About() {

    return (
        <Container fluid className="container">
            <Row>
                {/* <!-- Headshot column --> */}
                <Col md="3">
                    <img src={Headshot} alt="Ryan Zelazny headshot" className="img-fluid mx-auto d-block" id="headshot"/>
                </Col>
                {/* <!-- About me text column --> */}
                <Col md="9">
                    <header>
                        <h2>About Me</h2>
                        <hr />
                    </header>
                    <p>A software developer by trade, I live in upstate New York with my wife and two dogs. I enjoy cooking, board games with friends, and the occasional trip abroad when there isn't a global pandemic.</p>
                    <p>Recently I've been expanding my skill set. Through Rutger University's coding bootcamp, I've been learning about full stack development. We're currently studying React.js. </p>
                    <header>
                        <h2>Experience and Skills</h2>
                    </header>
                    <p>Ten years working in the insurance industry has left me with more than coding experience. I'm able to bridge the communication gap between highly technical
                            users and less tech saavy business users.</p>
                    <p>I'm used to working with tight deadlines that can shift abruptly with new regulations. It's made me flexible and skilled at adjusting project plans on the fly.</p>
                    <header>
                        <h2>Education</h2>
                    </header>
                    {/* <!-- Education Row 1 --> */}
                    <Row>
                        <Col md="1">
                            <img src={Rutgers} className="img-fluid mx-auto d-block icon" alt="Rutgers Icon" />
                        </Col>
                        <Col md="11">
                            <p>Rutgers University - Coding Bootcamp</p>
                        </Col>
                    </Row>
                    {/* <!-- Education Row 2 --> */}
                    <Row>
                        <Col md="1">
                            <img src={PSU} className="img-fluid mx-auto d-block icon" alt="PSU Icon" />
                        </Col>
                        <Col md="11">
                            <p>Pennsylvania State University - Bachelor of Information Science and Technology</p>
                        </Col>
                    </Row>
                    <h2>Technologies and Languages</h2>
                    <p>React, Node, Express, Bootstrap, JavaScript, SQL, NoSQL, StepWise, VBA</p>
                </Col>
            </Row>
        </Container>
    );
}


export default About;
