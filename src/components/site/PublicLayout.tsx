import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/ernala";

const nav = [
  { to: "/", label: "Home" },
  { to: "/kamar", label: "Daftar Kamar" },
  { to: "/fasilitas", label: "Facilities" },
  { to: "/galeri", label: "Gallery" },
  { to: "/lokasi", label: "Location" },
  { to: "/tentang", label: "About" },
  { to: "/faq", label: "FAQ" },
];

export function PublicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary font-display text-sm font-extrabold text-primary-foreground">
              E
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold text-primary">Ernala</span>
              <span className="block text-[11px] tracking-wide text-muted-foreground">INDEKOST CISAUK BSD</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-[10px] px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                activeProps={{ className: "text-primary font-semibold bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/masuk">Masuk</Link>
            </Button>
            <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
              <Link to="/survey">Ajukan Survey</Link>
            </Button>
            <button
              className="grid h-9 w-9 place-items-center rounded-[10px] border border-border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-card px-4 py-3 lg:hidden">
            <div className="grid gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-[10px] px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button asChild variant="outline" size="sm" onClick={() => setOpen(false)}>
                  <Link to="/masuk">Masuk</Link>
                </Button>
                <Button asChild variant="cta" size="sm" onClick={() => setOpen(false)}>
                  <Link to="/survey">Ajukan Survey</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent font-display text-sm font-extrabold text-accent-foreground">
                E
              </span>
              <span className="font-display text-lg font-extrabold">Ernala Indekost</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">{brand.tagline}</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/10 hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/10 hover:bg-white/20">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold">Jelajahi</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Layanan</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li><Link to="/survey" className="hover:text-accent">Ajukan Survey</Link></li>
              <li><Link to="/booking" className="hover:text-accent">Booking Kamar</Link></li>
              <li><Link to="/checkin" className="hover:text-accent">Online Check-in</Link></li>
              <li><Link to="/tenant" className="hover:text-accent">Portal Penghuni</Link></li>
              <li><Link to="/admin" className="hover:text-accent">Portal Admin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{brand.address}</li>
              <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 text-accent" />{brand.phone}</li>
              <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 text-accent" />{brand.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 Ernala Indekost Cisauk BSD. Mockup frontend — data dummy.</p>
            <p>Syarat & Ketentuan · Kebijakan Privasi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
