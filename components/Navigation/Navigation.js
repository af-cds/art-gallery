import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavStyling = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  gap: 30px;
  border: solid 2px;
  border-radius: 50px;
  border-color: grey;
  bottom: 10px;
  text-decoration: none;
  position: fixed;
  z-index: 1;
  color: whitesmoke;
  background-color: grey;

`;
const LinkStyled = styled.link`
  text-decoration: none;
`;

export default function Navigation() {
  return (
  <>
  <NavStyling>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} href='/'>Spotlight</Link>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} href='/art-pieces'>Pieces</Link>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} href='/favourites'>Favourites</Link>
  </NavStyling>
  </>
  )
}

