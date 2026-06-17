import { footer } from "@/store";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-24">
      <div className="max-w-site mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        <div className="font-serif text-base tracking-tightish text-ink normal-case">
          {footer.left.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </div>
        <div className="text-center">{footer.center}</div>
        <div className="md:text-right">{footer.right}</div>
      </div>
    </footer>
  );
}
