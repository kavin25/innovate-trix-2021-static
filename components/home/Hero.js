import { appName } from "../../lib/constants";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: 'url("/cool-background.svg")',
        backgroundSize: "cover",
        //backgroundColor: "#f66666",
        width: "100%",
        height: "calc(100vh - 56px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between">
        <div className="card">
          <div className="card-body">
            <div className="text-center text-md-start">
              <h1 className="card-title">{appName}</h1>
              <p className="card-subtitle mb-2">
                The Fastest Ambulance Service, in direct contact with the
                hospitals, with the help of tech
              </p>
              <a
                href="https://jstseguru.in/innovate-trix/sign-in"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/medical.svg"
            alt="Hospital Banner Image"
            height="auto"
            width="600"
            style={{ background: "transparent" }}
            className={styles.illustration}
          />
        </div>
      </div>
    </div>
  );
}
