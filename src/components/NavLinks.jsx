import React, { useRef } from "react";
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
      <li style={{ cursor: "pointer", marginTop: "10px" }}>
        <Link
          to={`${section}`}
          smooth={true}
          duration={900}
          ref={sectionRefs[section]}
          key={section}
          onClick={(e) => handleNavClick(e)}
        >
          {" "}
          {selected == section ? (
            <strong>section {section}</strong>
          ) : (
            <div>section {section}</div>
          )}
        </Link>
      </li>
    );
  });
  return <div>{navLinks} </div>;
};

export default NavLinks;
