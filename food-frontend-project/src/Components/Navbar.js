/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo.jpg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = ({ onLoginClick }) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.classList.add("transparent", "scrolled");
      } else {
        navbar.classList.remove("transparent", "scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "#home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "#about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      link: "#testimonials",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "#contact",
    },
    {
      text: "Sign-in/Sign-up",
      icon: <LoginIcon />,
      isbutton: true,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <button className="primary-button" onClick={onLoginClick}>
          Sign-in/Sign-up
        </button>
      </div>
      <div className="navbar-menu-container">
 
        {menuOptions.map((item) => (
          <a key={item.text} href={item.link}>
            {item.text}
          </a>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component= "a" href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;