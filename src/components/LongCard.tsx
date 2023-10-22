import { Button, Image } from "@mantine/core";
export default function LongCard() {
  //To add functionality

  return (
    <div className="LongCardContainer">
      <div>
        {" "}
        <Image
          src="https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif"
          alt="No way!"
          radius="md"
          h={200}
          w="auto"
          fit="contain"
        />
      </div>
      <div>
        <div>
          <h2>INSERT TITLE HERE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
        <hr></hr>
        <div>
          <div className="LongCard_BottomRow" style={{ textAlign: "left" }}>
            <div>
              <img src="/images/CalendarLogo.png" alt="img not found" />
              <span>MM/DD/YYYY</span>
              <img src="/images/ClockLogo.png" alt="img not found" />
              <span>9:00PM</span>
            </div>
            <div>
              <Button variant="filled" color="#032968" size="lg">
                <span style={{ marginRight: "8px" }}>Read More</span>
                <img src="/images/ButtonArrowLogo.png" alt="img not found" />
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
