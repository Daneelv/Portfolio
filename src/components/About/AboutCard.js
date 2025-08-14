import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Daneel van Tonder </span>
            from <span className="blue"> Cape Town, South Africa.</span>
            <br />
            Daneel Add Text hier
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="blue">
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Daneel van Tonder</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
