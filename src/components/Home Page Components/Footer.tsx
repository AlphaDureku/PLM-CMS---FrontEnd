import { Flex } from "@mantine/core";
export default function Footer() {
  return (
    <>
      <div className="HomePageFooter_Container hidden">
        <div className="Logo">
          {" "}
          <img
            src="/images/PLM_Logo.png"
            alt="img not found"
            className="makeHoverable"
            width={100}
          />
        </div>
        <div className="Name">
          <div>
            <h4 style={{ color: "var(--Yellow)" }}>
              PAMANTASAN NG LUNGSOD NG MAYNILA
            </h4>
            <h5 style={{ color: "white" }}>
              UNIVSERSITY OF THE CITY OF MANILA
            </h5>
          </div>
        </div>
        <Flex gap={20} direction={"column"} className="Visit">
          <h4>VISIT US AT</h4>
          <h4>
            GEN. LUNA CORNER MURALLA ST., INTRAMUROS, MANILA, PHILIPPINES, 1002
          </h4>
        </Flex>
        <Flex justify={"space-around"} align={"center"} className="Links">
          <h5>CONTACT US</h5>
          <h5>TERMS OF USE</h5>
          <h5>PRIVACY POLICY</h5>
        </Flex>
        <div className="copyright">
          <h5>
            © 1967 - 2023 Pamantasan ng Lungsod ng Maynila. All Rights Reserved.
          </h5>
        </div>
      </div>
    </>
  );
}
