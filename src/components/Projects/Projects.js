import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sidebar from "../../Assets/Projects/sidebar.png";
import profilecard from "../../Assets/Projects/profile_card.png";
import webproject from "../../Assets/Projects/webProject.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webproject}
              isBlog={false}
              title="College Web Project"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/shekhar7373"
              demoLink="https://shekhar7373.github.io/Web-Technology-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidebar}
              isBlog={false}
              title="Sidebar Transition"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/shekhar7373"
              demoLink="https://shekhar7373.github.io/Sidebar-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profilecard}
              isBlog={false}
              title="Profile Card for Fun"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of profile_ards of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the profilecard of a person."
              ghLink="https://github.com/shekhar7373"
              demoLink="https://shekhar7373.github.io/Profile-Card/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
