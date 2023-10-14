import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const [mobileView, setmobileView] = useState(false);

  const navbarItem = [
    { Homeicon: AiOutlineHome, title: "Home" },
    { ProfileIcon: CgProfile, title: "Profile" },
  ];

  return <div>Navbar</div>;
};
