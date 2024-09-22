import React from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <HomePage />
      <BlogPage />
      <Footer />
    </Container>
  );
};

export default MainLayout;
