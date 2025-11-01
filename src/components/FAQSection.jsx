import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is Qtomi?",
      answer: "Qtomi is an intelligent emotional companion that blends cutting-edge technology with emotional intelligence. It's designed to react, and grow with you through playful interactions and expressive responses."
    },
    // {
    //   question: "How does Qtomi understand emotions?",
    //   answer: "Qtomi uses advanced AI algorithms to recognize emotional cues from your interactions, voice tones, and patterns. It learns from your behavior to provide more personalized and meaningful responses over time."
    // },
    {
      question: "When will Qtomi be available?",
      answer: "We're currently in the development phase and planning to launch soon. Join our waitlist or share your suggestions to get early access and help us shape the final product!"
    },
    {
      question: "What features will Qtomi have?",
      answer: "Qtomi will include emotional reactions, interactive games, dynamic themes, sound interactions, productivity tools, and much more. We're constantly adding new features based on community feedback."
    },
    {
      question: "How much will Qtomi cost?",
      answer: "While final pricing is still being determined, we're committed to making Qtomi accessible. We're considering different price points and would love to hear what you're comfortable paying through our suggestion form."
    },
    {
      question: "Can I suggest new features for Qtomi?",
      answer: "Absolutely! We're building Qtomi with our community. Your suggestions directly influence our development roadmap. Visit our suggestions page to share your ideas and help us create the perfect companion."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FaQuestionCircle className="text-[#F361B0] text-xs" />
            <span className="text-white/80 text-xs font-medium">FAQ</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
           Curious about Qtomi? Let’s dive in.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 lg:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base lg:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white shadow-lg"
                  >
                    {openIndex === index ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-3 text-gray-500 leading-relaxed text-sm lg:text-base"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;