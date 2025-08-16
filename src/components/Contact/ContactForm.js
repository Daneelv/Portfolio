import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useNavigate, Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!submitted) return;
    if (countdown === 0) {
      navigate("/");
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [submitted, countdown, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;

    // Trigger HTML5 validation
    if (!form.checkValidity()) {
      // shows browser validation messages
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    //validate phone number if any entered
    const phone = formData.get("phone");
    if (phone && !/^\+?[0-9\s\-()]{7,20}$/.test(phone)) {
      const phoneInput = form.querySelector("#phone");
      phoneInput.setCustomValidity("Please enter a valid phone number.");
      phoneInput.reportValidity();

      // Clear the error when the user modifies the field
      // For next time user enters the number
      phoneInput.addEventListener(
        "input",
        () => {
          phoneInput.setCustomValidity("");
        },
        { once: true }
      );
      return;
    }

    const name = formData.get("name") || "Someone";

    formData.set(
      "_subject",
      `Daneel van Tonder Software Developer | message from ${name}`
    );

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/0caca4cec1701018efd17472de9172f2",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || `Request failed: ${res.status}`);
      }

      form.reset();
      setSubmitted(true);
      setCountdown(10);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="particle-background">
        <Particle />
      </div>

      <Container className="contact-content">
        <Row>
          <Col md={12} className="contact-header">
            <h1 className="contact-heading">
              Get In<strong className="blue"> Touch</strong>
            </h1>
            <p className="contact-paragraph">
              I’d love to hear from you! Whether you just want to say hello or
              share a thought, feel free to drop me a message below.
            </p>

            <div className="contact-form-wrapper">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name<span className="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email<span className="required">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message<span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                      className="form-textarea"
                    />
                  </div>

                  {/* honeypot anti-bot field */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  <button type="submit" className="form-button">
                    Send <FiSend />
                  </button>

                  {error && (
                    <p className="error" style={{ marginTop: 12 }}>
                      {error}
                    </p>
                  )}
                </form>
              ) : (
                <div className="success-message">
                  <p>✅ Thanks! Your message has been sent.</p>
                  <p>Redirecting to home in {countdown} seconds...</p>
                  <p>
                    Don’t want to wait? <Link to="/">Go back home</Link>.
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
