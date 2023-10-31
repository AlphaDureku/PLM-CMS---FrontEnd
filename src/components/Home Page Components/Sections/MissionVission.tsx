import CustomButton from "../../Reusable Components/CustomButton";

export default function ExitBtn() {
  //To add functionality

  return (
    <section className="MissionVision_Section">
      <div className="MissionVision_Container">
        <div>
          <h2>OUR MISSION</h2>
          <div>
            <p>
              The Pamantasan ng Lungsod ng Maynila shall form critical-minded
              and service-oriented leaders and innovators in various disciplines
              through accessible and relevant quality education, transformative
              institutional research and extension services, and key linkages.
            </p>
          </div>
          <img
            src="/images/MissionVision/HorizontalRedLine.png"
            alt="img not found"
          />
        </div>
        <div>
          <div>
            <h2>OUR VISION</h2>
            <p>
              The Pamantasan ng Lungsod ng Maynila shall be the premier people’s
              university pursuing public interest and national development.
            </p>
          </div>
          <img
            src="/images/MissionVision/HorizontalYellowLine.png"
            alt="img not found"
          />
        </div>
        <div>
          <h2>CORE VALUES</h2>
          <div>
            <p>
              The Pamantasan ng Lungsod ng Maynila shall be guided by the values
              of academic excellence, integrity and social responsibility, and
              by the principles of <strong>Karunungan</strong>,{" "}
              <strong>Kaunlaran</strong> and <strong>Kadakilaan</strong>.
            </p>
          </div>
          <img
            src="/images/MissionVision/HorizontalRedLine.png"
            alt="img not found"
          />
        </div>
        <CustomButton
          text="LEARN MORE"
          color="var(--Yellow)"
          size="lg"
          ImageLink="GreaterThanSymbol.png"
        />
      </div>
      <div>
        {" "}
        <img
          src="/images/MissionVision/ShortBlackLine.png"
          alt="img not found"
        />{" "}
        <img
          src="/images/MissionVision/MediumBlackLine.png"
          alt="img not found"
        />{" "}
        <img
          src="/images/MissionVision/LongBlackLine.png"
          alt="img not found"
        />
      </div>
    </section>
  );
}
