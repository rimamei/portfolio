import React from "react";
import { About, Contact, Footer, Header, Project } from "../components";
import { BackToTop, Box, Typing } from "../parts";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Element name="home">
        <Header />
      </Element>
      <Box />
      <Typing />
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
