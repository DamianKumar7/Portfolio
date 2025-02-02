import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mainak Kumar </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently employed as a software developer at PineLabs.
            <br />
            I have completed B.Tech in Computer Science and Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You miss 100% of the shots you don't take."{" "}
          </p>
          <footer className="blockquote-footer">Wanyne Gretzky</footer>
          <footer className="blockquote-footer">Michael Scott</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
