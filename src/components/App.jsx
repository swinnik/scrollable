import React, { useState, useEffect } from "react";
import colorPalette from "../assets/styles/colorPalette.js";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import { Link, Element, animateScroll as scroll } from "react-scroll";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);
  const sectionRefs = sectionsTemplate.map((section) => {
    return React.createRef();
  });

  const handleNavClick = (e) => {
    const currentSection = searchParams.get("section");
    console.log({ currentSection });
    const section = e.target.innerText.split(" ")[1];
    console.log({ section });
    if (currentSection === `section ${section}`) {
      scroll.scrollToTop();
      searchParams.delete("section");
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      return;
    } else {
      searchParams.set("section", `section ${section}`);
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
    }
  };

  const navLinks = sectionsTemplate.map((section, i) => {
    return (
      <li style={{ cursor: "pointer", marginTop: "10px" }}>
        <Link
          to={`section ${section}`}
          smooth={true}
          duration={900}
          ref={sectionRefs[section]}
          key={section}
          onClick={(e) => handleNavClick(e)}
        >
          section {section}
        </Link>
      </li>
    );
  });
  const sections = sectionsTemplate.map((section) => {
    return (
      <Element name={`section ${section}`}>
        <Section key={`section ${section}`} id={`section ${section}`} />{" "}
      </Element>
    );
  });

  return (
    <div style={styles.app}>
      <ul style={{ position: "fixed", left: 0, right: 0 }}>{navLinks}</ul>
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
