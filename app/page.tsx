"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar"; 

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar/> 
      <Hero/>
      <About/>
      <Menu/>
      <Contact/>
    </div>
  );
}
