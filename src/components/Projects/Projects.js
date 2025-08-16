import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bootstrapSite from "../../Assets/Projects/learn-to-code.png";
import shoeSite from "../../Assets/Projects/amazing-shoes.png";
import ticketLogger from "../../Assets/Projects/ticket-logger.png";
import rentaprop from "../../Assets/Projects/rent-a-prop.png";
import devspace from "../../Assets/Projects/dev-space.png";
import shoply from "../../Assets/Projects/shoply.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={shoply}
              isBlog={false}
              title="Shoply"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="shoply-tan.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={rentaprop}
              isBlog={false}
              title="Rent a Prop"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Daneelv/rent-a-prop"
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ticketLogger}
              isBlog={false}
              title="Ticket Logger"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Daneelv/ticket-logger"
              demoLink="https://ticket-logger-silk.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bootstrapSite}
              isBlog={false}
              title="Become a web developer"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Daneelv/Bootstrap-One-Pager-Website"
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={shoeSite}
              isBlog={false}
              title="Amazing Shoes"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Daneelv/Shoe-Landing-Page"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={devspace}
              isBlog={false}
              title="Devspace Blog"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Daneelv/Nextjs-devspace-blog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
