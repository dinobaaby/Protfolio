import { LiaFileCode } from "react-icons/lia";
import CardSkill from "../../components/CardSkill/CardSkill";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-about">
        <span className="home-about-title">About</span>
        <p className="home-about-des">
          I&apos;m a Frontend Developer, I have serious passion for UI effects,
          animations and creating intuitive, dynamic user experiences.
          Let&apos;s make something special
        </p>
      </div>
      <div className="home-skills">
        <span className="home-skills-title">What I Do!</span>
        <div className="home-skill-items">
          <CardSkill icon={<LiaFileCode />} title={"Front-End Development"} />
        </div>
      </div>
    </div>
  );
}
