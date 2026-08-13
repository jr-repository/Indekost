
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader, Panel } from "@/components/portal/ui";
import { tenant, rupiah } from "@/data/ernala";
import { toast } from "sonner";

function Page() {
  const [dur, setDur] = useState(6);
  const disc = dur === 12 ? 0.1 : dur === 6 ? 0.05 : 0;
  const monthly = Math.round(tenant.room.price * (1 - disc));
  return (
    <>
      <PageHeader title="Extend Stay" description={`Kontrak kamu berakhir ${tenant.endDate}. Perpanjang lebih awal untuk mendapat diskon.`} />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Panel title="Pilih durasi perpanjangan">
          <div className="grid gap-3 p-5 sm:grid-cols-3">
            {[3, 6, 12].map((d) => (
              <button key={d} onClick={() => setDur(d)} className={`rounded-xl border p-5 text-left transition ${dur === d ? "border-accent bg-accent/8" : "border-border hover:border-accent/40"}`}>
                <p className="font-display text-lg font-extrabold text-primary">{d} bulan</p>
                <p className="mt-1 text-[12px] text-muted-foreground">{d === 12 ? "Diskon 10%" : d === 6 ? "Diskon 5%" : "Tanpa diskon"}</p>
              </button>
            ))}
          </div>
        </Panel>
        <Panel title="Ringkasan">
          <div className="space-y-3 p-5 text-[13px]">
            <div className="flex justify-between"><span className="text-muted-foreground">Sewa per bulan</span><span className="font-medium">{rupiah(monthly)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Durasi</span><span className="font-medium">{dur} bulan</span></div>
            <div className="flex justify-between border-t border-border pt-3 font-display text-[16px] font-extrabold text-primary"><span>Total</span><span>{rupiah(monthly * dur)}</span></div>
            <Button variant="cta" className="mt-3 w-full" onClick={() => toast.success("Pengajuan perpanjangan terkirim")}>Ajukan perpanjangan</Button>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default Page;
