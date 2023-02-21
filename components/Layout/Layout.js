import Link from "next/link";
import React from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const LayoutStyling = styled.section`
    display: flex;
    justify-content: space-evenly;
`;

const AppStyling = styled.section`
    padding: 5%;
    background-color: #D6D2D2;
`;

export default function Layout({children}) {
  return (
    <>
    <AppStyling>
    {children}
    <LayoutStyling>
        <Navigation />
        </LayoutStyling>
    </AppStyling>
    </>
  )
}


