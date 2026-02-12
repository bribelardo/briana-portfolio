"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    console.log("Newsletter signup placeholder:", email);
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="flex-1">
        <label
          htmlFor="newsletter-email"
          className="block text-xs font-semibold uppercase tracking-[0.25em]"
        >
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border-2 border-[#473144] bg-background px-3 py-2 text-sm text-[#473144] outline-none transition-all focus:border-[#473144] focus:shadow-[0_0_0_3px_rgba(71,49,68,0.1)]"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-[#473144] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FFCAD4] transition-all hover:bg-[#FFCAD4] hover:text-[#473144] hover:border-2 hover:border-[#473144] hover:scale-105 sm:mt-6"
      >
        {submitted ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}

