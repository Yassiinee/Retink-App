import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/slido-hero.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title="Help me create a Marketing Plan!"
        more="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that "
      />
    </motion.div>
  );
};

export default Services;
