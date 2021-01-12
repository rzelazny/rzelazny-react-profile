import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';

import GitHub from "../components/images/GitHub.png";
import LinkedIn from "../components/images/LinkedIn.png";


function Contact() {

    function downloadResume(){
        // event.preventDefault();
        window.location.href = "./assets/files/Zelazny Resume.pdf";
    }

    return (
        <Container fluid className="container">
            <Row>
                <Col className="col-md-12">
                    <header className="text-center">
                        <h2>Contact Me</h2>
                        <hr />
                    </header>
                    <p>You can contact me via email at RyanZelazny@gmail.com or via a message on LinkedIn or GitHub</p>
                    <br />
                    {/* <!-- Contact Row 1 --> */}
                    <Row>
                        <Col xs="1">
                            <img src={GitHub} className="img-fluid icon" alt="GitHub icon" />
                        </Col>
                        <Col xs="11">
                            <a href="https://github.com/rzelazny" target="_blank">My GitHub profile</a>
                        </Col>
                    </Row>
                    <br />
                    {/* <!-- Contact Row 2 --> */}
                    <Row>
                        <Col xs="1">
                            <img src={LinkedIn} className="img-fluid mx-auto d-block icon" alt="LinkedIn Icon" />
                        </Col>
                        <Col xs="11">
                            <a href="https://www.linkedin.com/in/ryan-zelazny/" target="_blank">My LinkedIn profile</a>
                        </Col>
                    </Row>
                    <br />
                </Col>
            </Row>
            <div class="text-center">
                <a href="#" class="btn" id="resume-download" onClick={downloadResume}><i class="fa fa-download"></i> Download Resume</a>
                <br />
            </div>
        </Container>
    );
}


export default Contact;
