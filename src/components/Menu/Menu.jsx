import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";
import menuDatas from "./menu_items";
import { useState } from "react";

export default function Menu() {
  const [isChoose, setIsChoose] = useState(0);

  const handleFc = (index) => {
    setIsChoose(index);
  };
  return (
    <div className="menu-header">
      {menuDatas.map((item, index) => {
        return (
          <MenuItem
            link={item.link}
            icon={item.icon}
            lable={item.lable}
            key={index}
            isActive={isChoose === index}
            handleClick={() => handleFc(index)}
          />
        );
      })}
    </div>
  );
}
