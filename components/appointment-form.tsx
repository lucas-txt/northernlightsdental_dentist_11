"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  appointmentSchema,
  type AppointmentValues,
} from "@/lib/schemas";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function AppointmentForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: AppointmentValues) => {
    await new Promise((resolve) => setTimeout(resolve, 650));
    setSubmittedName(values.name.split(" ")[0] ?? values.name);
  };

  if (submittedName) {
    return (
      <div
        className="flex min-h-[30rem] flex-col items-center justify-center rounded-[2rem] border border-line bg-paper p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-aurora/15 text-teal">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="display-card mt-6 text-ink">Thank you, {submittedName}.</h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate">
          Your appointment request is ready. Please call{" "}
          <a href={site.phoneHref} className="font-bold text-teal">
            {site.phone}
          </a>{" "}
          to confirm your appointment time with our team.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              reset();
              setSubmittedName(null);
            }}
          >
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[2rem] border border-line bg-paper p-5 shadow-soft sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-teal">Appointment request</p>
          <h2 className="display-card mt-3 text-ink">
            Tell us how we can help.
          </h2>
        </div>
        <span className="hidden rounded-full border border-line bg-cream px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate sm:inline-flex">
          New patients welcome
        </span>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your full name"
            className={cn("mt-2", errors.name && "border-copper")}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs font-semibold text-pine">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={cn("mt-2", errors.email && "border-copper")}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs font-semibold text-pine">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="subject">
            Subject <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="subject"
            placeholder="Cleaning, check-up, question…"
            className={cn("mt-2", errors.subject && "border-copper")}
            aria-invalid={errors.subject ? "true" : undefined}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject ? (
            <p id="subject-error" className="mt-1.5 text-xs font-semibold text-pine">
              {errors.subject.message}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 555-0123"
            className="mt-2"
            {...register("phone")}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">
            Message <span aria-hidden="true">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Share your preferred days, times, or anything we should know."
            className={cn("mt-2", errors.message && "border-copper")}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-xs font-semibold text-pine">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate">
          Prefer to talk? Call{" "}
          <a href={site.phoneHref} className="font-bold text-teal">
            {site.phone}
          </a>
          . This form does not book a confirmed time.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Sending…" : "Send request"}
        </Button>
      </div>
    </form>
  );
}
