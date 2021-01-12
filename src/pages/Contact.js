import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';

import GitHub from "../components/images/GitHub.png";
import LinkedIn from "../components/images/LinkedIn.png";
import DownloadBtn from "../components/DownloadBtn/DownloadBtn";

function Contact() {

    // function downloadResume(response) {
    //     // event.preventDefault();
    //     //<a href="../components/files/Zelazny Resume.pdf" download />
    //     //window.location.href = "../components/files/Zelazny Resume.pdf";
    //     fileDownload(data, 'filename.csv');
    // }

    return (
        <Container fluid className="container">
            <Row>
                <Col className="col-md-12">
                    <header className="text-center">
                        <h2>Contact Me</h2>
                        <hr />
                    </header>
                    <p>You can contact me via email at RyanZelazny@gmail.com or message me on LinkedIn or GitHub:</p>
                    <br />
                    {/* <!-- Contact Row 1 --> */}
                    <Row>
                        <Col xs="1">
                            <img src={GitHub} className="img-fluid mx-auto d-block link-icon" alt="GitHub icon" />
                        </Col>
                        <Col xs="11">
                            <a href="https://github.com/rzelazny" target="_blank">My GitHub profile</a>
                        </Col>
                    </Row>
                    <br />
                    {/* <!-- Contact Row 2 --> */}
                    <Row>
                        <Col xs="1">
                            <img src={LinkedIn} className="img-fluid mx-auto d-block link-icon" alt="LinkedIn Icon" />
                        </Col>
                        <Col xs="11">
                            <a href="https://www.linkedin.com/in/ryan-zelazny/" target="_blank">My LinkedIn profile</a>
                        </Col>
                    </Row>
                    <br />
                </Col>
            </Row>
            <div className="text-center">
                <DownloadBtn />
                {/* <a href="#/contact" class="btn" id="resume-download" onClick={downloadResume}><i class="fa fa-download"></i> Download Resume</a> */}
                <br />
            </div>
        </Container>
    );
}


export default Contact;
