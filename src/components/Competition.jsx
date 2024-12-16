import { motion } from "framer-motion";

const EVENTS = [
  {
    year: "2024",
    title: "KMC Hackathon",
    description:
      "Built a real-time chatbot using ReactJS for the front-end and Python for the back-end. Utilizing Natural Language Processing (NLP), it helps end-users better understand and meet the company's requirements.",
  },
  // Add more events if needed to see the staggered effect
];

const Competition = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Competition
      </motion.h2>
      <div>
        {EVENTS.map((event, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center px-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // Staggered delay for each item
            }}
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4 text-center md:text-center">
              <p className="mb-2 text-sm text-neutral-400">{event.year}</p>
            </div>

            {/* Title and Description Section */}
            <div className="w-full max-w-xl lg:w-3/4 text-center md:text-center px-5">
              <h6 className="mb-2 font-semibold">{event.title}</h6>
              <p className="mb-4 text-neutral-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Competition;
