import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
  <>
  <nav>
  <Link href='/'>Spotlight</Link>
  <Link href='/art-pieces'>Pieces</Link>
  <Link href='/favourites'>Favourites</Link>
  </nav>
  </>
  )
}

