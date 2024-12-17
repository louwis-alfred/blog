import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex justify-center border-b border-neutral-900 pb-12 lg:mb-35"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated Heading */}
            <motion.h1
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Louwis Alfred
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.span
              className="bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-400 bg-clip-text text-4xl tracking-tight text-transparent"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              Software Developer Intern
            </motion.span>

            {/* Motivational Quote */}
            <motion.p
              className="my-4 max-w-xl py-6 font-light tracking-tight text-neutral-500 lg:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Everyday is a blessing.
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center overflow-hidden">
          {/* Animated Profile Image */}
          <motion.img
            src={profile}
            alt="profile"
            className="block w-[350px] h-[350px] rounded-full object-cover lg:w-[450px] lg:h-[450px] shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
