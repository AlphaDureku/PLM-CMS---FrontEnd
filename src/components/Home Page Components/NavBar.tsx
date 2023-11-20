import { Flex, HoverCard } from "@mantine/core";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Menu, childMenu } from "../../Types/HomePageTypes";
import {
  NavBarDataBottom,
  NavBarDataTop,
} from "../../assets/Home_Static_Data/HomePage_MenuData";
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
  const handleLinkClick =
    (href: string): React.MouseEventHandler<HTMLAnchorElement> =>
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        const targetElement = document.querySelector(href); // Find the target element by ID
        const navbarElement = document.getElementById("HomeNav");

        if (targetElement && navbarElement) {
          const navbarHeight = navbarElement.clientHeight;
          const targetOffsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: targetOffsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      };

  const renderNavMenuTop = NavBarDataTop.map((item, index) => {
    return (
      <HoverCard
        transitionProps={{ duration: 200, transition: "pop" }}
        key={index}
      >
        <HoverCard.Target>
          <a className="makeHoverable makeUnderlineHover">{item.Parent}</a>
        </HoverCard.Target>
        <HoverCard.Dropdown className="HomePage_HoverCard_Container">
          <div className="HomePage_HoverCard">
            {item.Child.map((itemChild, childIndex) =>
              itemChild.href && itemChild.href.includes("#") ? (
                <a
                  className="HoverYellow"
                  key={childIndex}
                  onClick={handleLinkClick(itemChild.href)}
                >
                  {itemChild.text}
                </a>
              ) : (
                <a
                  className="HoverYellow"
                  key={childIndex}
                  href={itemChild.href}
                >
                  {itemChild.text}
                </a>
              )
            )}
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  });

  const renderSubMenu = (childItems: childMenu[] | Menu) => {
    return (
      <div className="HomePage_HoverCard">
        {Array.isArray(childItems) &&
          childItems.map((itemChild, index) => (
            <div key={index}>
              {Object.prototype.hasOwnProperty.call(itemChild, "text") ? (
                itemChild.href && itemChild.href.includes("#") ? (
                  <a
                    href={itemChild.href}
                    target="_blank"
                    key={index}
                    onClick={handleLinkClick(itemChild.href)}
                  >
                    {itemChild.text}
                  </a>
                ) : (
                  <a
                    href={itemChild.href}
                    target="_blank"
                    key={index}
                    className="HoverYellow"
                  >
                    {itemChild.text}
                  </a>
                )
              ) : itemChild.Child ? (
                <HoverCard
                  transitionProps={{ duration: 200, transition: "pop" }}
                  key={itemChild.Parent}
                  position="right-start"
                  offset={25}
                >
                  <HoverCard.Target>
                    <Flex className="HoverYellow" justify={"space-between"}>
                      <a>{itemChild.Parent} </a>
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
        <a className="makeHoverable makeUnderlineHover" href={item.href}>{item.Parent}</a>
      </HoverCard.Target>
      <HoverCard.Dropdown className="HomePage_HoverCard_Container make">
        {item.Child && renderSubMenu(item.Child)}
      </HoverCard.Dropdown>
    </HoverCard>
  ));

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
