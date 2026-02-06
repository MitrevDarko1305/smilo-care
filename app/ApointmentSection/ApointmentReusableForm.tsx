type RequestFormLayoutProps = {
  title: string;
  subtitle?: string;
  submitLabel: string;
  disclaimer?: string;
  children: React.ReactNode;
};

export function RequestFormLayout({
  title,
  subtitle,
  submitLabel,
  disclaimer,
  children,
}: RequestFormLayoutProps) {
  return (
    <form className="bg-[#fff]  border border-slate-200 p-8 md:p-8 space-y-6">
      <div>
        <h2 className="text-[35px] font-medium text-foreground mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-foreground/50">{subtitle}</p>
        )}
      </div>

      {children}

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-foreground cursor-pointer"
        >
          {submitLabel}
        </button>

        {disclaimer && (
          <p className="mt-3 text-xs text-foreground/50">
            {disclaimer}
          </p>
        )}
      </div>
    </form>
  );
}
