import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-brand-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-brand-50 p-6 text-center">
      <div className="text-3xl font-extrabold text-brand-700">{value}</div>
      <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
}
