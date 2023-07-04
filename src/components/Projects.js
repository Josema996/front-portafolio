import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.jpg"
import projImg2 from "../assets/img/project-img2.jpg"
import projImg3 from "../assets/img/project-img3.jpg"
import projImg4 from "../assets/img/project-img4.jpg"
import projImg5 from "../assets/img/project-img5.jpg"
import projImg6 from "../assets/img/project-img6.jpg"
import projImg7 from "../assets/img/project-img7.jpg"
import projImg8 from "../assets/img/project-img8.jpg"
import projImg9 from "../assets/img/project-img9.jpg"
import projImg10 from "../assets/img/project-img10.jpg"
import projImg11 from "../assets/img/project-img11.jpg"
import projImg12 from "../assets/img/project-img12.jpg"
import projImg13 from "../assets/img/project-img13.jpg"
import projImg14 from "../assets/img/project-img14.jpg"
import projImg15 from "../assets/img/project-img15.jpg"
import 'animate.css';
import TrackVisibility from "react-on-screen"

export const Projects = () => {

    const projects = [
        {
            title: "Landing Page",
            description: "Welcome and login",
            imgUrl: projImg1
        },
        {
            title: "Products",
            description: "products show",
            imgUrl: projImg2,
        },
        {
            title: "Profile",
            description: "user profile",
            imgUrl: projImg3,
        },
        {
            title: "Collaborators",
            description: "Page developers",
            imgUrl: projImg4,
        },
        {
            title: "Home",
            description: "Home And chatBot",
            imgUrl: projImg5,
        },
        {
            title: "Detail",
            description: "Product Detail",
            imgUrl: projImg6,
        },
        {
            title: "Cart",
            description: "Shopping Cart",
            imgUrl: projImg7,
        },
        {
            title: "Comments and Score",
            description: "Comment only if I buy",
            imgUrl: projImg8,
        },
        {
            title: "Login and Registration",
            description: "Possibility of registration with google",
            imgUrl: projImg9,
        },

    ]

    const projects2 = [
        {
            title: "Home",
            description: "Pokemons and Filters",
            imgUrl: projImg10
        },
        {
            title: "Detail",
            description: "Pokemon Details ",
            imgUrl: projImg11
        },
        {
            title: "Create",
            description: "Pokemon Create ",
            imgUrl: projImg12
        }
    ]

    const projects3 = [
        {
            title: "Login",
            description: "Login BD",
            imgUrl: projImg13
        },
        {
            title: "Home",
            description: "List and Options",
            imgUrl: projImg14
        },
        {
            title: "Create",
            description: "Movie Create ",
            imgUrl: projImg15
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>📚📷 Here you can see a brief description and images of the projects 📷📚</p>
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">🌸Ohana Pastelería🎂</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">🔥⚡️💧Pokémon Project💧⚡️🔥</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">🎥🍿List Movies🍿🎥</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        projects3.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}