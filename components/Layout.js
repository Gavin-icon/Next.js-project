import Header from "./Header";
import Navgation from "./Navgation";
import React from 'react'
export default function Layout({children}) {
  return <>
    <Header />
    <Navgation />
    {children}
  </>
}