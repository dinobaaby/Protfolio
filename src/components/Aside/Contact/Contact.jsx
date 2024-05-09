import { BiDownload, BiLocationPlus, BiPhone } from "react-icons/bi";
import "./Contact.css";
import ContactItem from "./ContactItem";
import { TfiEmail } from "react-icons/tfi";
import { FcDataEncryption } from "react-icons/fc";

export default function Contact() {
  return (
    <>
      <div className="aside-contact">
        <ContactItem icon={<BiPhone />} title={"Phone"} des={"+84332864943"} />
        <ContactItem
          icon={<TfiEmail />}
          title={"Email"}
          des={"trinhhieu758@gmail.com"}
        />
        <ContactItem
          icon={<BiLocationPlus />}
          title={"Location"}
          des={"Hanoi, Vietnam"}
        />
        <ContactItem
          icon={<FcDataEncryption />}
          title={"Birthday"}
          des={"26 November 2003"}
        />
      </div>
      <div className="aside-contact-cv">
        <button>
          <BiDownload /> DOWNLOAD CV
        </button>
      </div>
    </>
  );
}
