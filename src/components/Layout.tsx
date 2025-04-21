import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer"

const Homepage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homepage;
