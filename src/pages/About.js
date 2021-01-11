import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function About() {
    const [book, setBook] = useState({})


    const { id } = useParams();

    useEffect(() => {

    }, [])

    return (
        <Container fluid>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h1>Synopsis</h1>
                        <p>
                            test
                        </p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/">← Back to Authors</Link>
                </Col>
            </Row>
        </Container>
    );
}


export default About;
