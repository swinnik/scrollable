import React, { useState, useEffect, useRef } from "react";
import colorPalette from "../assets/styles/colorPalette.js";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import NavLinks from "./NavLinks.jsx";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);

  const [selected, setSelected] = useState(false);

  let currentSection = searchParams.get("section");
  currentSection = currentSection && searchParams.get("section").split(" ")[1];
  currentSection = currentSection && parseInt(currentSection);

  useEffect(() => {
    if (currentSection) {
      setSelected(currentSection);
    }
  }, [currentSection]);

  const sections = sectionsTemplate.map((section) => {
    return (
      <Element name={`section ${section}`}>
        <Section key={`section ${section}`} id={`section ${section}`} />{" "}
      </Element>
    );
  });

  const NavLinkProps = {
    selected,
    setSelected,
    searchParams,
    sectionsTemplate,
  };

  return (
    <div style={styles.app}>
      <ul style={{ position: "fixed", left: 0, right: 0 }}>
        <NavLinks {...NavLinkProps} />
      </ul>
      {sections}

      <Section id="section x" />
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
