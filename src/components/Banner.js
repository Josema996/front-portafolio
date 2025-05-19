import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CvFinalAlmendro from '../assets/img/CV_AlmendroJoseFinal.pdf'
import {saveAs} from 'file-saver'

export const Banner = () => {


    const [loopNum, setLooNum] =useState(0);
    const [isDeleting, setIsDeleting] =useState(false);
    const toRotate = ["Full Stack Developer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta]  = useState(300- Math.random() * 100);
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLooNum(loopNum + 1);
            setDelta(500);
        }
    }

    const handleClickCV = () => {
        const AlmendroCV = "CVJosema.pdf"
        saveAs(CvFinalAlmendro, AlmendroCV)
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi i m Jose M. Almendro - `}<span className="wrap">{text}</span></h1>
                        <p>
                        👨‍💻 ¡Hola! Soy desarrollador Full Stack con formación en Henry y la UTN, y experiencia en proyectos web con tecnologías como JavaScript, React, Node.js y .NET. Me apasiona crear soluciones funcionales, con foco en la experiencia del usuario y el rendimiento. 🚀
🌐 En este portafolio encontrarás aplicaciones web, sistemas de gestión y otros proyectos desarrollados con compromiso y dedicación.
🤝 Estoy abierto a colaborar en desafíos que impulsen la innovación. ¡Conectemos!
                        </p>
                        <button onClick={handleClickCV} className="vvd">Descargar CV<ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                     <TrackVisibility>
                         {({ isVisible }) =>
                         <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                             <img src={headerImg} alt="Header Img"/>
                         </div>}
                     </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}