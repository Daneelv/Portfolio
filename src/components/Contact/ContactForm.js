import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        navigate("/");
      }

      return () => clearInterval(timer);
    }
  }, [submitted, countdown, navigate]);

  return (
    <section className="contact-section" id="contact">
      {/* Background particles */}
      <div className="particle-background">
        <Particle />
      </div>

      {/* Foreground content */}
      <Container className="contact-content">
        <Row>
          <Col md={12} className="contact-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Get In<strong className="blue"> Touch</strong>
            </h1>
            <p style={{ color: "white", padding: "0 25% 0 25%" }}>
              I’d love to hear from you!&nbsp; Whether you just want to say
              hello or share a thought, feel free to drop me a message below.
            </p>

            <div className="contact-form-wrapper">
              {!submitted ? (
                <form
                  action="https://formsubmit.co/el/mivonu"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="contact-form"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="form-textarea"
                  ></textarea>
                  <button type="submit" className="form-button">
                    Send
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <p>Thanks! Your message has been sent.</p>
                  <p>Redirecting to home in {countdown} seconds...</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
