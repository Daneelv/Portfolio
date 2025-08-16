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
              description="A full-featured eCommerce platform with integrated payment gateways such as PayPal and Stripe. Developed using Next.js, Shadcn UI components, Zod, Prisma, PostgreSQL, and TypeScript."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="shoply-tan.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ticketLogger}
              isBlog={false}
              title="Ticket Logger"
              description="Ticket Logging System. users can log, view and close tickets. This application is built with Next.js, Sentryio for log monitoring and Tailwindcss. Postgres is used as the database engine."
              ghLink="https://github.com/Daneelv/ticket-logger"
              demoLink="https://ticket-logger-silk.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={rentaprop}
              isBlog={false}
              title="Rent a Prop"
              description="A Property Rental platform where users can list their properties for both short-term and long-term rentals. Visitors can save their favorite listings by starring them. The platform is built with Next.js, Tailwind CSS, and MongoDB, with authentication and user management handled via Google login through NextAuth."
              ghLink="https://github.com/Daneelv/rent-a-prop"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bootstrapSite}
              isBlog={false}
              title="Become a web developer"
              description="A showcase webpage created as a template for a 'Become a Web Developer' course. Built with Bootstrap, it highlights responsive design principles, grid layouts, and reusable components, serving as a demonstration of front-end development best practices."
              ghLink="https://github.com/Daneelv/Bootstrap-One-Pager-Website"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={shoeSite}
              isBlog={false}
              title="Amazing Shoes"
              description="A modern, responsive landing page designed for a shoe brand. Developed using HTML, JavaScript, and SASS, it emphasizes clean UI design, interactive elements, and optimized styling to showcase products effectively and enhance user engagement."
              ghLink="https://github.com/Daneelv/Shoe-Landing-Page"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={devspace}
              isBlog={false}
              title="Devspace Blog"
              description="A developer-focused blog platform built with Next.js. Users can categorize blog posts, navigate seamlessly between articles, and load more posts on demand. All posts are stored as Markdown files, eliminating the need for a database while keeping content management simple and efficient."
              ghLink="https://github.com/Daneelv/Nextjs-devspace-blog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
