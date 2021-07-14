//import styles from "../styles/Home.module.css";
import Hero from "../components/home/Hero";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        className="mockup d-flex justify-content-center"
        style={{ objectFit: "cover" }}
      >
        <img
          src="/app_ss.png"
          alt=""
          width="60%"
          style={{ minWidth: "450px" }}
        />
      </div>
      <Section2 />
      <Section3 />
    </main>
  );
}
