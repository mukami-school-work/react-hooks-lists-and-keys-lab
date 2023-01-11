import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listItems = links.map((link, index) =>
  <a href={"#"+ link} key={index}>{link}</a>);

  return <nav>{listItems}</nav>;
}

export default NavBar;
