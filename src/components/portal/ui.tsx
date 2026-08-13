import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";

export function PageHeader({
  title, description, actions,
}: { title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-extrabold text-primary">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

const tone: Record<string, string> = {
  green: "bg-success/12 text-success border-success/25",
  amber: "bg-warning/18 text-warning-foreground border-warning/35",
  red: "bg-destructive/10 text-destructive border-destructive/25",
  slate: "bg-secondary text-primary border-border",
  terracotta: "bg-accent/12 text-accent border-accent/25",
};

export function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase();
  let t = "slate";
  if (/(lunas|aktif|selesai|berhasil|tersedia|terkonfirmasi|publish|dikembalikan)/.test(s)) t = "green";
  if (/(menunggu|antrian|diproses|terjadwal|draft|booked|ditahan|dp |akan habis|ditindaklanjuti|dokumen)/.test(s)) t = "amber";
  if (/(overdue|gagal|batal|dibatalkan|terlambat|maintenance|belum dibayar|hilang|potongan)/.test(s)) t = "red";
  if (/(terisi|negosiasi|booking)/.test(s)) t = "terracotta";
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold", tone[t])}>
      {status}
    </span>
  );
}

export function StatCard({
  label, value, sub, delta, icon: Icon,
}: { label: string; value: string; sub?: string; delta?: string; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-none">
      <div className="flex items-start justify-between">
        <p className="text-[13px] text-muted-foreground">{label}</p>
        {Icon && (
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-secondary text-primary">
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-2xl font-extrabold text-primary">{value}</p>
      <div className="mt-1 flex items-center gap-2 text-xs">
        {delta && <span className="font-semibold text-accent">{delta}</span>}
        {sub && <span className="text-muted-foreground">{sub}</span>}
      </div>
    </Card>
  );
}

export function TableToolbar({
  value, onChange, placeholder = "Cari data…", children,
}: { value: string; onChange: (v: string) => void; placeholder?: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-b border-border p-4 sm:flex-row sm:items-center">
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="h-9 pl-9" />
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
        {children}
        <Button variant="outline" size="sm"><SlidersHorizontal className="h-3.5 w-3.5" />Filter</Button>
      </div>
    </div>
  );
}

export function Pager({ total }: { total: number }) {
  return (
    <div className="flex flex-col gap-2 border-t border-border p-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>Menampilkan {total} dari {total} data</p>
      <div className="flex items-center gap-1">
        <Button variant="outline" size="icon" className="h-8 w-8"><ChevronLeft className="h-4 w-4" /></Button>
        <Button variant="soft" size="sm" className="h-8 w-8 p-0">1</Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">2</Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">3</Button>
        <Button variant="outline" size="icon" className="h-8 w-8"><ChevronRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}

export function Panel({ title, action, children, className }: { title?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <Card className={cn("overflow-hidden rounded-2xl border-border shadow-none", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-sm font-bold text-primary">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </Card>
  );
}
