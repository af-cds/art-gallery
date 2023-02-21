import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavStyling = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  margin-top: 50px;
  gap: 30px;
  border: solid 1px;
  border-radius: 50px;
  bottom: 0px;
`;

export default function Navigation() {
  return (
  <>
  <NavStyling>
  <Link href='/'>Spotlight</Link>
  <Link href='/art-pieces'>Pieces</Link>
  <Link href='/favourites'>Favourites</Link>
  </NavStyling>
  </>
  )
}

