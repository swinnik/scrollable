import React, { useState, useEffect, useRef } from "react";
import colorPalette from "../assets/styles/colorPalette.js";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import NavLinks from "./NavLinks.jsx";
import IntersectionObserver from "./IntersectionObserver.jsx";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);

  const [selected, setSelected] = useState(false);

  const NavLinkProps = {
    selected,
    setSelected,
    searchParams,
    sectionsTemplate,
  };

  const sectionProps = {
    selected,
    setSelected,
    searchParams,
    sectionsTemplate,
  };

  const sections = sectionsTemplate.map((section) => {
    return <Section key={`${section}`} id={`${section}`} {...sectionProps} />;
  });

  return (
    <div style={styles.app}>
      <ul
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          listStyleType: "none",
          padding: "0px",
          margin: "20px",
          zIndex: 5,
        }}
      >
        <NavLinks {...NavLinkProps} />
      </ul>
      {sections}

      <Section id="section x" {...sectionProps} />

      {/* <Footer /> */}
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
