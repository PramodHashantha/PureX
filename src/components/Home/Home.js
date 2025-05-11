import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import background from "../../image/background.jpg";
import LogoSVG from "../../image/Logo.svg";

function Home() {
  const [ismobileLinksOpen, setIsmobileLinksOpen] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navbarFontColor, setNavbarFontColor] = useState("#000000");
  const [navbarStyles, setNavbarStyles] = useState({
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
  });

  const dropdownmenuclick = () => {
    setIsmobileLinksOpen(!ismobileLinksOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollDirection(
        currentScrollPosition > prevScrollPosition ? "down" : "up"
      );
      setPrevScrollPosition(currentScrollPosition);

      // Update scroll position
      setScrollPosition(currentScrollPosition);

      // Change the background based on scroll direction only for desktop
      if (window.innerWidth > 1195) {
        if (currentScrollPosition > 80) {
          setIsNavbarScrolled(true);
          setNavbarBackground("#eaf4f4");
          setNavbarStyles({
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          });
        } else {
          setIsNavbarScrolled(false);
          setNavbarBackground("transparent");
          setNavbarFontColor("#333");
          setNavbarStyles({
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          });
        }
      }

      // Close mobile links if open when scrolling up
      if (scrollDirection === "up" && ismobileLinksOpen) {
        setIsmobileLinksOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, ismobileLinksOpen, scrollDirection]);

  const navbarClasses = `nav ${scrollDirection === "down" ? "hidden" : ""} ${
    isNavbarScrolled ? "scrolled" : ""
  } ${ismobileLinksOpen ? "open" : ""}`;

  const navbarStyle = {
    top: scrollDirection === "down" ? "-80px" : "0",
    backgroundColor: navbarBackground,
    color: navbarFontColor,
    ...navbarStyles,
  };

  return (
    <div className="main-container" id="home">
      <motion.div
        initial={{ opacity: 0, filter: "blur(0px)" }}
        whileInView={{ opacity: 0.7, filter: "blur(5px)" }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <img className="backgroundImg" src={background} alt="Background" />
      </motion.div>

      <header className="nav-margin">
        <motion.nav
          className={navbarClasses}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          id="navbar"
          style={navbarStyle}
          viewport={{ once: true }}
        >
          <div className="Logo"></div>
          <div className="linkWithIcon">
            <ul className="main-uls">
              <Link
                to="home"
                spy={true}
                offset={0}
                smooth={true}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  {/* <AiFillHome /> */}
                  Home
                </li>
              </Link>
              <Link
                to="ourprojects"
                spy={true}
                smooth={true}
                offset={5}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  {/* <RiProjectorFill /> */}
                  Our Services
                </li>
              </Link>
              <Link
                to="aboutus"
                spy={true}
                smooth={true}
                offset={5}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  {/* <RiProjectorFill /> */}
                  About us
                </li>
              </Link>
              <Link
                to="ourprojects"
                spy={true}
                smooth={true}
                offset={0}
                duration={900}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  {/*  <FaExclamationCircle /> */}
                  Our Projects
                </li>
              </Link>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  {/* <IoMailOpen /> */}
                  Contact us
                </li>
              </Link>
              <div className="social-icon">
                <a href="/">
                  <img src="./images/link.png" alt="linkedIn" />
                </a>
                <a href="/">
                  <img src="./images/twi.png" alt="Twitter" />
                </a>
                <a href="/">
                  <img src="./images/fb.png" alt="Facebook" />
                </a>
                <a href="/">
                  <img src="./images/insta.png" alt="Instagram" />
                </a>
              </div>
              <div className="dropdownmenu" onClick={dropdownmenuclick}>
                {ismobileLinksOpen ? <FaWindowClose /> : <TiThMenuOutline />}
              </div>
              <div
                className={
                  ismobileLinksOpen ? "mobileLinks open" : "mobileLinks"
                }
              >
                <ul>
                  <a href="Home">
                    <li>
                      {/* <AiFillHome /> */}
                      Home
                    </li>
                  </a>
                  <a href="#OurProjects">
                    <li>
                      {/* <RiProjectorFill /> */}
                      Our Projects
                    </li>
                  </a>
                  <a href="#AboutUs">
                    <li>
                      {/* <FaExclamationCircle /> */}
                      About us
                    </li>
                  </a>
                  <a href="ContactUs">
                    <li>
                      {/* <IoMailOpen /> */}
                      Contact us
                    </li>
                  </a>
                  <div className="social-icon-mobile">
                    <a href="/">
                      <img src="./images/link.png" alt="linkedIn" />
                    </a>
                    <a href="/">
                      <img src="./images/twi.png" alt="Twitter" />
                    </a>
                    <a href="/">
                      <img src="./images/fb.png" alt="Facebook" />
                    </a>
                    <a href="/">
                      <img src="./images/insta.png" alt="Instagram" />
                    </a>
                  </div>
                </ul>
              </div>
            </ul>
          </div>
        </motion.nav>
      </header>
      <motion.div
        className="Middle-section"
        initial={{ opacity: 0, scale: 0.6, filter: "blur(5px)" }}
        whileInView={{ opacity: 1.5, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.8, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="LogoAndTitleContainer">
        <div className="leftSide">
          <img src={LogoSVG} alt="Logo" className="LogoSvgBG" />
        </div>
        <div className="rightSide">
          <div className="companyName">
            PURE-<span>X</span>
          </div>
          <div className="slogan">SOLUTIONS</div>
        </div>
        </div>
        <motion.div
          className="Bottom-section"
          initial={{ opacity: 0, scale: 0.6, filter: "blur(5px)" }}
          whileInView={{ opacity: 1.5, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Link
            to="contactus"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <li
              className={`contactUsButton ${
                scrollPosition >= 50 ? "scrolled" : ""
              }`}
            >
              Contact Us
            </li>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
