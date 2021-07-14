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
      <div
        style={{ width: "100%" }}
        className="container d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between"
      >
        <div className={styles.card}>
          <div className="card">
            <div className="card-body">
              <div className="text-center text-md-start">
                <div className="d-flex align-items-center justify-content-between">
                  <h1 className="card-title">{appName}</h1>
                  <img src="/logo.png" alt="" width="60px" className="ms-2" />
                </div>
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
        </div>
        <div
          style={{ objectFit: "cover", width: "100%" }}
          className="d-flex justify-content-lg-end justify-content-center"
        >
          <img
            src="/medical.svg"
            alt="Hospital Banner Image"
            height="auto"
            width="80%"
            style={{ background: "transparent" }}
            className={styles.illustration}
          />
        </div>
      </div>
    </div>
  );
}
