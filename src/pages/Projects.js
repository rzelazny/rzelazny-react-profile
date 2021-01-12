import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel";


function Projects() {

    return (
        <Container fluid className="container">
            <Col lg="12">
                <ProjectCarousel />
                <hr />
                <p className="text-center" target="_blank">Or check out everything I've done on <a href="https://www.github.com/rzelazny">GitHub </a></p>
            </Col>
        </Container>
    );
}


export default Projects;
