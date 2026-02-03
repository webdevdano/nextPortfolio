'use client';

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-background">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Interested in working together or need a quote for your project? Fill out the form below or reach out directly via email.
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded px-4 py-2"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded px-4 py-2"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          className="border rounded px-4 py-2 min-h-[120px]"
          required
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="glass-sheen border border-(--foreground)/15 bg-(--background)/55 backdrop-blur-md px-6 py-2 rounded-full text-(--foreground) font-semibold text-sm shadow-md hover:opacity-90 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <div className="text-green-600 text-center mt-2">Message sent successfully!</div>
        )}
        {status === "error" && (
          <div className="text-red-600 text-center mt-2">Something went wrong. Please try again.</div>
        )}
      </form>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Or email directly: <a href="mailto:webdevdano@gmail.com" className="underline">webdevdano@gmail.com</a>
      </div>
    </main>
  );
}
