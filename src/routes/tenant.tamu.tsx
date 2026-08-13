
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { visitors } from "@/data/ernala";
import { toast } from "sonner";

function Page() {
  return (
    <>
      <PageHeader title="Visitor" description="Daftarkan tamu sebelum berkunjung. Batas kunjungan sampai pukul 22.00 WIB." />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Panel title="Daftarkan tamu">
          <div className="space-y-4 p-5">
            <div><Label className="text-[13px] text-muted-foreground">Nama tamu</Label><Input className="mt-1.5" placeholder="Nama lengkap" /></div>
            <div><Label className="text-[13px] text-muted-foreground">Hubungan</Label><Input className="mt-1.5" placeholder="Teman / Keluarga / Kurir" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label className="text-[13px] text-muted-foreground">Tanggal</Label><Input className="mt-1.5" type="date" defaultValue="2026-08-15" /></div>
              <div><Label className="text-[13px] text-muted-foreground">Jam datang</Label><Input className="mt-1.5" type="time" defaultValue="18:00" /></div>
            </div>
            <Button variant="cta" className="w-full" onClick={() => toast.success("Tamu berhasil didaftarkan")}>Daftarkan tamu</Button>
          </div>
        </Panel>
        <Panel title="Riwayat kunjungan">
          <ul className="divide-y divide-border">
            {visitors.map((v) => (
              <li key={v.name + v.date} className="flex items-center justify-between px-5 py-4 text-[13px]">
                <div><p className="font-medium">{v.name}</p><p className="text-muted-foreground">{v.rel} · {v.date} · {v.in}–{v.out}</p></div>
                <StatusBadge status={v.status} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}

export default Page;
