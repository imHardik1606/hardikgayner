"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast, { Toaster } from "react-hot-toast";

/* ---------- Variants ---------- */
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

/* ---------- Small UI building blocks ---------- */
function Input({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}) {
  return (
    <motion.label className="block text-left w-full" variants={itemVariant}>
      <span className="sr-only">{label}</span>
      <input
        aria-label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 
             border border-zinc-300 dark:border-zinc-700 placeholder:font-sans
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition resize-none"
      />
    </motion.label>
  );
}

function TextArea({ label, name, placeholder, value, onChange, required }) {
  return (
    <motion.label className="block text-left w-full" variants={itemVariant}>
      <span className="sr-only">{label}</span>
      <textarea
        aria-label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={6}
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 placement:font-sans
             border border-zinc-300 dark:border-zinc-700
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition resize-none"
      />
    </motion.label>
  );
}

function SubmitButton({ loading, success }) {
  return (
    <motion.button
      type="submit"
      variants={itemVariant}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      disabled={loading}
      className="mt-4 rounded-full min-w-2 px-3 py-2 bg-linear-to-r from-blue-600 
                 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl 
                 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-60"
    >
      {loading ? "Sending..." : success ? "Sent" : "Send Message"}
    </motion.button>
  );
}

/* ---------- Custom toast renderer (animated) ---------- */
function CustomToast({ t, type = "info", title, message }) {
  const bgClass =
    type === "success"
      ? "bg-green-500"
      : type === "error"
        ? "bg-rose-600"
        : "bg-slate-800";
  const icon =
    type === "success" ? (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden
      >
        <path
          d="M5 13l4 4L19 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : type === "error" ? (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden
      >
        <path
          d="M6 18L18 6M6 6l12 12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
      </svg>
    );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 700, damping: 26 }}
      className={`pointer-events-auto ${bgClass} text-white rounded-xl shadow-lg overflow-hidden flex gap-3 items-start p-3 max-w-sm`}
      role="status"
      aria-live="polite"
    >
      <div className="shrink-0 mt-0.5">{icon}</div>

      <div className="flex-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {message && (
          <div className="text-xs opacity-90 mt-1 whitespace-pre-wrap">
            {message}
          </div>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-2 shrink-0 text-white/80 hover:text-white"
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  );
}

/* ---------- Main component ---------- */
export default function ContactMe() {
  const [form, setForm] = useState({
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const showSuccess = () => {
    toast.custom(
      (t) => (
        <CustomToast
          t={t}
          type="success"
          title="Email sent"
          message="Thanks!! I'll reply within 1-2 days."
        />
      ),
      { duration: 3500 }
    );
  };

  const showError = (message) => {
    toast.custom(
      (t) => (
        <CustomToast
          t={t}
          type="error"
          title="Send failed"
          message={String(message)}
        />
      ),
      { duration: 5000 }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!emailRegex.test(form.senderEmail.trim())) {
      showError("Please enter a valid email.");
      return;
    }

    if (form.subject.trim().length === 0) {
      showError("Subject should not be empty.");
      return;
    }

    if (form.message.trim().length < 5) {
      showError("Your message is too short.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const fd = new FormData();
      fd.append("senderEmail", form.senderEmail);
      fd.append("subject", form.subject);
      fd.append("message", form.message);

      const result = await sendEmail(fd);

      if (result?.error) {
        showError(result.error || "Failed to send message.");
        setLoading(false);
        return;
      }

      showSuccess();
      setSuccess(true);
      setForm({ senderEmail: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error(err);
      showError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen w-full flex items-center px-4 py-10 justify-center bg-background overflow-hidden"
      >
        <motion.div
          className="w-full max-w-3xl bg-white/70 dark:bg-slate-800/80 backdrop-blur-md 
                     shadow-2xl rounded-2xl p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Global Toaster placed fixed to viewport (outside the card) */}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={12}
            containerClassName="pointer-events-none"
            containerStyle={{ top: 24, right: 24 }}
            toastOptions={{
              duration: 4000,
              style: {
                // fallback style for simple toast.* calls
                background: "rgba(17,24,39,0.95)",
                color: "#fff",
                borderRadius: "12px",
                padding: "8px 12px",
                boxShadow: "0 8px 30px rgba(2,6,23,0.35)",
              },
            }}
          />

          <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl text-primary 
             underline underline-offset-4 decoration-primary/40
             text-center font-extrabold p-4"
          variants={itemVariant}
        >
          Contact Me 📬
        </motion.h2>

          <motion.p
            className="mt-2 text-sm sm:text-base text-center text-slate-600 dark:text-slate-300"
            variants={itemVariant}
          >
            Have any questions or collaboration ideas? <br /> I’d love to hear
            from you!
          </motion.p>

          <motion.form
            className="grid grid-cols-1 gap-4 mt-10"
            onSubmit={handleSubmit}
          >
            <Input
              label="Your Email"
              name="senderEmail"
              type="email"
              placeholder="you@example.com"
              required
              value={form.senderEmail}
              onChange={onChange}
            />

            <Input
              label="Subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              value={form.subject}
              onChange={onChange}
            />

            <TextArea
              label="Message"
              name="message"
              placeholder="Tell me something..."
              required
              value={form.message}
              onChange={onChange}
            />

            <div className="flex items-center justify-between gap-4">
              <SubmitButton loading={loading} success={success} />
              <motion.div
                className="text-md text-slate-900 font-sans bg-gray-200 dark:text-slate-400 border-2 border-gray-500 rounded-md"
                variants={itemVariant}
              >
                <strong className="block text-center lg:px-4 md:px-2 sm:px-1">
                  Response time
                </strong>
                <p className="text-center lg:px-4 md:px-2 sm:px-1">
                  Usually within 1–2 days
                </p>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}
