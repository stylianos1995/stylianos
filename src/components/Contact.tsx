"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { outlineButtonClass } from "@/lib/button-styles";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: "",
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = async () => {
    const email = "stylianos.kalaitzis95@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage:
          "Contact form is not configured yet. Please try again later or email me directly.",
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      errorMessage: "",
    });

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          reply_to: formData.email,
        }
      );

      if (result.status === 200) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          errorMessage: "",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: "Failed to send message. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500";

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="contact-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          Contact
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Let&apos;s talk
        </p>
        <p className="mt-4 text-lg text-zinc-400">
          Open to roles and freelance frontend work. Prefer email or LinkedIn.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://github.com/stylianos1995"
            target="_blank"
            rel="noopener noreferrer"
            className={outlineButtonClass}
          >
            <svg
              className="icon-sm"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stylianos-kalaitzis-730902260/"
            target="_blank"
            rel="noopener noreferrer"
            className={outlineButtonClass}
          >
            <svg
              className="icon-sm"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:stylianos.kalaitzis95@gmail.com" className={outlineButtonClass}>
            <svg
              className="icon-sm"
              width={16}
              height={16}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          <button
            type="button"
            onClick={handleEmailCopy}
            className="text-zinc-400 underline decoration-zinc-600 underline-offset-2 transition-colors hover:text-zinc-200"
          >
            {emailCopied ? "Copied address" : "Copy email address"}
          </button>
          <span className="mx-2 text-zinc-700" aria-hidden>
            ·
          </span>
          <span className="select-all">stylianos.kalaitzis95@gmail.com</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-2xl space-y-5 border-t border-slate-700/40 pt-16"
      >
        <h3 className="text-lg font-semibold text-zinc-100">Send a message</h3>
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-zinc-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-zinc-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:w-auto ${
            status.submitting
              ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
              : "bg-zinc-100 text-zinc-950 hover:bg-white"
          }`}
        >
          {status.submitting ? "Sending…" : "Send message"}
        </button>
        {status.submitted && (
          <p className="text-sm text-emerald-400" role="status">
            Thanks — I&apos;ll get back to you shortly.
          </p>
        )}
        {status.error && (
          <p className="text-sm text-red-400" role="alert">
            {status.errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
