import Link from "../components/LInk.js";
import ComponentShowcase from "../demo/ComponentShowcase.js";

const DemoPage = () => {
  return (
    <>
      <h1>Деmо страница</h1>
      <ComponentShowcase />
      <Link to="/todo/">Перейти на Todo</Link>
    </>
  );
};

export default DemoPage;
