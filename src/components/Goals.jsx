import { motion } from "framer-motion";
import { FaRobot, FaSmile, FaHandsHelping, FaHeart, FaStar, FaUsers, FaLightbulb } from "react-icons/fa";
import goalsImg from "../assets/Feature_img2.png";

const goals = [
  {
    icon: <FaRobot />,
    title: "Build Emotional Tech That Cares",
    text: "We aim to create technology that connects with people, understands feelings, and brings comfort into daily life.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaSmile />,
    title: "Empower Every Home With Joy",
    text: "Qutomi is designed to make every moment more playful, calm, and human — for kids, adults, and families alike.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovate With Purpose & Passion",
    text: "We continuously push boundaries in AI and emotional intelligence to create meaningful experiences that enrich lives.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: <FaHandsHelping />,
    title: "Give Back With Every Unit Sold",
    text: "5% of every Qutomi sold goes to orphan children's education and wellbeing. Together, we can make technology that truly matters.",
    gradient: "from-purple-500 to-indigo-600",
  },
  
];

const Goals = () => {
  return (
    <section id="goals" className="relative w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-5 left-5 w-48 h-48 bg-gradient-to-r from-[#F361B0]/20 to-[#FF9CDA]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-60 h-60 bg-gradient-to-r from-[#00FFFF]/10 to-[#00BFFF]/20 rounded-full blur-2xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FaStar className="text-[#F361B0] text-xs" />
            <span className="text-white/80 text-xs font-medium">Our Mission</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Beyond Technology,
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              Towards Humanity
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Qutomi isn't just a smart companion. It's a step toward emotional
            technology that spreads care, creativity, and kindness — one smile at a time.
          </p>
        </motion.div>

        {/* Main Content - Adjusted Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side - Larger Illustration */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center lg:justify-start relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -z-10 w-80 h-80 bg-gradient-to-r from-[#F361B0]/10 to-[#00FFFF]/10 rounded-full blur-2xl animate-pulse" />
            <div className="relative group">
              <motion.img
                src={goalsImg}
                alt="Qutomi Goals Illustration"
                className="w-full max-w-sm lg:max-w-md object-contain rounded-xl drop-shadow-2xl relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#00FFFF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            </div>
          </motion.div>

          {/* Right Side - 2x2 Goals Grid */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  
                  <div className="relative p-5 h-full flex flex-col z-10">
                    <motion.div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center text-white text-lg shadow-lg mb-3`}
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {goal.icon}
                    </motion.div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
                      {goal.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      {goal.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Donation Message - Full Width Below Grid */}
            <motion.div
              className="mt-6 lg:mt-8 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#F361B0]/10 to-[#00FFFF]/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <FaHeart className="text-[#F361B0] text-xl flex-shrink-0" />
                <span className="text-white font-semibold text-base">
                  When you bring home a Qutomi, you bring happiness to another home too.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Goals;