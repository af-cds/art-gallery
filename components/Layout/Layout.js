import Link from "next/link";
import React from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const LayoutStyling = styled.section`
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    position: relative;     
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
    {/* <h1 className={inter.className}>Art Gallery</h1> */}
    {children}
    <LayoutStyling>
        <Navigation />
        </LayoutStyling>
    </AppStyling>
    </>
  )
}


