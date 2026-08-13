import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/portal/ui";
import { rooms, tenant, rupiah } from "@/data/ernala";
import { toast } from "sonner";

function Page() {
  const options = rooms.filter((r) => r.status === "Tersedia" && r.id !== tenant.room.id);
  return (
    <>
      <PageHeader title="Move Room" description="Ajukan pindah ke kamar lain yang tersedia. Selisih sewa dihitung prorata." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {options.map((r) => (
          <Card key={r.id} className="overflow-hidden rounded-2xl border-border p-0 shadow-none">
            <img src={r.cover} alt={r.name} className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-base font-bold text-primary">{r.name}</h3>
              <p className="text-[13px] text-muted-foreground">{r.code} · {r.type} · {r.size}</p>
              <p className="mt-3 font-display text-lg font-extrabold text-primary">{rupiah(r.price)}<span className="text-[12px] font-medium text-muted-foreground">/bulan</span></p>
              <p className="text-[12px] text-muted-foreground">Selisih {rupiah(Math.abs(r.price - tenant.room.price))} dari kamar sekarang</p>
              <Button variant="cta" size="sm" className="mt-4 w-full" onClick={() => toast.success(`Pengajuan pindah ke ${r.code} terkirim`)}>Ajukan pindah</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export const Route = createFileRoute("/tenant/pindah-kamar")({ component: Page });
