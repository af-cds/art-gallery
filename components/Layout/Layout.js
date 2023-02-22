import Link from "next/link";
import React from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const LayoutStyling = styled.section`
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    margin-top: 15px;
    
`;

const AppStyling = styled.section`
    padding: 5%;
    font-size: small;
    background-color: #D6D2D2;
`;

export default function Layout({children}) {
  return (
    <>
    <AppStyling>
    <h1>Art Gallery</h1>
    {children}
    <LayoutStyling>
        <Navigation />
        </LayoutStyling>
    </AppStyling>
    </>
  )
}


