import about from "../assets/about.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null); // Reference to the About section
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when the section enters the viewport

  return (
    <div
      ref={ref}
      className="border-b border-neutral-900 pb-12"
    >
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h2>
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <img
            src={about}
            alt="about"
            className="rounded-lg shadow-xl"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <p className="my-2 max-w-xl py-6 px-4 sm:px-6 md:px-8 text-neutral-300">
            I am a 21-year-old from the Philippines, currently a senior studying Information Technology at State University. I was an amateur esports player, ranked 44 in Challenger LoL PH and 167 in Wild Rift across all of Asia. My first experience with coding came by the end of senior high school, where I tried to create a simple video game, though it wasn&apos;t school-related. Since then, I discovered how to build websites using JavaScript and developed simple AI programs with Python. Everyday I challenge myself by solving problems on LeetCode, DSA, and exploring system design—areas where I still have much to learn but strive to improve every day.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
