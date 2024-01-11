import React, { useRef, useEffect } from "react";

const Section = ({ id }) => {
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const currentSection = searchParams.get("section");

    if (currentSection === id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div id={id} style={Styles.Section}>
      <div>
        <strong>{id}</strong>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia
      voluptates? Quisquam, quia voluptates? Quisquam, quia voluptates?
      Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quisquam, quia voluptates? Quisquam, quia voluptates? Quisquam, quia
      voluptates? Quisquam,
    </div>
  );
};

export default Section;

const Styles = {
  Section: {
    margin: "0 100px",
  },
};
