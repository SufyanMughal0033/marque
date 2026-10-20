"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  bookingSchema,
  eventTypeOptions,
  packageOptions,
  preferredTimeOptions,
  type BookingFormValues,
} from "@/lib/validations/booking";
import { submitBookingInquiry } from "@/lib/actions/booking";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full border border-charcoal-500/15 bg-ivory-100 px-4 py-3.5 text-sm text-charcoal-500 placeholder:text-charcoal-100/60 transition-colors focus:border-bronze-400 focus:outline-none";

const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-widest text-charcoal-300";

export function BookingForm() {
  const searchParams = useSearchParams();
  const prefilledPackage = searchParams.get("package");

  const [state, setState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      preferredTime: "Flexible",
      package: (packageOptions.find((p) => p === prefilledPackage) ?? "Not sure yet") as BookingFormValues["package"],
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    setState("loading");
    const result = await submitBookingInquiry(values);
    setFeedback(result.message);
    setState(result.success ? "success" : "error");
    if (result.success) reset();
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-bronze-300/40 bg-ivory-100 p-8 sm:p-10">
        <CheckCircle2 className="h-8 w-8 text-bronze-400" aria-hidden="true" />
        <div>
          <h3 className="font-serif text-2xl text-charcoal-500">Inquiry Received</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal-100">{feedback}</p>
        </div>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="text-xs font-medium uppercase tracking-widest text-bronze-400 hover:text-bronze-500"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={inputClasses}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="eventType" className={labelClasses}>
            Event Type
          </label>
          <select
            id="eventType"
            defaultValue=""
            className={inputClasses}
            aria-invalid={!!errors.eventType}
            aria-describedby={errors.eventType ? "eventType-error" : undefined}
            {...register("eventType")}
          >
            <option value="" disabled>
              Select event type
            </option>
            {eventTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="eventType-error" message={errors.eventType?.message} />
        </div>

        <div>
          <label htmlFor="eventDate" className={labelClasses}>
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            className={inputClasses}
            aria-invalid={!!errors.eventDate}
            aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
            {...register("eventDate")}
          />
          <FieldError id="eventDate-error" message={errors.eventDate?.message} />
        </div>

        <div>
          <label htmlFor="expectedGuests" className={labelClasses}>
            Expected Guests
          </label>
          <input
            id="expectedGuests"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 500"
            className={inputClasses}
            aria-invalid={!!errors.expectedGuests}
            aria-describedby={errors.expectedGuests ? "expectedGuests-error" : undefined}
            {...register("expectedGuests")}
          />
          <FieldError id="expectedGuests-error" message={errors.expectedGuests?.message} />
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClasses}>
            Preferred Time
          </label>
          <select id="preferredTime" className={inputClasses} {...register("preferredTime")}>
            {preferredTimeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="package" className={labelClasses}>
            Package
          </label>
          <select id="package" className={inputClasses} {...register("package")}>
            {packageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="normal-case text-charcoal-100/70">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us a little about your event…"
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

      <div className="flex flex-col gap-4 pt-2 sm:flex-row">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex flex-1 items-center justify-center gap-2 bg-charcoal-500 px-6 py-4 text-[13px] font-medium uppercase tracking-[0.14em] text-ivory-100 transition-colors hover:bg-charcoal-600 disabled:opacity-60 sm:flex-none"
        >
          {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          Check Availability
        </button>
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex flex-1 items-center justify-center gap-2 border border-charcoal-500/30 px-6 py-4 text-[13px] font-medium uppercase tracking-[0.14em] text-charcoal-500 transition-colors hover:border-charcoal-500 disabled:opacity-60 sm:flex-none"
        >
          Request a Quote
        </button>
      </div>

      <p className="text-xs text-charcoal-100">{siteConfig.booking.responseTimeNote}</p>
    </form>
  );
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-bronze-500">
      {message}
    </p>
  );
}
