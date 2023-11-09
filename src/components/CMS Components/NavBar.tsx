import { Flex } from "@mantine/core";
import { useState } from "react";
import UserProfile from "../Reusable Components/UserProfile";

export default function CmsNavBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Flex className="CMS_NavBar_Container" justify={"space-between"}>
      <Flex align={"center"}>
        <button
          className={`menu ${menuOpened ? "opened" : ""}`}
          onClick={handleMenuClick}
          aria-label="Main Menu"
        >
          <svg width="45" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <h2 style={{ color: "var(--Red)" }}>PLM - CMS</h2>
      </Flex>
      <Flex align={"center"}>
        <img
          className="makeHoverable"
          src="/images/PLM_Logo.png"
          alt="img not found"
        />
        <div>
          <h4 style={{ color: "var(--Yellow)" }}>
            PAMANTASAN NG LUNGSOD NG MAYNILA
          </h4>
          <h5>UNIVERSITY OF THE CITY OF MANILA</h5>
        </div>
      </Flex>
      <Flex gap={"md"} align={"center"}>
        <img
          className="makeHoverable"
          src="/images/CMS/mail.png"
          alt="img not found"
          width={32}
          height={30}
        />
        <UserProfile name="Mark Angelo Templanza" role="Admin" />
      </Flex>
    </Flex>
  );
}
