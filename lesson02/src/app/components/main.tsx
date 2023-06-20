import React from "react";
import Hero from "./hero";
import Rockets from "./rockets";
import Testimonials from "./testimonials";
import Contact from "./contact";
const Main = () => {
  const content = (
    <main>
      <Hero></Hero>
      <Rockets></Rockets>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </main>
  );
  return content;
};

export default Main;
