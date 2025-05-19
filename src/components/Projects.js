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
import projImg16 from "../assets/img/project-img16.png"
import projImg17 from "../assets/img/project-img17.png"
import projImg18 from "../assets/img/project-img18.png"
import projImg19 from "../assets/img/project-img19.png"
import projImg20 from "../assets/img/project-img20.png"
import projImg21 from "../assets/img/project-img21.png"
import projImg22 from "../assets/img/project-img22.png"
import projImg23 from "../assets/img/project-img23.png"
import projImg24 from "../assets/img/project-img24.png"
import projImg25 from "../assets/img/project-img25.png"
import 'animate.css';
import TrackVisibility from "react-on-screen"
import { useRef, useState } from "react";

export const Projects = () => {

  const projects = [
    { title: "Landing Page", description: "Welcome and login", imgUrl: projImg1 },
    { title: "Products", description: "products show", imgUrl: projImg2 },
    { title: "Profile", description: "user profile", imgUrl: projImg3 },
    { title: "Collaborators", description: "Page developers", imgUrl: projImg4 },
    { title: "Home", description: "Home And chatBot", imgUrl: projImg5 },
    { title: "Detail", description: "Product Detail", imgUrl: projImg6 },
    { title: "Cart", description: "Shopping Cart", imgUrl: projImg7 },
    { title: "Comments and Score", description: "Comment only if I buy", imgUrl: projImg8 },
    { title: "Login and Registration", description: "Possibility of registration with google", imgUrl: projImg9 },
  ];

  const projects2 = [
    { title: "Home", description: "Pokemons and Filters", imgUrl: projImg10 },
    { title: "Detail", description: "Pokemon Details ", imgUrl: projImg11 },
    { title: "Create", description: "Pokemon Create ", imgUrl: projImg12 }
  ];

  const projects3 = [
    { title: "Login", description: "Login BD", imgUrl: projImg13 },
    { title: "Home", description: "List and Options", imgUrl: projImg14 },
    { title: "Create", description: "Movie Create ", imgUrl: projImg15 }
  ];

  const projects4 = [
    { title: "Login", description: "Imagen 1", imgUrl: projImg16 },
    { title: "Register", description: "Imagen 2", imgUrl: projImg17 },
    { title: "Panel", description: "Imagen 3", imgUrl: projImg18 },
    { title: "Task delete", description: "Imagen 4", imgUrl: projImg19 },
    { title: "Panel2", description: "Imagen 5", imgUrl: projImg20 },
  ];

  const projects5 = [
    { title: "Login", description: "Imagen 1", imgUrl: projImg21 },
    { title: "Register", description: "Imagen 2", imgUrl: projImg22 },
    { title: "Perfil", description: "Imagen 3", imgUrl: projImg23 },
    { title: "Home", description: "Imagen 4", imgUrl: projImg24 },
    { title: "Download", description: "Imagen 5", imgUrl: projImg25 },
  ];

  const sliderRef1 = useRef();
  const sliderRef2 = useRef();
  const sliderRef3 = useRef();
  const sliderRef4 = useRef();
  const sliderRef5 = useRef();

  const scrollSlider = (ref, direction) => {
    const container = ref.current;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>📚📷 Here you can see a brief description and images of the projects 📷📚</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item><Nav.Link eventKey="first">🌸Ohana Pastelería🎂</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="second">🔥⚡️💧Pokémon Project💧⚡️🔥</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="third">🎥🍿List Movies🍿🎥</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="fourth">🧪 Proyecto 1</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="fifth">⚡ Proyecto 2</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="project-slider-wrapper">
                    <button className="slider-btn left" onClick={() => scrollSlider(sliderRef1, 'left')}>←</button>
                    <div className="project-slider" ref={sliderRef1}>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <button className="slider-btn right" onClick={() => scrollSlider(sliderRef1, 'right')}>→</button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="project-slider-wrapper">
                    <button className="slider-btn left" onClick={() => scrollSlider(sliderRef2, 'left')}>←</button>
                    <div className="project-slider" ref={sliderRef2}>
                      {projects2.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <button className="slider-btn right" onClick={() => scrollSlider(sliderRef2, 'right')}>→</button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="project-slider-wrapper">
                    <button className="slider-btn left" onClick={() => scrollSlider(sliderRef3, 'left')}>←</button>
                    <div className="project-slider" ref={sliderRef3}>
                      {projects3.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <button className="slider-btn right" onClick={() => scrollSlider(sliderRef3, 'right')}>→</button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="project-slider-wrapper">
                    <button className="slider-btn left" onClick={() => scrollSlider(sliderRef4, 'left')}>←</button>
                    <div className="project-slider" ref={sliderRef4}>
                      {projects4.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <button className="slider-btn right" onClick={() => scrollSlider(sliderRef4, 'right')}>→</button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="project-slider-wrapper">
                    <button className="slider-btn left" onClick={() => scrollSlider(sliderRef5, 'left')}>←</button>
                    <div className="project-slider" ref={sliderRef5}>
                      {projects5.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <button className="slider-btn right" onClick={() => scrollSlider(sliderRef5, 'right')}>→</button>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
