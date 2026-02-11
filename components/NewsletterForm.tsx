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
          className="mt-2 w-full border border-black bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-background transition-colors hover:bg-black sm:mt-6"
      >
        {submitted ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}

