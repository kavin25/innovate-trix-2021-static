import Image from "next/image";

export default function Hero() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-between">
        <div>
          <h1>OneClickAmbulance</h1>
        </div>
        <div>
          <img
            src="/medical.png"
            alt="Hospital Banner Image"
            height="auto"
            width="600"
          />
        </div>
      </div>
    </div>
  );
}
