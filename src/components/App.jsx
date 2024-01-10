import React, { useState, useEffect } from "react";
import colorPalette from "../assets/styles/colorPalette.js";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import { Link, Element, animateScroll as scroll } from "react-scroll";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);
  const sectionRefs = sectionsTemplate.map((section) => {
    return React.createRef();
  });

  const navLinks = sectionsTemplate.map((section) => {
    return (
      <li>
        <Link
          to={`section ${section}`}
          smooth={true}
          duration={1000}
          ref={sectionRefs[section - 1]}
          // onClick={(section) => handleNavClick(section)}
        >
          section {section}
        </Link>
      </li>
    );
  });
  const sections = sectionsTemplate.map((section) => {
    return (
      <Element name={`section ${section}`}>
        <Section key={`section ${section}`} id={`section ${section}`} />
        //{" "}
      </Element>
    );
  });

  return (
    <div style={styles.app}>
      <ul>{navLinks}</ul>
      {sections}
      <Element name="section x">
        <Section id="section x" />
      </Element>
      <Footer />
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: "30px",
    textAlign: "justify",

    color: colorPalette.text1,
    backgroundColor: colorPalette.work,
  },
};
