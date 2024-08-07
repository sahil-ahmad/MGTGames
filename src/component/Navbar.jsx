import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SwipeableTemporaryDrawer from "./resnav";
import SwipeableTemporaryDrawer2 from "./resnav2";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaVimeo,
  FaSkype,
  FaRss,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { IoIosInformationCircle } from 'react-icons/io';
import game_name from "../component/allgames/Assets/game_name";
import game_name_second from "../component/allgames/Assets/game_name_second";
import Item from "./allgames/Item";
const Navbar = () => {
  const navigate = useNavigate();
  const [isAllGamesHovered, setAllGamesHovered] = useState(false);

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
                <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  <img
                    src="images/MG-logo.png"
                    style={{ width: "150px"}}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-top">
                <div className="header-top-area">
                  <ul className="left">
                    <li  >
                      <MdEmail />

                      <a href="mailto:MGtgames74@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span style={{ color: "black" }}>MGtgames74@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <FaMapMarkerAlt />
                      <a style={{ color: "black" }} href="https://www.google.com/maps/place/Mumbai, Maharashtra">

                        Mumbai, Maharashtra
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icons d-flex align-items-center">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61554742063668" className="fb">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/raahibet/" className="twitter">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href=" https://t.me/+FJd9R7wUt3dkY2M1" className="vimeo">
                        <FaTelegram />
                      </a>
                    </li>

                    <li>
                      <a href="https://wa.me/+918619811154" className="rss">
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <a onClick={() => navigate("/")}>
                      <img src="images/MG-logo.png" alt="logo" />
                    </a>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/About")}
                        >
                          About
                        </a>
                      </li>
                      {/* <li>
                        <a
                          style={{ cursor: "pointer",color:"black" }}
                          onClick={() => navigate("/Tournament")}
                        >
                          Tournament
                        </a>
                      </li> */}
                      {/* <li
                        className="ALL-Games"
                        onMouseEnter={() => setAllGamesHovered(true)}
                        onMouseLeave={() => setAllGamesHovered(false)}
                      >
                        <a
                          style={{ cursor: "pointer",color:"black" }}
                          onClick={() => navigate("/OurAllGames")}
                        >
                          All Games
                        </a>
                        {isAllGamesHovered && (
                          <div className="all-games-dropdown">
                            
                            <ul>
                                {game_name.map((list, index) => {
                                  return (
                                    <Link to={`/AllGame/${list.name.split(" ").join("_")}`}>
                                      <li>{list.name}</li>
                                    </Link>
                                  );
                                })}

                             
                            </ul>
                            <ul>
                              {game_name_second.map((list, index) => {
                                return (
                                  <Link to={`/AllGame/${list.name.split(" ").join("_")}`}>
                                    <li>{list.name}</li>
                                  </Link>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li> */}
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/Contact")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <li className="ResNav">
                      <SwipeableTemporaryDrawer />
                    </li>
                    <li className="ResNav2">
                      <SwipeableTemporaryDrawer2 />
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
