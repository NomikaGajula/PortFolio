import { Container,Row,Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail
  } from "react-icons/ai";
  const Navlinks=({link,tagname})=>{
    return(
    <li className="social-icons">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      {tagname}
    </a>
  </li>
    )
  }
export default function socialmedia(){
    return(
    <Container className="home-about-section" >
         <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <Navlinks link={"https://github.com/NomikaGajula"} tagname={<AiFillGithub />}/>
            <Navlinks link={"https://twitter.com/NomikaGajula"} tagname={<AiOutlineTwitter />} />
            <Navlinks link={"mailto: nomigajula412@gmail.com"} tagname={<AiFillMail />}/>
            <Navlinks link={"https://www.linkedin.com/in/nomika-gajula-00634b225/"} tagname={<AiFillLinkedin />}/>
            <Navlinks link={"https://www.instagram.com/nomika_gajula/"} tagname={<AiFillInstagram />}/>
            </ul>
          </Col>
        </Row>
    </Container>
    )
}