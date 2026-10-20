"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactMessage } from "@/lib/actions/contact";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full border border-charcoal-500/15 bg-ivory-100 px-4 py-3.5 text-sm text-charcoal-500 placeholder:text-charcoal-100/60 transition-colors focus:border-bronze-400 focus:outline-none";

const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-widest text-charcoal-300";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setState("loading");
    const result = await submitContactMessage(values);
    setFeedback(result.message);
    setState(result.success ? "success" : "error");
    if (result.success) reset();
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-bronze-300/40 bg-ivory-100 p-8">
        <CheckCircle2 className="h-8 w-8 text-bronze-400" aria-hidden="true" />
        <div>
          <h3 className="font-serif text-2xl text-charcoal-500">Message Sent</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal-100">{feedback}</p>
        </div>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="text-xs font-medium uppercase tracking-widest text-bronze-400 hover:text-bronze-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-fullName" className={labelClasses}>
            Full Name
          </label>
          <input id="c-fullName" type="text" autoComplete="name" className={inputClasses} {...register("fullName")} />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="c-phone" className={labelClasses}>
            Phone Number
          </label>
          <input id="c-phone" type="tel" autoComplete="tel" className={inputClasses} {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className={labelClasses}>
          Email Address
        </label>
        <input id="c-email" type="email" autoComplete="email" className={inputClasses} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="c-subject" className={labelClasses}>
          Subject
        </label>
        <input id="c-subject" type="text" className={inputClasses} {...register("subject")} />
        <FieldError message={errors.subject?.message} />
      </div>

      <div>
        <label htmlFor="c-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          className={cn(inputClasses, "resize-none")}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {state === "error" && (
        <div className="flex items-start gap-3 border border-bronze-300/40 bg-bronze-50/30 p-4 text-sm text-charcoal-500">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-400" aria-hidden="true" />
          <p>{feedback}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-charcoal-500 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.14em] text-ivory-100 transition-colors hover:bg-charcoal-600 disabled:opacity-60"
      >
        {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Send Message
      </button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-bronze-500">
      {message}
    </p>
  );
}
