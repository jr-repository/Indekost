
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { roomUnits } from "@/data/ernala";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default Availability;

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const colorOf = (s: string) =>
  s === "Terisi" ? "bg-chart-1/85" : s === "Tersedia" ? "bg-success/70" : s === "Booked" ? "bg-accent/75" : "bg-destructive/60";

function Availability() {
  const [month, setMonth] = useState("Agustus 2026");
  return (
    <>
      <PageHeader title="Availability" description="Kalender ketersediaan 32 kamar dalam satu bulan."
        actions={<div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setMonth("Juli 2026")}><ChevronLeft className="h-4 w-4" /></Button>
          <span className="text-sm font-semibold text-primary">{month}</span>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setMonth("September 2026")}><ChevronRight className="h-4 w-4" /></Button>
        </div>} />
      <div className="mb-4 flex flex-wrap gap-4 text-[12px] text-muted-foreground">
        {[["Terisi", "bg-chart-1/85"], ["Tersedia", "bg-success/70"], ["Booked", "bg-accent/75"], ["Maintenance", "bg-destructive/60"]].map(([l, c]) => (
          <span key={l} className="inline-flex items-center gap-1.5"><span className={`h-3 w-3 rounded-[3px] ${c}`} />{l}</span>
        ))}
      </div>
      <Panel>
        <div className="overflow-x-auto p-4">
          <div className="min-w-[900px]">
            <div className="mb-2 flex gap-1 pl-24 text-[10px] text-muted-foreground">
              {days.map((d) => <span key={d} className="w-5 text-center">{d}</span>)}
            </div>
            {roomUnits.slice(0, 18).map((r) => (
              <div key={r.code} className="mb-1 flex items-center gap-1">
                <span className="w-24 shrink-0 text-[12px] font-medium text-primary">{r.code}</span>
                {days.map((d) => (
                  <span key={d} className={`h-5 w-5 rounded-[3px] ${d > 24 && r.status === "Booked" ? "bg-accent/75" : colorOf(r.status)} opacity-90 hover:opacity-100`} title={`${r.code} · ${d} Agu · ${r.status}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[["Tersedia", roomUnits.filter((r) => r.status === "Tersedia").length], ["Booked", roomUnits.filter((r) => r.status === "Booked").length], ["Maintenance", roomUnits.filter((r) => r.status === "Maintenance").length]].map(([l, v]) => (
          <div key={String(l)} className="rounded-2xl border border-border bg-card p-5">
            <StatusBadge status={String(l)} />
            <p className="mt-3 font-display text-2xl font-extrabold text-primary">{String(v)} kamar</p>
          </div>
        ))}
      </div>
    </>
  );
}
