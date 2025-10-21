import { useState } from "react";
import { motion } from "framer-motion";

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

    return (
        <div className="min-h-screen bg-[#080808] bg-[radial-gradient(circle_at_top,_#1a001f_0%,_#000_80%)] text-white py-20 px-6 sm:px-8 relative overflow-hidden">
            {/* Floating background glow */}
            <div className="absolute inset-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto relative z-10"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-5xl p-5 font-extrabold bg-gradient-to-r from-[#F361B0] via-[#E60076] to-[#ff007f] bg-clip-text text-transparent drop-shadow-md"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Let's Build Qutomi Together!
                    </motion.h1>
                    <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">
                        Help us shape the future of{" "}
                        <span className="text-[#F361B0] font-semibold">Qutomi</span> — your
                        feedback will make our companion smarter, cuter, and truly yours.
                    </p>
                </div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-10"
                >
                    {/* About You Section */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4] text-center sm:text-left">About You</h2>

                        {/* Name */}
                        <div>
                            <label className="text-gray-300 font-medium">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="mt-2 w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-full focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                            />
                        </div>

                        {/* Gmail */}
                        <div>
                            <label className="text-gray-300 font-medium">Your Gmail</label>
                            <input
                                type="email"
                                name="gmail"
                                value={formData.gmail}
                                onChange={handleChange}
                                placeholder="Enter your Gmail"
                                required
                                className="mt-2 w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-full focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="text-gray-300 font-medium">Your City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Where are you from?"
                                required
                                className="mt-2 w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-full focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                            />
                        </div>

                        {/* Age Group */}
                        <div>
                            <label className="text-gray-300 font-medium">
                                What is your age group?
                            </label>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {["Under 15", "15–25", "26–35", "36–50", "50+"].map((age) => (
                                    <label
                                        key={age}
                                        className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${formData.ageGroup === age
                                            ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
                                            : "hover:border-[#E60076]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="ageGroup"
                                            value={age}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        {age}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-gray-300 font-medium">
                                Where would you most likely use Qutomi?
                            </label>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {["Home", "Office", "Study space", "Other"].map((loc) => (
                                    <label
                                        key={loc}
                                        className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${formData.useLocation === loc
                                            ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
                                            : "hover:border-[#E60076]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="useLocation"
                                            value={loc}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        {loc}
                                    </label>
                                ))}
                            </div>
                            {formData.useLocation === "Other" && (
                                <input
                                    type="text"
                                    name="locationOther"
                                    placeholder="Please specify..."
                                    onChange={handleChange}
                                    className="mt-3 w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#E60076] focus:outline-none placeholder-gray-500"
                                />
                            )}
                        </div>
                    </div>

                    {/* Design Section */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-4">
                        <h2 className="text-2xl font-semibold text-[#ff69b4] text-center sm:text-left">Design & Feel</h2>

                        {/* Slider label */}
                        <label htmlFor="designAppeal" className="font-medium text-gray-300 block text-center sm:text-left">
                            How appealing is Qutomi’s concept?
                        </label>

                        {/* Emoji Rating - same for all devices */}
                        <div className="mt-2 mb-2 flex justify-center gap-3 text-2xl sm:text-3xl">
                            {["😕", "😐", "🙂", "😃", "😍"].map((emoji, index) => (
                                <span
                                    key={index}
                                    className={`transition-transform cursor-pointer ${formData.designAppeal - 1 === index ? "scale-125" : "scale-100"
                                        }`}
                                    onClick={() => setFormData(prev => ({ ...prev, designAppeal: index + 1 }))}
                                >
                                    {emoji}
                                </span>
                            ))}
                        </div>

                        {/* Range Slider */}
                        <input
                            id="designAppeal"
                            type="range"
                            name="designAppeal"
                            min="1"
                            max="5"
                            value={formData.designAppeal}
                            onChange={handleChange}
                            className="w-full accent-[#E60076] cursor-pointer"
                        />

                        {/* Design Style Textarea */}
                        <textarea
                            name="designStyle"
                            rows={3}
                            placeholder="Describe your ideal color or design style..."
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                        />
                    </div>




                    {/* Features Section */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4] text-center sm:text-left">Features & Ideas</h2>
                        <p className="text-sm text-gray-400">
                            Select up to 3 features that matter most to you:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {featureOptions.map((feature) => (
                                <label
                                    key={feature}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0b0b0b]/70 border border-white/10 cursor-pointer transition hover:bg-[#E60076]/20 break-words ${formData.valuableFeatures.includes(feature)
                                        ? "border-[#E60076] bg-[#E60076]/30"
                                        : ""
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        value={feature}
                                        onChange={handleFeatureChange}
                                        checked={formData.valuableFeatures.includes(feature)}
                                        className="accent-[#E60076] h-4 w-4 rounded-full flex-shrink-0"
                                    />
                                    <span className="text-sm sm:text-base break-words">{feature}</span>
                                </label>
                            ))}
                        </div>


                        <textarea
                            name="newFeatureRequest"
                            rows={3}
                            placeholder="Any other ideas or features you’d love to see?"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                        />
                    </div>

                    {/* Price & Interest */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4] text-center sm:text-left">Price & Interest</h2>

                        {/* Comfort Price */}
                        <div>
                            <label className="font-medium text-gray-300">
                                How much would you be comfortable paying for Qutomi?
                            </label>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    "Under ₹2000",
                                    "₹2000–₹2999",
                                    "₹3000–₹3499",
                                    "₹3500+",
                                ].map((price) => (
                                    <label
                                        key={price}
                                        className={`px-3 py-2 text-sm sm:text-base sm:px-4 rounded-full border border-white/20 cursor-pointer transition ${formData.comfortPrice === price
                                            ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
                                            : "hover:border-[#E60076]/50"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="comfortPrice"
                                            value={price}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        {price}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Pre-order willingness */}
                        <div>
                            <label className="font-medium text-gray-300">
                                Are you happy to pay a pre-order price for Qutomi?
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                                Your pre-order price helps us improve Qutomi faster and make it even better for you!
                            </p>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {["Yes", "No", "Maybe"].map((opt) => (
                                    <label
                                        key={opt}
                                        className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${formData.preOrder === opt
                                            ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
                                            : "hover:border-[#E60076]/50"
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
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Priority Slot */}
                        <div>
                            <label className="font-medium text-gray-300">
                                Would you like to book a{" "}
                                <span className="text-[#F361B0]">priority slot</span> for Qutomi
                                before launch?
                            </label>
                            <div className="mt-3 flex flex-col gap-3">
                                {priorityOptions.map((opt) => (
                                    <label
                                        key={opt}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 cursor-pointer transition hover:bg-[#E60076]/10 ${formData.prioritySlot === opt
                                            ? "border-[#E60076] bg-[#E60076]/20"
                                            : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="prioritySlot"
                                            value={opt}
                                            checked={formData.prioritySlot === opt}
                                            onChange={handleChange}
                                            className="accent-[#E60076] h-4 w-4 rounded-full"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <textarea
                            name="finalThoughts"
                            rows={4}
                            placeholder="Any last thoughts or ideas to make Qutomi special?"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-[#E60076] to-[#F361B0] rounded-full shadow-lg hover:shadow-pink-500/40 transition-all"
                        >
                            Submit My Feedback
                        </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default SuggestionPage;
