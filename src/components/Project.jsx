import React from 'react';
import currency from '../assets/projects/currency.png';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h2
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex justify-center">
        <motion.div
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          
              <motion.div
               
                variants={container(0.4 +  0.2)}
                initial="hidden"
                animate="visible"
                className="p-4 border rounded-lg border-neutral-900 flex flex-col items-center"
              >
                <h3 className="text-lg font-semibold mb-2">Currency Converter</h3>
                <img
                  className="h-52 w-auto"
                  src={currency}
                  alt="Currency Converter"
                />
                <a
                  className="mt-3 bg-cyan-700 text-white p-2 rounded-lg font-barlow"
                  href="https://github.com/Bodhandhakal321/Basic-react/tree/main/06currencyChanger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More
                </a>
              </motion.div>
              <motion.div
               
                variants={container(0.4 +  0.2)}
                initial="hidden"
                animate="visible"
                className="p-4 border rounded-lg border-neutral-900 flex flex-col items-center"
              >
                <h3 className="text-lg font-semibold mb-2">Hamro Nibas</h3>
                <img
                  className="h-52 w-auto"
                  src={currency}
                  alt="Hamro Nibas"
                />
                <a
                  className="mt-3 bg-cyan-700 text-white p-2 rounded-lg font-barlow"
                  href="https://github.com/sthasaroj13/HamroNibas_Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More
                </a>
              </motion.div>
           
        </motion.div>
      </div>
      <motion.div
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="mt-6 text-cyan-800 font-barlow text-xl flex justify-center"
      >
        <a
          href="https://github.com/Bodhandhakal321"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaGithub className="rounded-2xl border-4 border-neutral-900" />
          You can visit my GitHub as well for more projects
        </a>
      </motion.div>
    </div>
  );
};

export default Project;
