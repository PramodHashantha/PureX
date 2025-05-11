import React, { useState, useEffect } from "react";
import "./AboutUsCard.css";
import img1 from "../Icon/person1.webp";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function AboutUsCard() {
  const [items] = useState([
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 1",
        name: "person 1",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 2",
        name: "person 2",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 3",
        name: "person 3",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 4",
        name: "person 4",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 4",
        name: "person 4",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 4",
        name: "person 4",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 4",
        name: "person 4",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
  ]);

  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };


  useEffect(() => {
    let timeoutId;

    if (activeCard !== null) {
      timeoutId = setTimeout(() => {
        setActiveCard(null);
      }, 8000);
    }

    return () => clearTimeout(timeoutId);
  }, [activeCard]);

  return (
    <div className="full-page" >
      <div className="aboutUs-main-container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="card-container"
            onClick={() => handleFlip(index)}
          >
            <div className={`card ${activeCard === index ? "cardFlip" : ""}`}>
              <span className="ribbon">
              </span>
              <div className="card-inner">
                {/* front */}
                <div className="front">
                  <div className="profilePic-container">
                    <span className="profileBackground"></span>
                    <img
                      src={item.profile.picture}
                      className="profilePic"
                      alt="profile"
                    />
                  </div>
                  <h1 className="name">{item.profile.name}</h1>
                  <h5 className="position">{item.profile.position}</h5>
                  <div className="social-icons" onClick={handleLinkClick}>
                    <a href={item.social.linkedin} target="_" className="linkedin">
                      <BsLinkedin />
                    </a>
                    <a href={item.social.twitter} target="_" className="twitter">
                      <BsTwitter />
                    </a>
                    <a href={item.social.facebook} target="_" className="facebook">
                      <BsFacebook />
                    </a>
                  </div>
                </div>

                {/* back */}
                <div className="back">
                  <h1>Description</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsCard;
