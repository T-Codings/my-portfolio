import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

import {
  sanitizeInput,
  validateEmail,
  validateName,
  validateMessage,
  rateLimit,
  sanitizeFormData,
} from "../utils/security";

// ✅ Keep spaces + new lines for message (so words stay separated)
function sanitizeMessage(value) {
  const v = String(value ?? "");

  // normalize line endings
  const normalized = v.replace(/\r\n/g, "\n");

  // remove weird invisible chars but keep spaces/newlines
  const noInvisible = normalized.replace(/[\u200B-\u200D\uFEFF]/g, "");

  // compress "many spaces/tabs" into one space (per line)
  const perLine = noInvisible
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " "))
    .join("\n");

  // limit to 5000 chars (same as your UI)
  return perLine.slice(0, 5000);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Don't use sanitizeInput on message (it might remove spaces)
    const sanitizedValue =
      name === "message" ? sanitizeMessage(value) : sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name =
        "Name must be 2-100 characters and contain only letters, spaces, hyphens, and apostrophes";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // ✅ Validate the sanitized message (with spaces preserved)
    if (!validateMessage(formData.message)) {
      newErrors.message = "Message must be between 10 and 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("validation_error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    if (!rateLimit("contact_form_submit", 3, 60000)) {
      setSubmitStatus("rate_limit");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // ✅ Make sure sanitizeFormData doesn't destroy spaces
    // We'll pass message through our sanitizeMessage again to be safe.
    const sanitizedData = sanitizeFormData({
      ...formData,
      message: sanitizeMessage(formData.message),
    });

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
        createdAt: serverTimestamp(),
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error("FAILED...", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-[#0A693A] to-[#6B7D29] p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <FaPaperPlane className="animate-bounce" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-5 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-200 text-sm mt-2 flex items-center gap-1">
                      <FaExclamationTriangle /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className="w-full px-5 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-200 text-sm mt-2 flex items-center gap-1">
                      <FaExclamationTriangle /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-200 text-sm mt-2 flex items-center gap-1">
                      <FaExclamationTriangle /> {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border-2 border-green-400 text-white px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                    <FaCheckCircle className="text-green-400" />
                    Message sent successfully! I’ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border-2 border-red-400 text-white px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                    <FaExclamationTriangle className="text-red-400" />
                    Failed to send message. Please try again later.
                  </div>
                )}

                {submitStatus === "validation_error" && (
                  <div className="bg-yellow-500/20 border-2 border-yellow-400 text-white px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                    <FaExclamationTriangle className="text-yellow-400" />
                    Please fix the errors above before submitting.
                  </div>
                )}

                {submitStatus === "rate_limit" && (
                  <div className="bg-orange-500/20 border-2 border-orange-400 text-white px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                    <FaExclamationTriangle className="text-orange-400" />
                    Too many requests. Please wait a minute before trying again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-[#0A693A] rounded-xl font-bold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info (unchanged) */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#6B7D29]">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Feel free to reach out to me through any of these platforms.
              </p>

              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-6 rounded-2xl border-2 border-green-700 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <FaCheckCircle className="text-green-400 text-2xl animate-pulse" />
                  <h4 className="font-bold text-xl text-white">Availability</h4>
                </div>
                <p className="text-gray-300 font-medium">
                  Currently available for freelance projects, contracts, and part-time opportunities.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:nyangTheo79@gmail.com"
                className="group flex items-center p-6 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <p className="text-green-100">tcodings1111@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/T-Codings"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <FaGithub className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">GitHub</h4>
                  <p className="text-gray-300">github.com/T-Codings</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ndi-theo-a695b43a8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                  <p className="text-blue-100">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
