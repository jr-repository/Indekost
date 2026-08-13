
import { Button } from "@/components/ui/button";
import { PageHeader, Panel } from "@/components/portal/ui";
import { tenant, rupiah } from "@/data/ernala";
import { FileText, Download } from "lucide-react";

function Page() {
  return (
    <>
      <PageHeader title="Contract" description="Detail kontrak sewa aktif." actions={<Button variant="cta" size="sm"><Download className="h-3.5 w-3.5" />Unduh kontrak</Button>} />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Ringkasan kontrak">
          <div className="space-y-3 p-5 text-[13px]">
            {[["Nomor kontrak", tenant.contractNo], ["Kamar", `${tenant.room.code} — ${tenant.room.name}`], ["Mulai", tenant.startDate], ["Berakhir", tenant.endDate], ["Sewa bulanan", rupiah(tenant.room.price)], ["Deposit", rupiah(tenant.deposit)]].map(([l, v]) => (
              <div key={l} className="flex justify-between border-b border-border pb-2.5"><span className="text-muted-foreground">{l}</span><span className="font-medium">{v}</span></div>
            ))}
          </div>
        </Panel>
        <Panel title="Dokumen">
          <div className="space-y-3 p-5">
            {["Perjanjian sewa.pdf", "Tata tertib penghuni.pdf", "Berita acara serah terima kamar.pdf"].map((d) => (
              <div key={d} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-[13px]">
                <span className="flex items-center gap-2.5"><FileText className="h-4 w-4 text-accent" />{d}</span>
                <Button variant="ghost" size="sm">Unduh</Button>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

export default Page;
