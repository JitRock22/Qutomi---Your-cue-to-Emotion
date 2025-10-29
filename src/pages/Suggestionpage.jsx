// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaHeart, FaStar, FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const SuggestionPage = () => {
//     const navigate = useNavigate();
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         gmail: "",
//         city: "",
//         ageGroup: "",
//         useLocation: "",
//         locationOther: "",
//         designAppeal: 5,
//         designStyle: "",
//         valuableFeatures: [],
//         newFeatureRequest: "",
//         comfortPrice: "",
//         preOrder: "",
//         prioritySlot: "",
//         finalThoughts: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleFeatureChange = (e) => {
//         const { value, checked } = e.target;
//         const current = formData.valuableFeatures;
//         if (checked && current.length < 3) {
//             setFormData((prev) => ({
//                 ...prev,
//                 valuableFeatures: [...current, value],
//             }));
//         } else if (!checked) {
//             setFormData((prev) => ({
//                 ...prev,
//                 valuableFeatures: current.filter((f) => f !== value),
//             }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form submission started");
//         setIsSubmitting(true);


//         const now = new Date();
//         const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
//         const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
//         const localTime = `${date} ${time}`;
//         // Output: 24/10/2025 12:45:37 pm


//         const dataToSend = {
//             timestamp: localTime,
//             ...formData
//         };

//         try {
//             console.log("Sending to:", import.meta.env.VITE_WEB_APP_URL);

//             await fetch(import.meta.env.VITE_WEB_APP_URL, {
//                 method: "POST",
//                 mode: "no-cors",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(dataToSend),
//             });

//             console.log("Request sent successfully");

//             // Reset form
//             setFormData({
//                 name: "", gmail: "", city: "", ageGroup: "", useLocation: "",
//                 locationOther: "", designAppeal: 5, designStyle: "",
//                 valuableFeatures: [], newFeatureRequest: "", comfortPrice: "",
//                 preOrder: "", prioritySlot: "", finalThoughts: "",
//             });

//             // Navigate to success page
//             navigate("/success");

//         } catch (err) {
//             console.error("Full error:", err);

//             // Navigate to error page
//             navigate("/error");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const featureOptions = [
//         "Emotional Reactions",
//         "Different colors",
//         "Sounds",
//         "Games",
//         "Design",
//     ];

//     const priorityOptions = [
//         "Yes, I want early access",
//         "Maybe, tell me more later",
//         "No, just exploring for now",
//     ];

//     // Color gradient for slider based on value
//     const getSliderColor = (value) => {
//         const colors = {
//             1: "from-red-500 to-orange-500",
//             2: "from-orange-500 to-yellow-500",
//             3: "from-yellow-500 to-green-500",
//             4: "from-green-500 to-blue-500",
//             5: "from-blue-500 to-purple-500"
//         };
//         return colors[value] || "from-[#F361B0] to-[#00FFFF]";
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:px-6 relative overflow-hidden">
//             {/* Loading Overlay */}
//             {isSubmitting && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
//                 >
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-md"
//                     >
//                         {/* Spinner */}
//                         <div className="w-16 h-16 border-4 border-[#F361B0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

//                         {/* Text */}
//                         <h3 className="text-white text-xl font-bold mb-2">Submitting Your Feedback</h3>
//                         <p className="text-gray-300">Please wait while we save your response...</p>

//                         {/* Progress dots animation */}
//                         <div className="flex justify-center gap-1 mt-4">
//                             <motion.div
//                                 animate={{ scale: [1, 1.5, 1] }}
//                                 transition={{ duration: 1, repeat: Infinity, delay: 0 }}
//                                 className="w-2 h-2 bg-[#F361B0] rounded-full"
//                             />
//                             <motion.div
//                                 animate={{ scale: [1, 1.5, 1] }}
//                                 transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
//                                 className="w-2 h-2 bg-[#00FFFF] rounded-full"
//                             />
//                             <motion.div
//                                 animate={{ scale: [1, 1.5, 1] }}
//                                 transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
//                                 className="w-2 h-2 bg-[#FF9CDA] rounded-full"
//                             />
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}

//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <motion.div
//                     className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
//                     animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.3, 0.5, 0.3],
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 />
//                 <motion.div
//                     className="absolute bottom-10 right-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
//                     animate={{
//                         scale: [1.2, 1, 1.2],
//                         opacity: [0.2, 0.4, 0.2],
//                     }}
//                     transition={{
//                         duration: 10,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 2,
//                     }}
//                 />
//                 {/* Grid Pattern */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//             </div>

//             <div className="max-w-3xl mx-auto relative z-10">
//                 {/* Back Button */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="mb-8"
//                 >
//                     <Link
//                         to="/home"
//                         className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
//                     >
//                         <FaArrowLeft className="text-sm text-white" />
//                         <span className="text-sm font-medium text-white">Back to Home</span>
//                     </Link>
//                 </motion.div>

//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="text-center mb-12"
//                 >
//                     <motion.div
//                         className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         <FaHeart className="text-[#F361B0] text-sm" />
//                         <span className="text-white/80 text-sm font-medium">Your Voice Matters</span>
//                     </motion.div>

//                     <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
//                         Let's Build
//                         <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
//                             Qtomi Together
//                         </span>
//                     </h1>
//                     <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
//                         Help us shape the future of Qtomi — your feedback will make our companion smarter, cuter, and truly yours.
//                     </p>
//                 </motion.div>

//                 {/* Form */}
//                 <motion.form
//                     onSubmit={handleSubmit}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="space-y-8"
//                 >
//                     {/* About You Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
//                     >
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] bg-clip-text text-transparent">
//                             About You
//                         </h2>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {/* Name */}
//                             <div>
//                                 <label className="text-gray-300 font-medium mb-3 block">Your Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     placeholder="Enter your name"
//                                     required
//                                     disabled={isSubmitting}
//                                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 />
//                             </div>

//                             {/* Gmail */}
//                             <div>
//                                 <label className="text-gray-300 font-medium mb-3 block">Your Gmail</label>
//                                 <input
//                                     type="email"
//                                     name="gmail"
//                                     value={formData.gmail}
//                                     onChange={handleChange}
//                                     placeholder="Enter your Gmail"
//                                     required
//                                     disabled={isSubmitting}
//                                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 />
//                             </div>
//                         </div>

//                         {/* City */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">Your City</label>
//                             <input
//                                 type="text"
//                                 name="city"
//                                 value={formData.city}
//                                 onChange={handleChange}
//                                 placeholder="Where are you from?"
//                                 required
//                                 disabled={isSubmitting}
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                             />
//                         </div>

//                         {/* Age Group */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 What is your age group?
//                             </label>
//                             <div className="flex flex-wrap gap-3">
//                                 {["Under 15", "15–25", "26–35", "36–50", "50+"].map((age) => (
//                                     <motion.label
//                                         key={age}
//                                         whileHover={!isSubmitting ? { scale: 1.05 } : {}}
//                                         whileTap={!isSubmitting ? { scale: 0.95 } : {}}
//                                         className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.ageGroup === age
//                                             ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white border-transparent shadow-lg"
//                                             : "bg-white/5 border-white/10 hover:border-[#F361B0]/50 text-gray-300"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="ageGroup"
//                                             value={age}
//                                             onChange={handleChange}
//                                             disabled={isSubmitting}
//                                             className="hidden"
//                                         />
//                                         <span className="text-white">{age}</span>
//                                     </motion.label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Where would you most likely use Qtomi?
//                             </label>
//                             <div className="flex flex-wrap gap-3">
//                                 {["Home", "Office", "Study space", "Other"].map((loc) => (
//                                     <motion.label
//                                         key={loc}
//                                         whileHover={!isSubmitting ? { scale: 1.05 } : {}}
//                                         whileTap={!isSubmitting ? { scale: 0.95 } : {}}
//                                         className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.useLocation === loc
//                                             ? "bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-white border-transparent shadow-lg"
//                                             : "bg-white/5 border-white/10 hover:border-[#00FFFF]/50 text-gray-300"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="useLocation"
//                                             value={loc}
//                                             onChange={handleChange}
//                                             disabled={isSubmitting}
//                                             className="hidden"
//                                         />
//                                         <span className="text-white">{loc}</span>
//                                     </motion.label>
//                                 ))}
//                             </div>
//                             {formData.useLocation === "Other" && (
//                                 <motion.input
//                                     initial={{ opacity: 0, height: 0 }}
//                                     animate={{ opacity: 1, height: "auto" }}
//                                     type="text"
//                                     name="locationOther"
//                                     placeholder="Please specify..."
//                                     onChange={handleChange}
//                                     disabled={isSubmitting}
//                                     className="mt-4 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 />
//                             )}
//                         </div>
//                     </motion.div>

//                     {/* Design Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
//                     >
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
//                             Design & Feel
//                         </h2>

//                         <div>
//                             <label className="text-gray-300 font-medium mb-4 block text-center">
//                                 How appealing is Qtomi's concept?
//                             </label>

//                             {/* Emoji Rating */}
//                             <div className="flex justify-center gap-4 mb-6">
//                                 {["😕", "😐", "🙂", "😃", "😍"].map((emoji, index) => (
//                                     <motion.span
//                                         key={index}
//                                         whileHover={!isSubmitting ? { scale: 1.2 } : {}}
//                                         whileTap={!isSubmitting ? { scale: 0.9 } : {}}
//                                         className={`text-3xl cursor-pointer transition-all duration-300 ${formData.designAppeal - 1 === index
//                                             ? "scale-125 filter drop-shadow-lg"
//                                             : "scale-100 opacity-70"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                         onClick={() => !isSubmitting && setFormData(prev => ({ ...prev, designAppeal: index + 1 }))}
//                                     >
//                                         {emoji}
//                                     </motion.span>
//                                 ))}
//                             </div>

//                             {/* Range Slider with Dynamic Colors */}
//                             <div className="relative">
//                                 <input
//                                     type="range"
//                                     name="designAppeal"
//                                     min="1"
//                                     max="5"
//                                     value={formData.designAppeal}
//                                     onChange={handleChange}
//                                     disabled={isSubmitting}
//                                     className={`w-full h-2 bg-gradient-to-r ${getSliderColor(formData.designAppeal)} rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
//                                 />
//                                 <div className="flex justify-between text-xs text-gray-400 mt-2">
//                                     <span>Not Really</span>
//                                     <span>Very Much!</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Describe your ideal color or design style...
//                             </label>
//                             <textarea
//                                 name="designStyle"
//                                 rows={3}
//                                 onChange={handleChange}
//                                 disabled={isSubmitting}
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-[#FF6B6B] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 placeholder="Tell us about your dream design..."
//                             />
//                         </div>
//                     </motion.div>

//                     {/* Features Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                         className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
//                     >
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
//                             Features & Ideas
//                         </h2>

//                         <p className="text-gray-400 text-sm">
//                             Select up to 3 features that matter most to you:
//                         </p>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                             {featureOptions.map((feature) => (
//                                 <motion.label
//                                     key={feature}
//                                     whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                                     className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${formData.valuableFeatures.includes(feature)
//                                         ? "bg-gradient-to-r from-[#A78BFA] to-[#C084FC] border-transparent shadow-lg"
//                                         : "bg-white/5 border-white/10 hover:border-[#A78BFA]/50"
//                                         } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                 >
//                                     <input
//                                         type="checkbox"
//                                         value={feature}
//                                         onChange={handleFeatureChange}
//                                         checked={formData.valuableFeatures.includes(feature)}
//                                         disabled={isSubmitting}
//                                         className="accent-white h-4 w-4 rounded"
//                                     />
//                                     <span className={`text-sm font-medium ${formData.valuableFeatures.includes(feature) ? "text-white" : "text-gray-300"}`}>
//                                         {feature}
//                                     </span>
//                                 </motion.label>
//                             ))}
//                         </div>

//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Any other ideas or features you'd love to see?
//                             </label>
//                             <textarea
//                                 name="newFeatureRequest"
//                                 rows={3}
//                                 onChange={handleChange}
//                                 disabled={isSubmitting}
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#A78BFA] focus:border-[#A78BFA] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 placeholder="Share your creative ideas..."
//                             />
//                         </div>
//                     </motion.div>

//                     {/* Price & Interest Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                         className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl space-y-6"
//                     >
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
//                             Price & Interest
//                         </h2>

//                         {/* Comfort Price */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 How much would you be comfortable paying for Qtomi?
//                             </label>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                                 {["Under ₹2000", "₹2000–₹2999", "₹3000–₹3499", "₹3500+"].map((price) => (
//                                     <motion.label
//                                         key={price}
//                                         whileHover={!isSubmitting ? { scale: 1.05 } : {}}
//                                         whileTap={!isSubmitting ? { scale: 0.95 } : {}}
//                                         className={`p-3 text-sm text-center rounded-xl border cursor-pointer transition-all duration-300 ${formData.comfortPrice === price
//                                             ? "bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] border-transparent shadow-lg"
//                                             : "bg-white/5 border-white/10 hover:border-[#4ADE80]/50"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="comfortPrice"
//                                             value={price}
//                                             onChange={handleChange}
//                                             disabled={isSubmitting}
//                                             className="hidden"
//                                         />
//                                         <span className={formData.comfortPrice === price ? "text-white font-semibold" : "text-gray-300"}>
//                                             {price}
//                                         </span>
//                                     </motion.label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Pre-order willingness */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Are you happy to pay a pre-order price for Qtomi?
//                             </label>
//                             <p className="text-gray-400 text-sm mb-4">
//                                 Your pre-order helps us improve Qtomi faster and make it even better for you!
//                             </p>
//                             <div className="flex flex-wrap gap-3">
//                                 {["Yes", "No", "Maybe"].map((opt) => (
//                                     <motion.label
//                                         key={opt}
//                                         whileHover={!isSubmitting ? { scale: 1.05 } : {}}
//                                         whileTap={!isSubmitting ? { scale: 0.95 } : {}}
//                                         className={`px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.preOrder === opt
//                                             ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent shadow-lg"
//                                             : "bg-white/5 border-white/10 hover:border-[#F361B0]/50"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="preOrder"
//                                             value={opt}
//                                             checked={formData.preOrder === opt}
//                                             onChange={handleChange}
//                                             disabled={isSubmitting}
//                                             className="hidden"
//                                         />
//                                         <span className={formData.preOrder === opt ? "text-white font-semibold" : "text-gray-300"}>
//                                             {opt}
//                                         </span>
//                                     </motion.label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Priority Slot */}
//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Would you like to book a <span className="text-[#F361B0] font-semibold">priority slot</span> for Qtomi before launch?
//                             </label>
//                             <div className="space-y-3">
//                                 {priorityOptions.map((opt) => (
//                                     <motion.label
//                                         key={opt}
//                                         whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                                         className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${formData.prioritySlot === opt
//                                             ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent shadow-lg"
//                                             : "bg-white/5 border-white/10 hover:border-[#F361B0]/50"
//                                             } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="prioritySlot"
//                                             value={opt}
//                                             checked={formData.prioritySlot === opt}
//                                             onChange={handleChange}
//                                             disabled={isSubmitting}
//                                             className="accent-white h-4 w-4"
//                                         />
//                                         <span className={`font-medium ${formData.prioritySlot === opt ? "text-white" : "text-gray-300"}`}>
//                                             {opt}
//                                         </span>
//                                     </motion.label>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="text-gray-300 font-medium mb-3 block">
//                                 Any last thoughts or ideas to make Qtomi special?
//                             </label>
//                             <textarea
//                                 name="finalThoughts"
//                                 rows={4}
//                                 onChange={handleChange}
//                                 disabled={isSubmitting}
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#4ADE80] focus:border-[#4ADE80] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
//                                 placeholder="Share your final thoughts..."
//                             />
//                         </div>
//                     </motion.div>

//                     {/* Submit Button */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                         className="text-center pt-8"
//                     >
//                         <motion.button
//                             whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 20px 40px rgba(243, 97, 176, 0.3)" } : {}}
//                             whileTap={!isSubmitting ? { scale: 0.95 } : {}}
//                             type="submit"
//                             disabled={isSubmitting}
//                             className={`group relative px-12 py-4 text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${isSubmitting
//                                 ? "bg-gray-600 cursor-not-allowed"
//                                 : "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA]"
//                                 }`}
//                         >
//                             {/* Button Glow - Only when not loading */}
//                             {!isSubmitting && (
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
//                             )}

//                             {/* Button Content */}
//                             <div className="relative z-10 flex items-center justify-center gap-3">
//                                 {isSubmitting ? (
//                                     // Loading spinner
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                         <span className="text-white">Submitting...</span>
//                                     </div>
//                                 ) : (
//                                     // Normal button text
//                                     <span className="text-white">Submit My Feedback</span>
//                                 )}
//                             </div>
//                         </motion.button>

//                         <p className="text-gray-400 text-sm mt-4">
//                             {isSubmitting ? "Saving your feedback..." : "Your feedback helps us create something amazing together! 💖"}
//                         </p>
//                     </motion.div>
//                 </motion.form>
//             </div>
//         </div>
//     );
// };

// export default SuggestionPage;


import { useState, useEffect, useRef, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowLeft, FaArrowRight, FaCheck, FaStar, FaEdit, FaUser, FaPalette, FaCogs, FaRupeeSign, FaHome, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

// Hook to detect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Optimized motion components that respect user preferences
const createOptimizedMotion = (prefersReducedMotion) => {
  return prefersReducedMotion 
    ? ({ children, initial, animate, exit, whileHover, whileTap, ...props }) => <div {...props}>{children}</div>
    : motion.div;
};

// Memoized form components
const Step1 = memo(({ formData, handleChange, isSubmitting, MotionComponent, prefersReducedMotion }) => {
  return (
    <MotionComponent
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] bg-clip-text text-transparent">
          About You
        </h2>
        <p className="text-gray-400 text-sm mt-2">Tell us a bit about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 text-sm backdrop-blur-sm"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">Gmail</label>
          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
            placeholder="Enter your Gmail"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 text-sm backdrop-blur-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-2 block">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Where are you from?"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 text-sm backdrop-blur-sm"
        />
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-3 block">Age Group</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Under 15", "15-25", "26-35", "36-50", "50+"].map((age) => (
            <MotionComponent
              key={age}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.02 } : {}}
              className={`px-3 py-2 text-sm rounded-lg border cursor-pointer transition-all duration-200 text-center backdrop-blur-sm ${formData.ageGroup === age
                ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white border-transparent shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#F361B0]/50 text-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="cursor-pointer w-full h-full block">
                <input
                  type="radio"
                  name="ageGroup"
                  value={age}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                <span className="text-xs">{age}</span>
              </label>
            </MotionComponent>
          ))}
        </div>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-3 block">Where would you use Qtomi?</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Home", "Office", "Study", "Other"].map((loc) => (
            <MotionComponent
              key={loc}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.02 } : {}}
              className={`px-3 py-2 text-sm rounded-lg border cursor-pointer transition-all duration-200 text-center backdrop-blur-sm ${formData.useLocation === loc
                ? "bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-white border-transparent shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#00FFFF]/50 text-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="cursor-pointer w-full h-full block">
                <input
                  type="radio"
                  name="useLocation"
                  value={loc}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                <span className="text-xs">{loc}</span>
              </label>
            </MotionComponent>
          ))}
        </div>
        {formData.useLocation === "Other" && (
          <MotionComponent
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-3 overflow-hidden"
          >
            <input
              type="text"
              name="locationOther"
              value={formData.locationOther}
              onChange={handleChange}
              placeholder="Please specify where you'd use Qtomi..."
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F361B0] focus:border-[#F361B0] placeholder-gray-500 transition-all duration-300 text-white disabled:opacity-50 text-sm backdrop-blur-sm"
            />
          </MotionComponent>
        )}
      </div>
    </MotionComponent>
  );
});

const Step2 = memo(({ formData, handleChange, setFormData, isSubmitting, MotionComponent, prefersReducedMotion }) => {
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
    <MotionComponent
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
          Design & Feel
        </h2>
        <p className="text-gray-400 text-sm mt-2">Share your design preferences</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <label className="text-gray-300 text-sm font-medium mb-4 block text-center">
          How appealing is Qtomi's concept?
        </label>

        <div className="flex justify-center gap-3 mb-4">
          {["😕", "😐", "🙂", "😃", "😍"].map((emoji, index) => (
            <MotionComponent
              key={index}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.1 } : {}}
              className={`text-2xl cursor-pointer transition-all duration-200 ${formData.designAppeal - 1 === index
                ? "scale-110 filter drop-shadow-lg"
                : "scale-100 opacity-70"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => !isSubmitting && setFormData(prev => ({ ...prev, designAppeal: index + 1 }))}
            >
              {emoji}
            </MotionComponent>
          ))}
        </div>

        <div className="relative">
          <input
            type="range"
            name="designAppeal"
            min="1"
            max="5"
            value={formData.designAppeal}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full h-2 bg-gradient-to-r ${getSliderColor(formData.designAppeal)} rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg disabled:opacity-50`}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Not Really</span>
            <span>Very Much!</span>
          </div>
        </div>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-2 block">
          Describe your ideal design style...
        </label>
        <textarea
          name="designStyle"
          rows={3}
          value={formData.designStyle}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#FF6B6B] focus:border-[#FF6B6B] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 text-sm backdrop-blur-sm"
          placeholder="Tell us about colors, shapes, and styles you love..."
        />
      </div>
    </MotionComponent>
  );
});

const Step3 = memo(({ formData, handleChange, handleFeatureChange, isSubmitting, MotionComponent, prefersReducedMotion }) => {
  const featureOptions = [
    "Emotional Reactions",
    "Different colors",
    "Sounds",
    "Games",
    "Design",
  ];

  return (
    <MotionComponent
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
          Features & Ideas
        </h2>
        <p className="text-gray-400 text-sm mt-2">What features excite you most?</p>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-3 block">
          Select up to 3 features that matter most:
        </label>
        <div className="grid grid-cols-1 gap-3">
          {featureOptions.map((feature) => (
            <MotionComponent
              key={feature}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.01 } : {}}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${formData.valuableFeatures.includes(feature)
                ? "bg-gradient-to-r from-[#A78BFA] to-[#C084FC] border-transparent shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#A78BFA]/50"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="flex items-center gap-3 cursor-pointer w-full">
                <input
                  type="checkbox"
                  value={feature}
                  onChange={handleFeatureChange}
                  checked={formData.valuableFeatures.includes(feature)}
                  disabled={isSubmitting}
                  className="accent-white h-4 w-4 rounded"
                />
                <span className={`text-sm ${formData.valuableFeatures.includes(feature) ? "text-white font-medium" : "text-gray-300"}`}>
                  {feature}
                </span>
              </label>
            </MotionComponent>
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-2 text-center">
          {formData.valuableFeatures.length}/3 selected
        </p>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-2 block">
          Any other features you'd love to see?
        </label>
        <textarea
          name="newFeatureRequest"
          rows={3}
          value={formData.newFeatureRequest}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#A78BFA] focus:border-[#A78BFA] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 text-sm backdrop-blur-sm"
          placeholder="Share your creative ideas and suggestions..."
        />
      </div>
    </MotionComponent>
  );
});

const Step4 = memo(({ formData, handleChange, isSubmitting, MotionComponent, prefersReducedMotion }) => {
  const priorityOptions = [
    "Yes, I want early access",
    "Maybe, tell me more later",
    "No, just exploring for now",
  ];

  return (
    <MotionComponent
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
          Price & Interest
        </h2>
        <p className="text-gray-400 text-sm mt-2">Help us understand your preferences</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <label className="text-gray-300 text-sm font-medium mb-3 block">Comfortable Price Range</label>
        <div className="grid grid-cols-2 gap-3">
          {["Under ₹2000", "₹2000-₹2999", "₹3000-₹3499", "₹3500+"].map((price) => (
            <MotionComponent
              key={price}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.02 } : {}}
              className={`p-3 text-xs text-center rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${formData.comfortPrice === price
                ? "bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] border-transparent text-white shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#4ADE80]/50 text-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="cursor-pointer w-full h-full block">
                <input
                  type="radio"
                  name="comfortPrice"
                  value={price}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                {price}
              </label>
            </MotionComponent>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <label className="text-gray-300 text-sm font-medium mb-3 block">Pre-order Interest</label>
        <p className="text-gray-400 text-xs mb-3">Your pre-order helps us improve Qtomi faster!</p>
        <div className="grid grid-cols-3 gap-2">
          {["Yes", "No", "Maybe"].map((opt) => (
            <MotionComponent
              key={opt}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.02 } : {}}
              className={`p-3 text-xs text-center rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${formData.preOrder === opt
                ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent text-white shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#F361B0]/50 text-gray-300"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="cursor-pointer w-full h-full block">
                <input
                  type="radio"
                  name="preOrder"
                  value={opt}
                  checked={formData.preOrder === opt}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                {opt}
              </label>
            </MotionComponent>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <label className="text-gray-300 text-sm font-medium mb-3 block">
          Priority Slot Interest <span className="text-[#F361B0]">★</span>
        </label>
        <div className="space-y-3">
          {priorityOptions.map((opt) => (
            <MotionComponent
              key={opt}
              whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.01 } : {}}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${formData.prioritySlot === opt
                ? "bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] border-transparent shadow-lg"
                : "bg-white/5 border-white/10 hover:border-[#F361B0]/50"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <label className="flex items-center gap-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="prioritySlot"
                  value={opt}
                  checked={formData.prioritySlot === opt}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="accent-white h-3 w-3"
                />
                <span className={`text-sm ${formData.prioritySlot === opt ? "text-white font-medium" : "text-gray-300"}`}>
                  {opt}
                </span>
              </label>
            </MotionComponent>
          ))}
        </div>
      </div>

      <div>
        <label className="text-gray-300 text-sm font-medium mb-2 block">Final Thoughts</label>
        <textarea
          name="finalThoughts"
          rows={3}
          value={formData.finalThoughts}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#4ADE80] focus:border-[#4ADE80] placeholder-gray-500 transition-all duration-300 resize-none text-white disabled:opacity-50 text-sm backdrop-blur-sm"
          placeholder="Any last ideas to make Qtomi truly special for you?"
        />
      </div>
    </MotionComponent>
  );
});

const Step5 = memo(({ formData, goToStep, handleSubmit, isSubmitting, MotionComponent, prefersReducedMotion }) => {
  const steps = [
    { id: 1, title: "About You", icon: FaUser },
    { id: 2, title: "Design & Feel", icon: FaPalette },
    { id: 3, title: "Features", icon: FaCogs },
    { id: 4, title: "Price & Interest", icon: FaRupeeSign },
  ];

  return (
    <MotionComponent
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
          Review Your Feedback
        </h2>
        <p className="text-gray-400 text-sm mt-2">Everything looks perfect! Ready to submit?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MotionComponent
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center">
              <FaUser className="text-white text-sm" />
            </div>
            <h3 className="text-white font-semibold">Personal Information</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Name:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] bg-clip-text text-transparent">
                {formData.name || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Email:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] bg-clip-text text-transparent">
                {formData.gmail || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">City:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
                {formData.city || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Age Group:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                {formData.ageGroup || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Usage Location:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
                {formData.useLocation || "Not provided"}
              </span>
            </div>
          </div>
        </MotionComponent>

        <MotionComponent
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
              <FaPalette className="text-white text-sm" />
            </div>
            <h3 className="text-white font-semibold">Design & Features</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Design Appeal:</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${i < formData.designAppeal
                      ? "text-yellow-400"
                      : "text-gray-600"
                      }`}
                  />
                ))}
                <span className="text-white font-medium ml-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  ({formData.designAppeal}/5)
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Selected Features:</span>
              <span className="text-white font-medium text-right bg-gradient-to-r from-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent">
                {formData.valuableFeatures.length > 0
                  ? formData.valuableFeatures.slice(0, 2).join(", ") +
                  (formData.valuableFeatures.length > 2 ? "..." : "")
                  : "None selected"
                }
              </span>
            </div>
            {formData.designStyle && (
              <div>
                <span className="text-gray-400 block mb-1">Design Ideas:</span>
                <p className="text-white text-xs bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-3 border border-white/10">
                  {formData.designStyle}
                </p>
              </div>
            )}
          </div>
        </MotionComponent>

        <MotionComponent
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] flex items-center justify-center">
              <FaRupeeSign className="text-white text-sm" />
            </div>
            <h3 className="text-white font-semibold">Pricing & Interest</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Comfortable Price:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
                {formData.comfortPrice || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Pre-order Interest:</span>
              <span className={`font-medium ${formData.preOrder === "Yes" ? "text-green-400 bg-green-400/10 px-2 py-1 rounded-full" :
                formData.preOrder === "No" ? "text-red-400 bg-red-400/10 px-2 py-1 rounded-full" :
                  "text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full"
                }`}>
                {formData.preOrder || "Not specified"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Priority Slot:</span>
              <span className="text-white font-medium bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] bg-clip-text text-transparent">
                {formData.prioritySlot || "Not specified"}
              </span>
            </div>
          </div>
        </MotionComponent>

        <MotionComponent
          whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A78BFA] to-[#C084FC] flex items-center justify-center">
              <FaCogs className="text-white text-sm" />
            </div>
            <h3 className="text-white font-semibold">Additional Thoughts</h3>
          </div>
          <div className="space-y-3 text-sm">
            {formData.newFeatureRequest ? (
              <div>
                <span className="text-gray-400 block mb-1">Feature Requests:</span>
                <p className="text-white text-xs bg-gradient-to-r from-[#A78BFA]/10 to-[#C084FC]/10 rounded-lg p-3 border border-[#A78BFA]/20">
                  {formData.newFeatureRequest}
                </p>
              </div>
            ) : (
              <p className="text-gray-400 text-center py-2">No additional feature requests</p>
            )}
            {formData.finalThoughts ? (
              <div>
                <span className="text-gray-400 block mb-1">Final Thoughts:</span>
                <p className="text-white text-xs bg-gradient-to-r from-[#4ADE80]/10 to-[#22D3EE]/10 rounded-lg p-3 border border-[#4ADE80]/20">
                  {formData.finalThoughts}
                </p>
              </div>
            ) : (
              <p className="text-gray-400 text-center py-2">No final thoughts added</p>
            )}
          </div>
        </MotionComponent>
      </div>

      <div className="border-t border-white/10 pt-6 mt-4">
        <p className="text-gray-400 text-sm font-medium mb-4 text-center">
          Need to make changes? Edit any section below:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {steps.slice(0, 4).map((step) => {
            const gradientColors = {
              1: "from-[#F361B0] to-[#FF9CDA]",
              2: "from-[#FF6B6B] to-[#FF8E53]",
              3: "from-[#A78BFA] to-[#C084FC]",
              4: "from-[#4ADE80] to-[#22D3EE]"
            };

            return (
              <MotionComponent
                key={step.id}
                whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : {}}
                whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 group cursor-pointer"
                onClick={() => goToStep(step.id)}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradientColors[step.id]} flex items-center justify-center ${!prefersReducedMotion ? 'group-hover:scale-110 transition-all duration-200' : ''} shadow-lg`}>
                  <step.icon className="text-white text-base" />
                </div>
                <span className="text-xs font-medium group-hover:text-white transition-colors duration-200">
                  {step.title}
                </span>
              </MotionComponent>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
        <MotionComponent
          whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
          whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium cursor-pointer"
          onClick={() => goToStep(4)}
          disabled={isSubmitting}
        >
          <FaArrowLeft className="text-sm" />
          Back to Previous Step
        </MotionComponent>

        <MotionComponent
          whileHover={!isSubmitting && !prefersReducedMotion ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting && !prefersReducedMotion ? { scale: 0.95 } : {}}
          className={`px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isSubmitting
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-[#F361B0] to-[#00FFFF] hover:shadow-lg hover:shadow-[#F361B0]/30"
            } text-sm`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 text-white h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <FaCheck className="text-sm text-white" />
              Submit My Suggestions
            </>
          )}
        </MotionComponent>
      </div>
    </MotionComponent>
  );
});

const SuggestionPage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const formRef = useRef(null);
    
    // Detect reduced motion preference
    const prefersReducedMotion = useReducedMotion();
    
    // Create optimized motion component based on preference
    const MotionComponent = createOptimizedMotion(prefersReducedMotion);
    
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

    const steps = [
        { id: 1, title: "About You", progress: 20, icon: FaUser },
        { id: 2, title: "Design & Feel", progress: 40, icon: FaPalette },
        { id: 3, title: "Features", progress: 60, icon: FaCogs },
        { id: 4, title: "Price & Interest", progress: 80, icon: FaRupeeSign },
        { id: 5, title: "Review", progress: 100, icon: FaCheck }
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Throttled scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const nextStep = useCallback(() => {
        if (currentStep < steps.length) {
            setCurrentStep(prev => prev + 1);
        }
    }, [currentStep, steps.length]);

    const prevStep = useCallback(() => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    }, [currentStep]);

    const goToStep = useCallback((stepNumber) => {
        setCurrentStep(stepNumber);
    }, []);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleFeatureChange = useCallback((e) => {
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
    }, [formData.valuableFeatures]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        
        console.log("Form submission started");
        setIsSubmitting(true);

        const now = new Date();
        const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
        const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
        const localTime = `${date} ${time}`;

        const dataToSend = {
            timestamp: localTime,
            ...formData
        };

        try {
            console.log("Sending to:", import.meta.env.VITE_WEB_APP_URL);

            await fetch(import.meta.env.VITE_WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            console.log("Request sent successfully");

            setFormData({
                name: "", gmail: "", city: "", ageGroup: "", useLocation: "",
                locationOther: "", designAppeal: 5, designStyle: "",
                valuableFeatures: [], newFeatureRequest: "", comfortPrice: "",
                preOrder: "", prioritySlot: "", finalThoughts: "",
            });

            navigate("/success", { state: { submitted: true } });

        } catch (err) {
            console.error("Full error:", err);
            navigate("/error", { state: { fromForm: true } });

        } finally {
            setIsSubmitting(false);
        }
    };

    // Render current step
    const renderCurrentStep = () => {
        const commonProps = {
            formData,
            handleChange,
            isSubmitting,
            MotionComponent,
            prefersReducedMotion
        };

        switch (currentStep) {
            case 1:
                return <Step1 {...commonProps} />;
            case 2:
                return <Step2 {...commonProps} setFormData={setFormData} />;
            case 3:
                return <Step3 {...commonProps} handleFeatureChange={handleFeatureChange} />;
            case 4:
                return <Step4 {...commonProps} />;
            case 5:
                return <Step5 {...commonProps} goToStep={goToStep} handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:px-6 relative overflow-hidden">
            {/* Loading Overlay */}
            {isSubmitting && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-md"
                    >
                        <div className="w-16 h-16 border-4 border-[#F361B0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <h3 className="text-white text-xl font-bold mb-2">Submitting Your Feedback</h3>
                        <p className="text-gray-300">Please wait while we save your response...</p>

                        {/* Progress dots animation */}
                        <div className="flex justify-center gap-1 mt-4">
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 bg-[#F361B0] rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 bg-[#00FFFF] rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 bg-[#FF9CDA] rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Floating Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <MotionComponent
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed right-6 bottom-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#F361B0] to-[#00FFFF] text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                        whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
                    >
                        <FaArrowUp className="text-sm" />
                    </MotionComponent>
                )}
            </AnimatePresence>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
                    animate={!prefersReducedMotion ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
                    animate={!prefersReducedMotion ? { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] } : {}}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10" ref={formRef}>
                {/* Back Button */}
                <MotionComponent
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
                </MotionComponent>

                {/* Header - Compact Version */}
                <MotionComponent
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <MotionComponent
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <FaHeart className="text-[#F361B0] text-xs" />
                        <span className="text-white/80 text-xs font-medium">Your Voice Matters</span>
                    </MotionComponent>

                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Let's Build
                        <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
                            Qtomi Together
                        </span>
                    </h1>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                        Your feedback will make our companion smarter, cuter, and truly yours.
                    </p>
                </MotionComponent>

                {/* Progress Bar */}
                <MotionComponent
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex justify-between items-center mb-3">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center flex-1">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 backdrop-blur-sm ${currentStep > step.id
                                    ? "bg-gradient-to-r from-[#F361B0] to-[#00FFFF] text-white shadow-lg"
                                    : currentStep === step.id
                                        ? "bg-white text-black shadow-lg"
                                        : "bg-white/10 text-gray-400 border border-white/10"
                                    }`}>
                                    {currentStep > step.id ? <FaCheck className="text-xs" /> : step.id}
                                </div>
                                <span className={`text-xs mt-2 hidden sm:block ${currentStep >= step.id ? "text-white font-medium" : "text-gray-500"
                                    }`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
                        <MotionComponent
                            className="bg-gradient-to-r from-[#F361B0] to-[#00FFFF] h-2 rounded-full transition-all duration-500 shadow-lg"
                            initial={{ width: "0%" }}
                            animate={{ width: `${steps.find(s => s.id === currentStep)?.progress}%` }}
                        />
                    </div>
                </MotionComponent>

                {/* Form Container */}
                <MotionComponent
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl"
                >
                    <AnimatePresence mode="wait">
                        {renderCurrentStep()}
                    </AnimatePresence>

                    {/* Navigation Buttons - Only show for steps 1-4 */}
                    {currentStep < 5 && (
                        <MotionComponent
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-between items-center mt-8 pt-6 border-t border-white/10"
                        >
                            <MotionComponent
                                whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                                whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1 || isSubmitting}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${currentStep === 1 || isSubmitting
                                    ? "border-white/10 text-gray-500 cursor-not-allowed"
                                    : "border-white/20 text-white hover:bg-white/5 backdrop-blur-sm cursor-pointer"
                                    }`}
                            >
                                <FaArrowLeft className="text-sm" />
                                Previous
                            </MotionComponent>

                            <MotionComponent
                                whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                                whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                                type="button"
                                onClick={nextStep}
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F361B0] to-[#00FFFF] text-white font-semibold hover:shadow-lg hover:shadow-[#F361B0]/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                            >
                                Next
                                <FaArrowRight className="text-sm" />
                            </MotionComponent>
                        </MotionComponent>
                    )}
                </MotionComponent>
            </div>
        </div>
    );
};

export default SuggestionPage;