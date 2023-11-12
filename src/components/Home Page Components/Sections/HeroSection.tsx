import CustomButton from "../../Reusable Components/CustomButton";

export default function UserProfile() {
  return (
    <>
      <section className="HeroSection_Container">
        <h1 className="slideFromTop">LOREM IPSUM DOLOR SIT AMET</h1>
        <p className="slideFromTop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
        <div className="slideFromTop">
          <CustomButton
            text="VIEW PROGRAMS"
            color="var(--Yellow)"
            size="lg"
            gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
          <CustomButton
            text="APPLY NOW"
            color="var(--Yellow)"
            size="lg"
            ImageLink="/images/GreaterThanSymbol.png"
            gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
        </div>
      </section>
    </>
  );
}
