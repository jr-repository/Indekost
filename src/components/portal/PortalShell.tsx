import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, type ComponentType } from "react";
import { Menu, X, Bell, Search, LogOut, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type NavItem = { to: string; label: string; icon: ComponentType<{ className?: string }>; group?: string };

export function PortalShell({
  items, title, badge, user,
}: {
  items: NavItem[];
  title: string;
  badge: string;
  user: { name: string; role: string; avatar: string };
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const groups = Array.from(new Set(items.map((i) => i.group ?? "Menu")));

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[264px] transform bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2.5 px-5">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent font-display text-sm font-extrabold text-accent-foreground">E</span>
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold">Exc Kost</p>
            <p className="text-[11px] text-sidebar-foreground/60">{badge}</p>
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setOpen(false)} aria-label="Tutup menu">
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="h-[calc(100vh-4rem)] space-y-5 overflow-y-auto px-3 pb-8">
          {groups.map((g) => (
            <div key={g}>
              <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/45">{g}</p>
              <div className="space-y-0.5">
                {items.filter((i) => (i.group ?? "Menu") === g).map((i) => {
                  const active = pathname === i.to;
                  return (
                    <Link
                      key={i.to}
                      to={i.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2 text-[13px] transition-colors ${
                        active
                          ? "bg-sidebar-accent font-semibold text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/72 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <i.icon className={`h-4 w-4 ${active ? "text-accent" : ""}`} />
                      {i.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {open && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="lg:pl-[264px]">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Buka menu">
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <p className="font-display text-sm font-bold text-primary">{title}</p>
          </div>
          <div className="relative ml-auto hidden w-72 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari…" className="h-9 rounded-[10px] pl-9" />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-[10px] px-1.5 py-1 hover:bg-secondary">
                <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                <span className="hidden text-left leading-tight sm:block">
                  <span className="block text-[13px] font-semibold">{user.name}</span>
                  <span className="block text-[11px] text-muted-foreground">{user.role}</span>
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/">Lihat website publik</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/tenant">Portal penghuni</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/admin">Portal admin</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/masuk"><LogOut className="mr-2 h-4 w-4" />Keluar</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
