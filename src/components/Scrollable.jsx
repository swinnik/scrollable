import React, { useState, useEffect, useRef } from "react";
import colorPalette from "../assets/styles/colorPalette.js";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import NavLinks from "./NavLinks.jsx";
import IntersectionObserver from "./IntersectionObserver.jsx";
import ProgressBar from "./ProgressBar.jsx";
// import { useNavigate } from "react-router-dom";

const Scrollable = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);

  const [selected, setSelected] = useState(false);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;

    const scrollPercent = Math.round(
      (scrollY / (scrollHeight - windowHeight)) * 100
    );

    setScrollPercentage((scrollPercentage) => {
      return Math.max(scrollPercentage, scrollPercent);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div style={styles.Scrollable}>
      <ProgressBar scrollPercentage={scrollPercentage} />
      <ul
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          listStyleType: "none",
          padding: "0px",
          margin: "20px",
          zIndex: 5,
          width: "fit-content",
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

export default Scrollable;

const styles = {
  Scrollable: {
    padding: "30px",
    textAlign: "justify",

    color: colorPalette.text1,
    backgroundColor: colorPalette.work,
  },
};
