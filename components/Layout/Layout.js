import Link from "next/link";
import React from "react";
import Navigation from "../Navigation/Navigation";

export default function Layout({children}) {
  return (
    <>
    {children}

     <Navigation />
    </>
  )
}


