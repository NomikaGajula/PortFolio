import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nomika Gajula </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br></br>
            <br /> I am a Final Year student pursuing B.Tech
            in Computer Science and Engineering.
            <br /><br></br>
            Additionally, I am enthusiastic about Machine Learning and Data Science.
            <br />
            <br />
            My pronouns are <i><b>Randomness Specialist / Professional Dabbler</b></i>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
