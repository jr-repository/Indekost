import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { tenantTickets } from "@/data/ernala";
import { Plus } from "lucide-react";
import { toast } from "sonner";

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHeader title="Maintenance" description="Laporkan kerusakan dan pantau progresnya."
        actions={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button variant="cta" size="sm"><Plus className="h-3.5 w-3.5" />Buat tiket</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle className="font-display text-primary">Laporkan kerusakan</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div><Label className="text-[13px] text-muted-foreground">Kategori</Label>
                  <Select defaultValue="Elektronik"><SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                    <SelectContent>{["Elektronik", "Plumbing", "Listrik", "Bangunan", "Lainnya"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select></div>
                <div><Label className="text-[13px] text-muted-foreground">Judul masalah</Label><Input className="mt-1.5" placeholder="Contoh: AC kurang dingin" /></div>
                <div><Label className="text-[13px] text-muted-foreground">Deskripsi</Label><Textarea className="mt-1.5" rows={3} /></div>
                <Button variant="cta" className="w-full" onClick={() => { setOpen(false); toast.success("Tiket MTC-1195 berhasil dibuat"); }}>Kirim tiket</Button>
              </div>
            </DialogContent>
          </Dialog>
        } />
      <Panel title="Tiket saya">
        <ul className="divide-y divide-border">
          {tenantTickets.map((t) => (
            <li key={t.id} className="flex items-center justify-between px-5 py-4 text-[13px]">
              <div><p className="font-medium">{t.title}</p><p className="text-muted-foreground">{t.id} · {t.cat} · {t.tech} · {t.created}</p></div>
              <StatusBadge status={t.status} />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

export const Route = createFileRoute("/tenant/maintenance")({ component: Page });
