import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLinks = ({
  selected,
  setSelected,
  searchParams,
  sectionsTemplate,
}) => {
  const sectionRefs = sectionsTemplate.map((section) => {
    return React.createRef();
  });

  useEffect(() => {
    const currentSection = searchParams.get("section");
    setSelected(currentSection);
  }, []);

  const handleNavClick = (e) => {
    const currentSection = searchParams.get("section");
    console.log({ currentSection });

    const section = e.target.innerText.split(" ")[1];

    if (currentSection == `${section}`) {
      scroll.scrollToTop();
      searchParams.delete("section");
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      setSelected(false);
      return;
    } else {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
      searchParams.set("section", `${section}`);
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      setSelected(section);
    }
  };

  const navLinks = sectionsTemplate.map((section, i) => {
    return (
      <li style={styles.navLink}>
        <Link
          // style={styles.link}
          to={`${section}`}
          smooth={true}
          duration={900}
          ref={sectionRefs[section]}
          key={section}
          onClick={(e) => handleNavClick(e)}
        >
          {" "}
          {selected == section ? (
            <div style={styles.link}>
              <strong>section {section}</strong>
            </div>
          ) : (
            <div style={styles.link}>section {section}</div>
          )}
        </Link>
      </li>
    );
  });
  return <div>{navLinks} </div>;
};

export default NavLinks;

const styles = {
  navLink: {
    padding: "3px",
    zIndex: "1",
    // width: "80px",
  },
  link: {
    cursor: "pointer",
    zIndex: "1",
    backgroundColor: "lightblue",
    borderRadius: "1em",
    marginTop: "1em",
    width: "fit-content",
    padding: "1em",
    fontSize: "1em",
  },
};
