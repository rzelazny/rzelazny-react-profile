import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';


function Projects() {

    return (
        <Container fluid className="container">
            <div class="col-lg-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="assets/images/socialUnderground.png" alt="Social Underground - social gaming" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Social Underground</h5>
                                <p>A full stack gaming application. Login and find a table with friends. Play blackjack against the house, or challenge friends to a game of rock, paper, scissors via webcam. Live chat logs and more.</p>
                                <a href="https://social-underground-bc.herokuapp.com/" target="_blank">Login and play games here</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="assets/images/weatherDashboard.png" alt="Weather API dashboard" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Weather Dashboard</h5>
                                <p>Enter a city for the current conditions and a 5 day forecast via the openweathermap API. Stores searches locally for ease of use.</p>
                                <a href="https://rzelazny.github.io/weatherApp" target="_blank">Get the forecast here</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="assets/images/Look4ward2It.png" alt="Look4ward2It calendar app" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Look4ward2It Calendar</h5>
                                <p>Calendar app that uses numerous APIs to find upcoming events based on user interests. Allows email alerts, custom themes, and contains a new user walkthrough.</p>
                                <a href="https://rzelazny.github.io/Look4wardToIt" target="_blank">Find something to look forward to</a>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <hr />
                <p class="text-center" target="_blank">Or check out everything I've done on <a href="https://www.github.com/rzelazny">GitHub </a></p>
            </div>
        </Container>
    );
}


export default Projects;
