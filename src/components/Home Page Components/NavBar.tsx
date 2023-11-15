import { Flex, HoverCard } from "@mantine/core";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
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
  const NavBarDataTop = [
    {
      Parent: "Students",
      Child: [
        "Student Manual",
        "Tuition and Fees",
        "SFES",
        "Student 201 Management System",
      ],
    },
    {
      Parent: "Faculty",
      Child: [
        "Student Manual",
        "Tuition and Fees",
        "SFES",
        "Student 201 Management System",
      ],
    },
    {
      Parent: "Alumni",
      Child: [
        "The Alumni Association",
        "PLM Scholars Foundation, Inc",
        "Alumni News & Updates",
        "ARS",
      ],
    },
    {
      Parent: "Events",
      Child: [
        "Student Manual",
        "Tuition and Fees",
        "SFES",
        "Student 201 Management System",
      ],
    },
    {
      Parent: "Downloads",
      Child: [
        "Student Manual",
        "Tuition and Fees",
        "SFES",
        "Student 201 Management System",
      ],
    },
  ];

  const NavBarDataBottom = [
    {
      Parent: "About",
      Child: [
        {
          Parent: "University Profile",
          Child: [
            "Vision and Mission",
            "Seal and Symbols",
            "History",
            "University Hymn",
            "University Code",
          ],
        },
        {
          Parent: "Administration",
          Child: [
            "Board of Regents",
            "The President",
            "Vice Presidents and Asst. Vice Presidents",
            "Directors and Chiefs",
            "Deans",
            "Organizational Chart",
          ],
        },
        { Parent: "Pride Hall", Child: ["Board Exam Passers", "Graduates"] },
      ],
    },
    {
      Parent: "Academics",
      Child: [
        "Student Manual",
        "Tuition and Fees",
        "SFES",
        "Student 201 Management System",
      ],
    },
    {
      Parent: "Admission",
      Child: [
        "Undergraduate Programs",
        "PLMAT",
        "CLAT",
        "Scholars and Financial Aid",
        "International Students",
      ],
    },
    {
      Parent: "News",
      Child: [
        "Announcements",
        "Newsletter",
        "Message from the University President",
        "Job Openings / Careers",
      ],
    },
  ];

  const renderNavMenuTop = NavBarDataTop.map((item) => {
    return (
      <HoverCard transitionProps={{ duration: 200, transition: "pop" }}>
        <HoverCard.Target>
          <a className="makeHoverable">{item.Parent}</a>
        </HoverCard.Target>
        <HoverCard.Dropdown className="HomePage_HoverCard_Container">
          <div className="HomePage_HoverCard ">
            {item.Child.map((itemChild) => {
              return <h4 className="HoverYellow">{itemChild}</h4>;
            })}
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  });

  const renderSubMenu = (
    childItems: ({ Parent: string; Child: string[] } | string)[]
  ) => {
    return (
      <div className="HomePage_HoverCard">
        {childItems.map((itemChild, index) => (
          <div key={index}>
            {typeof itemChild === "string" ? (
              <h4 key={index} className="HoverYellow">
                {itemChild}
              </h4>
            ) : itemChild.Child ? (
              <HoverCard
                transitionProps={{ duration: 200, transition: "pop" }}
                key={itemChild.Parent}
                position="right-start"
                offset={30}
              >
                <HoverCard.Target>
                  <Flex justify={"center"} className="HoverYellow">
                    <h4>{itemChild.Parent} </h4>
                    <KeyboardArrowDownRounded />
                  </Flex>
                </HoverCard.Target>
                <HoverCard.Dropdown className="HomePage_HoverCard_Container">
                  {renderSubMenu(itemChild.Child)}
                </HoverCard.Dropdown>
              </HoverCard>
            ) : (
              <h4 key={itemChild.Parent}>{itemChild.Parent}</h4>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderNavMenuBottom = NavBarDataBottom.map((item) => (
    <HoverCard
      transitionProps={{ duration: 200, transition: "pop" }}
      key={item.Parent}
    >
      <HoverCard.Target>
        <a className="makeHoverable">{item.Parent}</a>
      </HoverCard.Target>
      <HoverCard.Dropdown className="HomePage_HoverCard_Container">
        {item.Child && renderSubMenu(item.Child)}
      </HoverCard.Dropdown>
    </HoverCard>
  ));

  // Now you can use 'renderNavMenuBottom' wherever you want to render your navigation menu

  return (
    <>
      <div
        id="HomeNav"
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
            {renderNavMenuTop}
            <img
              className="makeHoverable"
              src="/images/SearchIcon.png"
              alt="img not found"
            />
          </div>
          {<div>{renderNavMenuBottom}</div>}
        </div>
      </div>
    </>
  );
}

export default ScrollOpacityElement;
