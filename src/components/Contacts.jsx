import { motion } from "framer-motion";

const CONTACT = [
  {
    address: "Quezon City, PH",
    phoneNo: "09948673651",
    email: "louwisalfredn@gmail.com",
  },
];

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animated Heading */}
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Animated Contact Details */}
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delayChildren: 0.5, staggerChildren: 0.2 }}
      >
        <motion.p
          className="my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT[0].address}
        </motion.p>
        <motion.p
          className="my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {CONTACT[0].phoneNo}
        </motion.p>
        <motion.p
          className="my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {CONTACT[0].email}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contacts;
