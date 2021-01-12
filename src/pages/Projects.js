import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";


function Projects() {

    return (
        <Container fluid>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h1>Projects</h1>
                        <p>
                            test
                        </p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <a to="/">← Back to Authors</a>
                </Col>
            </Row>
        </Container>
    );
}


export default Projects;
