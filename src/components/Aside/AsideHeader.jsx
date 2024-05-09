import avatar from "../../assets/avatar.jpg";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function AsideHeader() {
  return (
    <div className="aside-header">
      <div className="aside-header__avatar">
        <img src={avatar} />
      </div>
      <div className="aside-header-info">
        <h3>
          <b>Dino_Baby</b>
        </h3>
        <p>Fullstack deverloper</p>
      </div>
      <div className="aside-header-social-items">
        <BsGithub />
        <BsLinkedin />
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
      </div>
    </div>
  );
}
