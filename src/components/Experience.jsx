import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2023-2024",
    title: "Web Developer",
    description: "Successfully completed a comprehensive web development course focusing on front-end and back-end technologies.",
  },
  {
    year: "2023-2024",
    title: "Back-end Application Development",
    description: "Learned server-side programming, database management, and API integration through hands-on projects.",
  },
  {
    year: "2022-2023",
    title: "Problem Sets CS50",
    description: "Solved algorithmic and foundational programming challenges as part of the Harvard CS50 program.",
  },
  {
    year: "2023-2024",
    title: "Google Crash Course on Python",
    description: "Completed Google's Python crash course, mastering the basics of Python programming.",
  },
  {
    year: "2023-2024",
    title: "Scientific Computing with Python",
    description: "Mastered Python libraries like NumPy, Pandas, and Matplotlib to perform data analysis and scientific computing tasks.",
  },
  {
    year: "2023-2024",
    title: "ChatGPT Prompt Engineering",
    description: "Learned techniques to craft effective prompts for large language models, optimizing their outputs for various tasks and industries.",
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center px-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // Adds a staggered delay for each item
            }}
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4 text-center md:text-center">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/* Title and Description Section */}
            <div className="w-full max-w-xl lg:w-3/4 text-center md:text-center px-5">
              <h6 className="mb-2 font-semibold">{experience.title}</h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
