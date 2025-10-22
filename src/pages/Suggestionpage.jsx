import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuggestionPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        gmail: "",
        city: "",
        ageGroup: "",
        useLocation: "",
        locationOther: "",
        designAppeal: 5,
        designStyle: "",
        valuableFeatures: [],
        newFeatureRequest: "",
        comfortPrice: "",
        preOrder: "",
        prioritySlot: "",
        finalThoughts: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFeatureChange = (e) => {
        const { value, checked } = e.target;
        const current = formData.valuableFeatures;
        if (checked && current.length < 3) {
            setFormData((prev) => ({
                ...prev,
                valuableFeatures: [...current, value],
            }));
        } else if (!checked) {
            setFormData((prev) => ({
                ...prev,
                valuableFeatures: current.filter((f) => f !== value),
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submission triggered");

        const dataToSend = { ...formData };
        console.log("Prepared data to send:", dataToSend);

        try {
            console.log("Sending data to Google Apps Script...");
            await fetch(import.meta.env.VITE_WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });
            alert("✨ Thanks! Your response has been saved.");
        } catch (err) {
            console.error("Error while submitting form:", err);
            alert("⚠️ Oops! Something went wrong while saving your response.");
        }

        console.log("handleSubmit finished");
    };

    const featureOptions = [
        "Emotional Reactions",
        "Different colors",
        "Sounds",
        "Games",
        "Design",
    ];

    const priorityOptions = [
        "Yes, I want early access",
        "Maybe, tell me more later",
        "No, just exploring for now",
    ];

    // Color gradient for slider based on value
    const getSliderColor = (value) => {
        const colors = {
            1: "from-red-500 to-orange-500",
            2: "from-orange-500 to-yellow-500", 
            3: "from-yellow-500 to-green-500",
            4: "from-green-500 to-blue-500",
            5: "from-blue-500 to-purple-500"
        };
        return colors[value] || "from-[#F361B0] to-[#00FFFF]";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
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
                    className="absolute bottom-10 right-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
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
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to="/home"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                        <FaArrowLeft className="text-sm text-white" />
                        <span className="text-sm font-medium text-white">Back to Home</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaHeart className="text-[#F361B0] text-sm" />
                        <span className="text-white/80 text-sm font-medium">Your Voice Matters</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                        Let's Build
                        <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
                            Qutomi Together
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                        Help us shape the future of Qutomi — your feedback will make our companion smarter, cuter, and truly yours.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                >
                    {/* About You Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] bg-clip-text text-transparent">
                            About You
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="text-gray-300 font-medium mb-3 block">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white"
                                />
                            </div>

                            {/* Gmail */}
                            <div>
                                <label className="text-gray-300 font-medium mb-3 block">Your Gmail</label>
                                <input
                                    type="email"
                                    name="gmail"
                                    value={formData.gmail}
                                    onChange={handleChange}
                                    placeholder="Enter your Gmail"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">Your City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Where are you from?"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white"
                            />
                        </div>

                        {/* Age Group */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                What is your age group?
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {["Under 15", "15–25", "26–35", "36–50", "50+"].map((age) => (
                                    <motion.label
                                        key={age}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.ageGroup === age
                                            ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white border-transparent shadow-lg"
                                            : "bg-white/5 border-white/10 hover:border-[#F361B0]/50 text-gray-300"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="ageGroup"
                                            value={age}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="text-white">{age}</span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Where would you most likely use Qutomi?
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {["Home", "Office", "Study space", "Other"].map((loc) => (
                                    <motion.label
                                        key={loc}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.useLocation === loc
                                            ? "bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-white border-transparent shadow-lg"
                                            : "bg-white/5 border-white/10 hover:border-[#00FFFF]/50 text-gray-300"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="useLocation"
                                            value={loc}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="text-white">{loc}</span>
                                    </motion.label>
                                ))}
                            </div>
                            {formData.useLocation === "Other" && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    type="text"
                                    name="locationOther"
                                    placeholder="Please specify..."
                                    onChange={handleChange}
                                    className="mt-4 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white"
                                />
                            )}
                        </div>
                    </motion.div>

                    {/* Design Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                            Design & Feel
                        </h2>

                        <div>
                            <label className="text-gray-300 font-medium mb-4 block text-center">
                                How appealing is Qutomi's concept?
                            </label>

                            {/* Emoji Rating */}
                            <div className="flex justify-center gap-4 mb-6">
                                {["😕", "😐", "🙂", "😃", "😍"].map((emoji, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-3xl cursor-pointer transition-all duration-300 ${formData.designAppeal - 1 === index
                                            ? "scale-125 filter drop-shadow-lg"
                                            : "scale-100 opacity-70"
                                            }`}
                                        onClick={() => setFormData(prev => ({ ...prev, designAppeal: index + 1 }))}
                                    >
                                        {emoji}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Range Slider with Dynamic Colors */}
                            <div className="relative">
                                <input
                                    type="range"
                                    name="designAppeal"
                                    min="1"
                                    max="5"
                                    value={formData.designAppeal}
                                    onChange={handleChange}
                                    className={`w-full h-2 bg-gradient-to-r ${getSliderColor(formData.designAppeal)} rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg`}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>Not Really</span>
                                    <span>Very Much!</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Describe your ideal color or design style...
                            </label>
                            <textarea
                                name="designStyle"
                                rows={3}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-[#FF6B6B] placeholder-gray-500 transition-all duration-300 resize-none text-white"
                                placeholder="Tell us about your dream design..."
                            />
                        </div>
                    </motion.div>

                    {/* Features Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
                            Features & Ideas
                        </h2>

                        <p className="text-gray-400 text-sm">
                            Select up to 3 features that matter most to you:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {featureOptions.map((feature) => (
                                <motion.label
                                    key={feature}
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${formData.valuableFeatures.includes(feature)
                                        ? "bg-gradient-to-r from-[#A78BFA] to-[#C084FC] border-transparent shadow-lg"
                                        : "bg-white/5 border-white/10 hover:border-[#A78BFA]/50"
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        value={feature}
                                        onChange={handleFeatureChange}
                                        checked={formData.valuableFeatures.includes(feature)}
                                        className="accent-white h-4 w-4 rounded"
                                    />
                                    <span className={`text-sm font-medium ${formData.valuableFeatures.includes(feature) ? "text-white" : "text-gray-300"}`}>
                                        {feature}
                                    </span>
                                </motion.label>
                            ))}
                        </div>

                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Any other ideas or features you'd love to see?
                            </label>
                            <textarea
                                name="newFeatureRequest"
                                rows={3}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#A78BFA] focus:border-[#A78BFA] placeholder-gray-500 transition-all duration-300 resize-none text-white"
                                placeholder="Share your creative ideas..."
                            />
                        </div>
                    </motion.div>

                    {/* Price & Interest Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
                            Price & Interest
                        </h2>

                        {/* Comfort Price */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                How much would you be comfortable paying for Qutomi?
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {["Under ₹2000", "₹2000–₹2999", "₹3000–₹3499", "₹3500+"].map((price) => (
                                    <motion.label
                                        key={price}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 text-sm text-center rounded-xl border cursor-pointer transition-all duration-300 ${formData.comfortPrice === price
                                            ? "bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] border-transparent shadow-lg"
                                            : "bg-white/5 border-white/10 hover:border-[#4ADE80]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="comfortPrice"
                                            value={price}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className={formData.comfortPrice === price ? "text-white font-semibold" : "text-gray-300"}>
                                            {price}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Pre-order willingness */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Are you happy to pay a pre-order price for Qutomi?
                            </label>
                            <p className="text-gray-400 text-sm mb-4">
                                Your pre-order helps us improve Qutomi faster and make it even better for you!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Yes", "No", "Maybe"].map((opt) => (
                                    <motion.label
                                        key={opt}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.preOrder === opt
                                            ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent shadow-lg"
                                            : "bg-white/5 border-white/10 hover:border-[#F361B0]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="preOrder"
                                            value={opt}
                                            checked={formData.preOrder === opt}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className={formData.preOrder === opt ? "text-white font-semibold" : "text-gray-300"}>
                                            {opt}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Priority Slot */}
                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Would you like to book a <span className="text-[#F361B0] font-semibold">priority slot</span> for Qutomi before launch?
                            </label>
                            <div className="space-y-3">
                                {priorityOptions.map((opt) => (
                                    <motion.label
                                        key={opt}
                                        whileHover={{ scale: 1.02 }}
                                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${formData.prioritySlot === opt
                                            ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent shadow-lg"
                                            : "bg-white/5 border-white/10 hover:border-[#F361B0]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="prioritySlot"
                                            value={opt}
                                            checked={formData.prioritySlot === opt}
                                            onChange={handleChange}
                                            className="accent-white h-4 w-4"
                                        />
                                        <span className={`font-medium ${formData.prioritySlot === opt ? "text-white" : "text-gray-300"}`}>
                                            {opt}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-300 font-medium mb-3 block">
                                Any last thoughts or ideas to make Qutomi special?
                            </label>
                            <textarea
                                name="finalThoughts"
                                rows={4}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#4ADE80] focus:border-[#4ADE80] placeholder-gray-500 transition-all duration-300 resize-none text-white"
                                placeholder="Share your final thoughts..."
                            />
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(243, 97, 176, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="group relative px-12 py-4 text-lg font-bold bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Button Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            
                            {/* Button Content */}
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                <span className="text-white">Submit My Feedback</span>
                            </div>
                        </motion.button>
                        
                        <p className="text-gray-400 text-sm mt-4">
                            Your feedback helps us create something amazing together! 💖
                        </p>
                    </motion.div>
                </motion.form>
            </div>
        </div>
    );
};

export default SuggestionPage;