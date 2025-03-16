import React from "react";
import {Tilt }from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant  } from "../utils/mortion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-full w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a skilled Senior Software Engineer with expertise in JavaScript, TypeScript, React, React Native, and Solidity. I specialize in building scalable, high-performance web, mobile, and blockchain applications, leveraging frameworks like Node.js, Three.js, and Web3.js. With a strong background in cloud deployment (AWS, Firebase) and financial systems, I excel at delivering efficient, user-friendly solutions. I’m a fast learner and thrive on collaboration to bring innovative ideas to life. Let’s build something great together!
      </motion.p>

      <div className='!mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");