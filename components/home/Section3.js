import Link from "next/link";

export default function Section3() {
  return (
    <div className="container">
      <h2 className="text-center">Purpose of the Product</h2>
      <p className="text-center">
        The sole purpose of the product or the app which will be launched is to
        centralize the emergency healthcare system i.e a person in an emergency
        dials 100/101/102 (which now has been converted to 112) but sometimes is
        not able to connect to the hospital or the ambulance service due to
        heavy number of requests already lined up plus there is absolutely no
        way a person can contact a private hospital unless the person has the
        specific number of their hospital.
        <br />
        <br />
        This product aims to bridge that gap by connecting a person in a state
        of emergency to a hospital. The functionality has been explained in
        detail{" "}
        <Link href="/product#functionality">
          <a style={{ color: "#0d6efd", textDecoration: "underline" }}>here</a>
        </Link>
        .
      </p>
    </div>
  );
}
