import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="blue">Daneel van Tonder </span>
            from <span className="blue"> Cape Town, South Africa.</span>
            <br />
            <br />
            I’m a software developer specialising in modern web applications,
            automation solutions, and integrations that help businesses
            streamline operations, work more efficiently, and save valuable
            time.
            <br />
            <br />I solve real-world problems by creating clean, efficient, and
            scalable solutions using{" "}
            <span className="blue"> Next.js, React, Node.js, and n8n</span>
            .&nbsp;Turning ideas into functional, user-friendly products.
            <br />
            <br />
            🎓 BSc in Computer Systems — Heriot-Watt University, UK <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Exploring new tech trends 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling and discovering new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Exploring the outdoors (mountain biking,
              hiking, etc.) 🚵‍♂️
            </li>
          </ul>
          <br />
          <p className="blue">
            “Creating smart, simple solutions for real-world challenges.”
          </p>
          <footer className="blockquote-footer">Daneel van Tonder</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
