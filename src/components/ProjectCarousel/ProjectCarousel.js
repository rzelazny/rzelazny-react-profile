import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import socialUnderground from "../images/socialUnderground.png";
import employeeDirectory from "../images/employee_directory.png";
import weatherDashboard from "../images/weatherDashboard.png";

const items = [
    {
        src: socialUnderground,
        altText: 'Slide 1',
        header: "The Social Underground",
        caption: "A full stack gaming application. Login and find a table with friends. Play blackjack against the house, or challenge friends to a game of rock, paper, scissors via webcam. Live chat logs and more."
    },
    {
        src: employeeDirectory,
        altText: 'Slide 2',
        header: "Employee Directory",
        caption: "A React based employee directory. Sort employees by name, or filter for specific employees using the filter function."
    },
    {
        src: weatherDashboard,
        altText: 'Slide 3',
        header: "Weather Dashboard",
        caption: "Enter a city for the current conditions and a 5 day forecast via the openweathermap API. Stores searches locally for ease of use."
    }
];

{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="assets/images/socialUnderground.png" alt="Social Underground - social gaming" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Social Underground</h5>
                                <p></p>
                                <a href="https://social-underground-bc.herokuapp.com/" target="_blank">Login and play games here</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="assets/images/weatherDashboard.png" alt="Weather API dashboard" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Weather Dashboard</h5>
                                <p></p>
                                <a href="https://rzelazny.github.io/weatherApp" target="_blank">Get the forecast here</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="assets/images/Look4ward2It.png" alt="Look4ward2It calendar app" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Look4ward2It Calendar</h5>
                                <p>Calendar app that uses numerous APIs to find upcoming events based on user interests. Allows email alerts, custom themes, and contains a new user walkthrough.</p>
                                <a href="https://rzelazny.github.io/Look4wardToIt" target="_blank">Find something to look forward to</a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}

const ProjectCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="d-block w-100" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default ProjectCarousel;

