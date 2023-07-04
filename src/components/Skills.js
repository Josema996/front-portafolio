import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "../assets/img/React.svg"
import Python from "../assets/img/Python.svg"
import PostgredSql from "../assets/img/PostgreSql.svg"
import Nodejs from "../assets/img/NodeJs.svg"
import MySql from "../assets/img/MySql.svg"
import JavaScript from "../assets/img/JavaScript.svg"
import Java from "../assets/img/Java.svg"
import Git from "../assets/img/Git.svg"
import CShart from "../assets/img/CShart.svg"
import Angular from "../assets/img/Angular.svg"
import Css from "../assets/img/Css.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>These are some of my skills.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={React} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={PostgredSql} alt="Image" />
                                    <h5>PostgredSql</h5>
                                </div>
                                <div className="item">
                                    <img src={Nodejs} alt="Image" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img src={MySql} alt="Image" />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={JavaScript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={Java} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={CShart} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={Git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={Angular} alt="Image" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={Css} alt="Image" />
                                    <h5>Css</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}