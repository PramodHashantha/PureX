import React from "react";
import { useEffect, useState } from "react";
import { IoMdRocket } from "react-icons/io";

function BackToTop(){
    const[backToTop,setBackToTop] = useState(false);


    useEffect(() =>{
    window.addEventListener("scroll",() => {
        if (window.scrollY > 200){
            setBackToTop(true);
        } else {
            setBackToTop(false);
        }
    });
}, []);


const scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};

return (
  <div className="BackToUp">
    {backToTop && (
      <button
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          height: "45px",
          width: "45px",
          fontSize: "35px",
          fontWeight: "900",
          border: "none",
          borderRadius: "50%",
          zIndex: "3333333",
          backgroundColor: "white",
          color: "#808B96",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
        }}
        onClick={scrollUp}
      >
        <IoMdRocket />
      </button>
    )}
  </div>
);
}
export default BackToTop;