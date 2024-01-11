import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLinks = ({
  selected,
  setSelected,
  searchParams,
  sectionsTemplate,
}) => {
  // const sectionsTemplate = Array.from({ length: 6 }, (x, i) => i + 1);

  const sectionRefs = sectionsTemplate.map((section) => {
    return React.createRef();
  });

  const handleNavClick = (e) => {
    const currentSection = searchParams.get("section");

    const section = e.target.innerText.split(" ")[1];

    if (currentSection === `section ${section}`) {
      scroll.scrollToTop();
      searchParams.delete("section");
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      return;
    } else {
      searchParams.set("section", `section ${section}`);
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      setSelected(section);
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
          {" "}
          {selected === section ? (
            <strong>section {section}</strong>
          ) : (
            <strong>
              <div>section {section}</div>
            </strong>
          )}
        </Link>
      </li>
    );
  });
  return <div>{navLinks} </div>;
};

export default NavLinks;
