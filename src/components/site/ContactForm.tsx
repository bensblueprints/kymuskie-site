"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required").optional().or(z.literal("")),
  service: z.enum(["muskie", "crappie", "lodge-only", "gift-cert", "other"]),
  partySize: z.string(),
  preferredDates: z.string().optional(),
  message: z.string().min(10, "A few words please"),
});
type FormData = z.infer<typeof schema>;

export default function ContactForm({ defaultService = "muskie" as FormData["service"] }) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService, partySize: "2" },
  });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      toast.success("Got it — Tony will be in touch shortly.");
      reset();
    } catch {
      toast.error("Something went wrong. Please call (606) 776-6567.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = "w-full rounded-xl border border-forest-200 bg-bone-50 px-4 py-3 text-forest-900 placeholder:text-forest-400 focus:outline-none focus:ring-2 focus:ring-clay-500";
  const labelCls = "text-sm font-medium text-forest-800";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Name *</span>
          <input {...register("name")} className={inputCls + " mt-2"} placeholder="Your name" />
          {errors.name && <span className="text-xs text-clay-700">{errors.name.message}</span>}
        </label>
        <label className="block">
          <span className={labelCls}>Email *</span>
          <input {...register("email")} className={inputCls + " mt-2"} placeholder="you@example.com" />
          {errors.email && <span className="text-xs text-clay-700">{errors.email.message}</span>}
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>Phone</span>
          <input {...register("phone")} className={inputCls + " mt-2"} placeholder="(optional)" />
        </label>
        <label className="block">
          <span className={labelCls}>Party size</span>
          <select {...register("partySize")} className={inputCls + " mt-2"}>
            {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "angler" : "anglers"}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>What kind of trip?</span>
          <select {...register("service")} className={inputCls + " mt-2"}>
            <option value="muskie">Muskie fishing</option>
            <option value="crappie">Crappie / Multi-species</option>
            <option value="lodge-only">Lodge stay only</option>
            <option value="gift-cert">Gift certificate</option>
            <option value="other">Other / not sure</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Preferred dates</span>
          <input {...register("preferredDates")} className={inputCls + " mt-2"} placeholder="e.g. Late October 2026" />
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>Message *</span>
        <textarea {...register("message")} rows={5} className={inputCls + " mt-2"} placeholder="Tell us what you're hoping for and any questions." />
        {errors.message && <span className="text-xs text-clay-700">{errors.message.message}</span>}
      </label>
      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
