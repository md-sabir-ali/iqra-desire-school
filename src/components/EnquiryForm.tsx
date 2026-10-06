"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitEnquiry } from "@/lib/api";
import type { EnquiryInput } from "@/lib/types";

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const emptyForm: EnquiryInput = {
  parentName: "",
  studentName: "",
  className: "",
  mobile: "",
  email: "",
  message: "",
};

export function EnquiryForm() {
  const [form, setForm] = useState<EnquiryInput>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const result = await submitEnquiry(form);
    if (result.ok) {
      setStatus("success");
      setFeedback(result.message);
      setForm(emptyForm);
    } else {
      setStatus("error");
      setFeedback(result.message);
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-3 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" />
        <h3 className="text-lg font-semibold text-brand-800">Enquiry Received</h3>
        <p className="text-sm text-gray-600">{feedback}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {feedback}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent / Guardian Name" required>
          <input
            type="text"
            required
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className={inputClass}
            placeholder="Enter full name"
          />
        </Field>
        <Field label="Student Name" required>
          <input
            type="text"
            required
            value={form.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            className={inputClass}
            placeholder="Enter student's name"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Class Seeking Admission" required>
          <select
            required
            value={form.className}
            onChange={(e) => update("className", e.target.value)}
            className={inputClass}
          >
            <option value="">Select class</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Mobile Number" required>
          <input
            type="tel"
            required
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            className={inputClass}
            placeholder="10-digit mobile number"
          />
        </Field>
      </div>

      <Field label="Email (optional)">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Message (optional)">
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
          placeholder="Any question or note for us"
        />
      </Field>

      <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-gray-500">
        We respect your privacy. Your details are only used to contact you about admissions.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      {children}
    </label>
  );
}
