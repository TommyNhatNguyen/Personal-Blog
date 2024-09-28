import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
        <BackToTop />
        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;
