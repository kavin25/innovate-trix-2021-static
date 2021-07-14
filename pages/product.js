import BusinessPlan from "../components/product/BusinessPlan";
import Functionality from "../components/product/Functionality";
import Vision from "../components/product/Vision";

export default function Product() {
  return (
    <main className="container">
      <h1 className="mb-4">Product</h1>
      <Vision />
      <BusinessPlan />
      <Functionality />
    </main>
  );
}
