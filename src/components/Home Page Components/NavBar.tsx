import { useEffect, useState } from "react";

function ScrollOpacityElement() {
  const [opacity, setOpacity] = useState(0);
  const [Pcolor, setPcolor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const opacityThreshold = 100;

    const newOpacity = Math.min(1, scrollPosition / opacityThreshold);

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
        className="HomePageNavBar_Container slideFromTop"
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
            <p
              style={{
                color: Pcolor ? "#686868" : "white",
                fontSize: "0.9rem",
              }}
            >
              UNIVERSITY OF THE CITY OF MANILA
            </p>
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
