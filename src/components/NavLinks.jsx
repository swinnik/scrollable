import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

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
      if (currentSection == 1) {
        return;
      }
      scroll.scrollToTop();
      searchParams.delete("section");
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
      return;
    } else {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
      searchParams.set("section", `${section}`);
      window.history.replaceState(null, null, `?${searchParams.toString()}`);
    }
  };

  // const handleLinkHover = (section, isHover) => {
  //   const sectionIndex = sectionsTemplate.indexOf(section);
  //   const linkElement = sectionRefs[sectionIndex].current;
  //   if (isHover) {
  //     console.log(" ENTER ");
  //   }
  //   if (!isHover) {
  //     console.log(" LEAVE ");
  //   }
  //   if (linkElement) {
  //     console.log(
  //       "LINK ELEMENT",
  //       parseInt(linkElement.props.id.split(" ")[1]) + 1
  //     );
  //     // Apply or remove the hover styles based on the isHover parameter
  //     linkElement.style.boxShadow = isHover
  //       ? styles.linkHover.boxShadow
  //       : styles.link.boxShadow;
  //   }
  // };

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
          id={`link ${section}`}
          onClick={(e) => handleNavClick(e)}
        >
          {" "}
          {selected == section ? (
            <StyledLink>
              <strong>section {section}</strong>
            </StyledLink>
          ) : (
            <StyledLink>section {section}</StyledLink>
          )}
        </Link>
      </li>
    );
  });

  return <div>{navLinks} </div>;
};

export default NavLinks;

const StyledNavLinks = styled.div`
  padding: 3px;
  z-index: 1;
`;

const StyledLink = styled.div`
  cursor: pointer;
  z-index: 1;
  background-color: lightblue;
  border-radius: 1em;
  margin-top: 1em;
  width: fit-content;
  padding: 1em;
  font-size: 1em;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px black;
  }
  &:active {
    box-shadow: 0px 0px 10px 0px black inset;
  }
`;

const styles = {
  navLink: {
    padding: "3px",
    zIndex: "1",
    width: "fit-content",
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
