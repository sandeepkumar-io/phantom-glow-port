export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
          PIYUSH CHANDRA
        </p>
        <p>© {new Date().getFullYear()} — Crafted with care.</p>
        <a href="#home" className="nav-link font-medium text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
