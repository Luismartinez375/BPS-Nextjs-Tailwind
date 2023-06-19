import React from "react";
import Hero from "./hero";
import Rockets from "./rockets";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Footer from "./footer";
const Main = () => {
    const content =(
       <main>
        <Hero></Hero>
        <Rockets></Rockets>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
       </main>
    )
    return content
}

export default Main;