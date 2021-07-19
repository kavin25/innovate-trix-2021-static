import BusinessPlan from "../components/product/BusinessPlan";
import Functionality from "../components/product/Functionality";
import TargetCustomer from "../components/product/TargetCustomer";
import Vision from "../components/product/Vision";

export default function Product() {
  return (
    <main className="container" style={{ marginTop: "calc(56px + 60px)" }}>
      <h1 className="mb-4">Product</h1>
      <Vision />
      <BusinessPlan />
      <TargetCustomer />
      <Functionality />
    </main>
  );
}
