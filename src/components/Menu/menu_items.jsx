import { CiSettings } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import { PiNote, PiPerson } from "react-icons/pi";
import { RxGithubLogo } from "react-icons/rx";

const menuitems = [
  {
    icon: <PiPerson size={20} />,
    lable: "About",
    link: "/",
  },
  {
    icon: <PiNote size={20} />,
    lable: "Resume",
    link: "/resume",
  },
  {
    icon: <CiSettings size={20} />,
    lable: "Works",
    link: "/works",
  },
  {
    icon: <RxGithubLogo size={20} />,
    lable: "Github",
    link: "/github",
  },
  {
    icon: <MdContactPhone size={20} />,
    lable: "Contact",
    link: "/contact",
  },
];
export default menuitems;
