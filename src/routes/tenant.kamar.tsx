import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, Panel } from "@/components/portal/ui";
import { tenant, rupiah } from "@/data/ernala";
import { Check } from "lucide-react";

function Page() {
  const r = tenant.room;
  return (
    <>
      <PageHeader title="My Room" description={`${r.code} — ${r.name}`} actions={<Button variant="outline" size="sm">Unduh berita acara</Button>} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid grid-cols-2 gap-3">
          {r.gallery.map((g, i) => <img key={g} src={g} alt={`Foto kamar ${i + 1}`} className={`w-full rounded-2xl object-cover ${i === 0 ? "col-span-2 h-64" : "h-36"}`} />)}
        </div>
        <div className="space-y-6">
          <Panel title="Informasi kamar">
            <div className="space-y-3 p-5 text-[13px]">
              {[["Tipe", r.type], ["Ukuran", r.size], ["Lantai", `Lantai ${r.floor}`], ["Harga sewa", `${rupiah(r.price)}/bulan`], ["Mulai sewa", tenant.startDate], ["Berakhir", tenant.endDate]].map(([l, v]) => (
                <div key={l} className="flex justify-between border-b border-border pb-2.5"><span className="text-muted-foreground">{l}</span><span className="font-medium">{v}</span></div>
              ))}
            </div>
          </Panel>
          <Panel title="Fasilitas kamar">
            <div className="grid gap-2 p-5 text-[13px]">
              {r.facilities.map((f) => <span key={f} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent" />{f}</span>)}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

export const Route = createFileRoute("/tenant/kamar")({ component: Page });
