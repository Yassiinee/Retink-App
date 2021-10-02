import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/bg1.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Retink Media"
        more="We help businesses create customised quality content-on-demand that drives sales, delivered within budget and on time using AI."
      />
    </motion.div>
  );
};

export default Home;
