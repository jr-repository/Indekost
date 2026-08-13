
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, StatusBadge } from "@/components/portal/ui";
import { properties } from "@/data/ernala";
import { Plus } from "lucide-react";

export default Properties;

function Properties() {
  return (
    <>
      <PageHeader title="Properties" description="Daftar properti yang dikelola Ernala."
        actions={<Button variant="cta" size="sm"><Plus className="h-3.5 w-3.5" />Tambah properti</Button>} />
      <div className="grid gap-6 md:grid-cols-2">
        {properties.map((p) => (
          <Card key={p.name} className="overflow-hidden rounded-2xl border-border p-0 shadow-none">
            <img src={p.cover} alt={p.name} className="h-44 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{p.name}</h3>
                  <p className="text-[13px] text-muted-foreground">{p.address}</p>
                </div>
                <StatusBadge status={p.status} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[13px]">
                <div><p className="text-muted-foreground">Jumlah kamar</p><p className="font-semibold text-primary">{p.rooms}</p></div>
                <div><p className="text-muted-foreground">Okupansi</p><p className="font-semibold text-primary">{p.occ}</p></div>
              </div>
              <Button variant="outline" size="sm" className="mt-5 w-full">Kelola properti</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
