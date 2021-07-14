import { appName } from "../../lib/constants";
import HomeFeatures from "./HomeFeatures";

export default function Section2() {
  return (
    <div className="container text-center" style={{ padding: "100px 0" }}>
      <h1>Built to help people with finding Ambulances... FAST</h1>
      <p className="text-muted">{appName} solves the problem</p>
      <HomeFeatures />
    </div>
  );
}
