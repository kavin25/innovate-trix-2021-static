import { appName } from "../lib/constants";

function Footer() {
  return (
    <footer className="text-center mt-5 border-top pt-3">
      <p>© {appName} 2021</p>
      <p>
        Made with <span style={{ color: "red" }}>{"<3"}</span> by Exun Clan
      </p>
    </footer>
  );
}

export default Footer;
