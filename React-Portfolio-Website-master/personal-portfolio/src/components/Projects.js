import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/OIP.jpg";
import projImg2 from "../assets/img/quiz.jpg";
import projImg3 from "../assets/img/1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
export const Projects = () => {
    const projects = [
        {
          title: "Pipe",
          description: "Design & A system work",
          imgUrl: projImg1,
          websiteLink: "https://github.com/Keer528/html-css-bs-js",
          icons: [
            {
              icon: faGithub,
              link: "https://github.com/Keer528/Keer528",
            },]
        },
        {
          title: "Quiz",
          description: "Design & An question  answer sysytem",
          imgUrl: projImg2,
          websiteLink: "https://github.com/Keer528/html-css-bs-js",
          icons: [
            {
              icon: faGithub,
              link: "https://github.com/Keer528/html-css-bs-js",
            },]
        },
        {
          title: "Portfolio",
          description: "A portfolio website",
          icons: [
    
            {
              icon: faGithub,
              link: "https://github.com/Keer528/react-portfolio",
            },
    
          ],
          websiteLink: "https://github.com/Keer528/react-portfolio",
          imgUrl: projImg3,
        },
      ];

      return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                          This  is my Project
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab Three
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    Key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane> */}
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>

      )
}