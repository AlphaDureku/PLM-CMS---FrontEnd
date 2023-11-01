export default function Navbar() {
  return (
    <>
      <div className="HomePageNavBar_Container">
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
            <h5 style={{ color: "#686868" }}>
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
