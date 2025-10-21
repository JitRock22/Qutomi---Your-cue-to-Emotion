// // src/pages/SuggestionPage.jsx
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { account } from "../config/appwriteConfig"; // Adjust path if needed

// const SuggestionPage = () => {
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     ageGroup: "",
//     useLocation: "",
//     locationOther: "",
//     designAppeal: 3,
//     designStyle: "",
//     valuableFeatures: [],
//     newFeatureRequest: "",
//     priceRange: "",
//     comfortPrice: "",
//     prioritySlot: "",
//     finalThoughts: "",
//   });

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await account.get();
//         setUser(currentUser);
//       } catch (err) {
//         console.error("Failed to fetch user:", err);
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFeatureChange = (e) => {
//     const { value, checked } = e.target;
//     const current = formData.valuableFeatures;
//     if (checked && current.length < 3) {
//       setFormData((prev) => ({
//         ...prev,
//         valuableFeatures: [...current, value],
//       }));
//     } else if (!checked) {
//       setFormData((prev) => ({
//         ...prev,
//         valuableFeatures: current.filter((f) => f !== value),
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("✨ Thank you for your valuable feedback!");
//   };

//   const featureOptions = [
//     "Emotional Reactions",
//     "Notifications",
//     "Music",
//     "Storytelling",
//     "Reminders",
//   ];

//   const priorityOptions = [
//     "Yes, I want early access",
//     "Maybe, tell me more later",
//     "No, just exploring for now",
//   ];

//   return (
//     <div className="min-h-screen bg-[#080808] bg-[radial-gradient(circle_at_top,_#1a001f_0%,_#000_80%)] text-white py-20 px-6 sm:px-8 relative overflow-hidden">
//       {/* Floating background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-3xl mx-auto relative z-10"
//       >
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h1
//             className="text-5xl p-5 font-extrabold bg-gradient-to-r from-[#F361B0] via-[#E60076] to-[#ff007f] bg-clip-text text-transparent drop-shadow-md"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {user ? `Let's Build Qutomi Together ${user.name}!` : "Let's Build Qutomi Together"}
//           </motion.h1>
//           <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">
//             Help us shape the future of{" "}
//             <span className="text-[#F361B0] font-semibold">Qutomi</span> — your
//             feedback will make our companion smarter, cuter, and truly yours.
//           </p>
//         </div>

//         {/* Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="space-y-10"
//         >
//           {/* About You */}
//           <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
//             <h2 className="text-2xl font-semibold text-[#ff69b4]">About You </h2>

//             <div>
//               <label className="text-gray-300 font-medium">
//                 What is your age group?
//               </label>
//               <div className="mt-3 flex flex-wrap gap-4">
//                 {["Under 15", "15–25", "26–35", "36–50", "50+"].map((age) => (
//                   <label
//                     key={age}
//                     className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${
//                       formData.ageGroup === age
//                         ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
//                         : "hover:border-[#E60076]/50"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="ageGroup"
//                       value={age}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     {age}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label className="text-gray-300 font-medium">
//                 Where would you most likely use Qutomi?
//               </label>
//               <div className="mt-3 flex flex-wrap gap-4">
//                 {["Home", "Office", "Study space", "Other"].map((loc) => (
//                   <label
//                     key={loc}
//                     className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${
//                       formData.useLocation === loc
//                         ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
//                         : "hover:border-[#E60076]/50"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="useLocation"
//                       value={loc}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     {loc}
//                   </label>
//                 ))}
//               </div>
//               {formData.useLocation === "Other" && (
//                 <input
//                   type="text"
//                   name="locationOther"
//                   placeholder="Please specify..."
//                   onChange={handleChange}
//                   className="mt-3 w-full px-4 py-3 bg-transparent border-b border-white/30 focus:border-[#E60076] focus:outline-none placeholder-gray-500"
//                 />
//               )}
//             </div>
//           </div>

//           {/* Design */}
//           <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
//             <h2 className="text-2xl font-semibold text-[#ff69b4]">
//               Design & Feel 
//             </h2>
//             <label htmlFor="designAppeal" className="font-medium text-gray-300">
//               How appealing is Qutomi’s concept? ({formData.designAppeal})
//             </label>
//             <input
//               id="designAppeal"
//               type="range"
//               name="designAppeal"
//               min="1"
//               max="5"
//               value={formData.designAppeal}
//               onChange={handleChange}
//               className="w-full accent-[#E60076] mt-2 cursor-pointer"
//             />
//             <textarea
//               name="designStyle"
//               rows={3}
//               placeholder="Describe your ideal color or design style..."
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
//             />
//           </div>

//           {/* Features */}
//           <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
//             <h2 className="text-2xl font-semibold text-[#ff69b4]">
//               Features & Ideas 
//             </h2>
//             <p className="text-sm text-gray-400">
//               Select up to 3 features that matter most to you:
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {featureOptions.map((feature) => (
//                 <label
//                   key={feature}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0b0b0b]/70 border border-white/10 cursor-pointer transition hover:bg-[#E60076]/20 ${
//                     formData.valuableFeatures.includes(feature)
//                       ? "border-[#E60076] bg-[#E60076]/30"
//                       : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={feature}
//                     onChange={handleFeatureChange}
//                     checked={formData.valuableFeatures.includes(feature)}
//                     className="accent-[#E60076] h-4 w-4 rounded-full"
//                   />
//                   <span>{feature}</span>
//                 </label>
//               ))}
//             </div>
//             <textarea
//               name="newFeatureRequest"
//               rows={3}
//               placeholder="Any other ideas or features you’d love to see?"
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
//             />
//           </div>

//           {/* Pricing & Priority */}
//           <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
//             <h2 className="text-2xl font-semibold text-[#ff69b4]">
//               Price & Interest 
//             </h2>

//             {/* Price Comfort */}
//             <div>
//               <label className="font-medium text-gray-300">
//                 How much would you be comfortable paying for Qutomi?
//               </label>
//               <div className="mt-3 flex flex-wrap gap-4">
//                 {[
//                   "Under ₹500",
//                   "₹500–₹999",
//                   "₹1000–₹1499",
//                   "₹1500–₹1999",
//                   "₹2000+",
//                 ].map((price) => (
//                   <label
//                     key={price}
//                     className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${
//                       formData.comfortPrice === price
//                         ? "bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white border-none"
//                         : "hover:border-[#E60076]/50"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="comfortPrice"
//                       value={price}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     {price}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Priority Slot */}
//             <div>
//               <label className="font-medium text-gray-300">
//                 Would you like to book a{" "}
//                 <span className="text-[#F361B0]">priority slot</span> for Qutomi
//                 before launch?
//               </label>
//               <div className="mt-3 flex flex-col gap-3">
//                 {priorityOptions.map((opt) => (
//                   <label
//                     key={opt}
//                     className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 cursor-pointer transition hover:bg-[#E60076]/10 ${
//                       formData.prioritySlot === opt
//                         ? "border-[#E60076] bg-[#E60076]/20"
//                         : ""
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="prioritySlot"
//                       value={opt}
//                       checked={formData.prioritySlot === opt}
//                       onChange={handleChange}
//                       className="accent-[#E60076] h-4 w-4 rounded-full"
//                     />
//                     <span>{opt}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Final Thoughts */}
//             <textarea
//               name="finalThoughts"
//               rows={4}
//               placeholder="Any last thoughts or ideas to make Qutomi special?"
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-[#E60076] to-[#F361B0] rounded-full shadow-lg hover:shadow-pink-500/40 transition-all"
//             >
//               Submit My Feedback
//             </motion.button>
//           </div>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default SuggestionPage;



// src/pages/SuggestionPage.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { account } from "../config/appwriteConfig"; // Adjust path if needed

const SuggestionPage = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        ageGroup: "",
        useLocation: "",
        locationOther: "",
        designAppeal: 3,
        designStyle: "",
        valuableFeatures: [],
        newFeatureRequest: "",
        comfortPrice: "",
        prioritySlot: "",
        finalThoughts: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await account.get();
                setUser(currentUser);
                setFormData((prev) => ({
                    ...prev,
                    name: currentUser.name || "",
                }));
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };
        fetchUser();
    }, []);

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

        // Prepare data to send
        const dataToSend = {
            name: formData.name,
            city: formData.city,
            ageGroup: formData.ageGroup,
            useLocation: formData.useLocation,
            locationOther: formData.locationOther,
            designAppeal: formData.designAppeal,
            designStyle: formData.designStyle,
            valuableFeatures: formData.valuableFeatures,
            newFeatureRequest: formData.newFeatureRequest,
            comfortPrice: formData.comfortPrice,
            prioritySlot: formData.prioritySlot,
            finalThoughts: formData.finalThoughts,
        };

        console.log("Prepared data to send:", dataToSend);

        try {
            console.log("Sending data to Google Apps Script...");
            const response = await fetch(import.meta.env.VITE_WEB_APP_URL, {
                method: "POST",
                mode: "no-cors", // Keep no-cors if needed for Google Sheets
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            console.log("Fetch completed", response);
            // Note: response will be opaque in no-cors mode, so you cannot read status
            alert("✨ Thanks! Your response has been saved.");
        } catch (err) {
            console.error("Error while submitting form:", err);
            alert("⚠️ Oops! Something went wrong while saving your response.");
        }

        console.log("handleSubmit finished");
    };





    const featureOptions = [
        "Emotional Reactions",
        "Notifications",
        "Music",
        "Storytelling",
        "Reminders",
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
                        {user
                            ? `Let's Build Qutomi Together, ${user.name}!`
                            : "Let's Build Qutomi Together"}
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
                    {/* About You */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4]">About You</h2>

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
                                className="mt-2 w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
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
                                className="mt-2 w-full px-4 py-3 bg-[#0b0b0b] border border-white/20 rounded-md focus:ring-2 focus:ring-[#E60076] placeholder-gray-500"
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
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4]">
                            Design & Feel
                        </h2>
                        <label htmlFor="designAppeal" className="font-medium text-gray-300">
                            How appealing is Qutomi’s concept? ({formData.designAppeal})
                        </label>
                        <input
                            id="designAppeal"
                            type="range"
                            name="designAppeal"
                            min="1"
                            max="5"
                            value={formData.designAppeal}
                            onChange={handleChange}
                            className="w-full accent-[#E60076] mt-2 cursor-pointer"
                        />
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
                        <h2 className="text-2xl font-semibold text-[#ff69b4]">
                            Features & Ideas
                        </h2>
                        <p className="text-sm text-gray-400">
                            Select up to 3 features that matter most to you:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {featureOptions.map((feature) => (
                                <label
                                    key={feature}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0b0b0b]/70 border border-white/10 cursor-pointer transition hover:bg-[#E60076]/20 ${formData.valuableFeatures.includes(feature)
                                        ? "border-[#E60076] bg-[#E60076]/30"
                                        : ""
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        value={feature}
                                        onChange={handleFeatureChange}
                                        checked={formData.valuableFeatures.includes(feature)}
                                        className="accent-[#E60076] h-4 w-4 rounded-full"
                                    />
                                    <span>{feature}</span>
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

                    {/* Pricing & Priority */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-[#ff69b4]">
                            Price & Interest
                        </h2>

                        <div>
                            <label className="font-medium text-gray-300">
                                How much would you be comfortable paying for Qutomi?
                            </label>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {[
                                    "Under ₹500",
                                    "₹500–₹999",
                                    "₹1000–₹1499",
                                    "₹1500–₹1999",
                                    "₹2000+",
                                ].map((price) => (
                                    <label
                                        key={price}
                                        className={`px-4 py-2 rounded-full border border-white/20 cursor-pointer transition ${formData.comfortPrice === price
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


