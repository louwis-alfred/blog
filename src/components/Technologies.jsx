import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs, FaPython, FaJava, FaBootstrap } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiTailwindcss, SiFlask, SiTypescript } from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">

        {/* React */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>

        {/* NodeJS */}
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-blue-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>

        {/* Python */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>

        {/* TailwindCSS */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-blue-300" />
        </motion.div>

        {/* Flask */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl text-gray-500" />
        </motion.div>

        {/* Java */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-500" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-500" />
        </motion.div>

        {/* TypeScript */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2x1 border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>

      </div>
    </div>
  );
};

export default Technologies;
