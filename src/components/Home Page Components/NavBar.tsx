import React, { useEffect, useState } from "react";

function ScrollOpacityElement() {
  const [opacity, setOpacity] = useState(0);
  const [Pcolor, setPcolor] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Define the threshold at which you want to change the opacity
    const opacityThreshold = 100; // Adjust this value to your needs

    // Calculate the new opacity value
    const newOpacity = Math.min(1, scrollPosition / opacityThreshold);

    // Update the opacity state
    setOpacity(newOpacity);
    if (scrollPosition > opacityThreshold) {
      setPcolor(true);
    } else {
      setPcolor(false);
    }
  };

  return (
    <>
      <div
        className="HomePageNavBar_Container"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
      >
        <div>
          <img
            className="makeHoverable"
            src="/images/PLM_Logo.png"
            alt="img not found"
          />
          <div>
            <h4 style={{ color: "var(--Yellow)" }}>
              PAMANTASAN NG LUNGSOD NG MAYNILA
            </h4>
            <h5 style={{ color: Pcolor ? "#686868" : "white" }}>
              UNIVSERSITY OF THE CITY OF MANILA
            </h5>
          </div>
        </div>
        <div>
          <div style={{ color: " #686868" }}>
            <a className="makeHoverable">Students</a>
            <a className="makeHoverable">Faculty</a>
            <a className="makeHoverable">Alumni</a>
            <a className="makeHoverable">Events</a>
            <a className="makeHoverable">Downloads</a>
            <img
              className="makeHoverable"
              src="/images/SearchIcon.png"
              alt="img not found"
            />
          </div>
          <div>
            <a className="makeHoverable">About</a>
            <a className="makeHoverable">Academics</a>
            <a className="makeHoverable">Admission</a>
            <a className="makeHoverable">News</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollOpacityElement;
