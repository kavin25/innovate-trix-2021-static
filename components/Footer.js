import { appName } from "../lib/constants";

function Footer() {
  return (
    <footer
      style={{ color: "#fff", backgroundColor: "rgb(42, 46 ,58)" }}
      className="text-center mt-5 border-top p-3"
    >
      <p>
        {appName} 2021 | Made with <span style={{ color: "red" }}>{"<3"}</span>{" "}
        by Exun Clan
      </p>
    </footer>
  );
}

export default Footer;
