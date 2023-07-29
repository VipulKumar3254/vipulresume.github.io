"use client"
import nextSvg from "../../public/next.svg"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import styles1 from "@/styles/styles.module.css"
import { useState } from 'react'
import { Roboto } from "next/font/google"
import Navbar from "@/components/Navbar"
import MainSection from "@/components/MainSection"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
const roboto = Roboto({
  weight: "100",
  subsets:["latin"]

})



export default function Home() {
  const [color, setColor] = useState(true)
  return (
    <>
    <Navbar/>
    <MainSection/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
   
    </>
    )
}
