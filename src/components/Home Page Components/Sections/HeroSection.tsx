import useResponsiveBreakpoints from "../../CustomHooks/mediaQueryies";
import CustomButton from "../../Reusable Components/CustomButton";


export default function UserProfile() {
  const { firstBreakpoint, secondBreakpoint } = useResponsiveBreakpoints()

  const containerStyles = {
    padding: secondBreakpoint ? "8vw" : "5vw",
    width: !secondBreakpoint ? "45%" : null,
  };

  return (
    <>
      <section className="HeroSection_Container" style={containerStyles}>
        <h1 className="slideFromTop responsive_H1">LOREM IPSUM DOLOR SIT AMET</h1>
        <p className="slideFromTop responsive_H3">
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
            size={firstBreakpoint ? "lg" : (secondBreakpoint ? "md" : "xs")}
            gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
          <CustomButton
            text="APPLY NOW"
            color="var(--Yellow)"
            size={firstBreakpoint ? "lg" : (secondBreakpoint ? "md" : "xs")}

            ImageLink="/images/GreaterThanSymbol.png"
            gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
        </div>
      </section>
    </>
  );
}
