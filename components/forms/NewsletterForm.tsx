"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations/newsletter";
import { subscribeToNewsletter } from "@/lib/actions/newsletter";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    setStatus("loading");
    const result = await subscribeToNewsletter(values);
    setFeedback(result.message);
    setStatus(result.success ? "success" : "error");
    if (result.success) reset();
  };

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm text-champagne-200">
        <Check className="h-4 w-4" aria-hidden="true" /> {feedback}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-sm">
      <div className="flex items-center border-b border-ivory-100/25 focus-within:border-champagne-300">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          aria-invalid={!!errors.email}
          className="w-full bg-transparent py-2.5 text-sm text-ivory-100 placeholder:text-ivory-100/40 focus:outline-none"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex-shrink-0 p-2 text-ivory-100 transition-colors hover:text-champagne-300 disabled:opacity-50"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {errors.email && (
        <p role="alert" className="mt-2 text-xs text-champagne-200">
          {errors.email.message}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-champagne-200">
          {feedback}
        </p>
      )}
    </form>
  );
}
