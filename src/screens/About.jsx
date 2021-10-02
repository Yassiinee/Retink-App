import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/bg2.png";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title="Help me create a Marketing Plan!" more="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that ." />
    </motion.div>
  );
};

export default About;
