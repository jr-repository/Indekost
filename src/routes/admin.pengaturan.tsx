
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader, Panel } from "@/components/portal/ui";
import { brand } from "@/data/exc-kost";
import { toast } from "sonner";

export default Settings;

function Settings() {
  return (
    <>
      <PageHeader title="Settings" description="Pengaturan properti, penagihan, dan preferensi sistem."
        actions={<Button variant="cta" size="sm" onClick={() => toast.success("Pengaturan disimpan (mockup)")}>Simpan perubahan</Button>} />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Informasi properti">
          <div className="space-y-4 p-5">
            <div><Label className="text-[13px] text-muted-foreground">Nama properti</Label><Input className="mt-1.5" defaultValue={brand.full} /></div>
            <div><Label className="text-[13px] text-muted-foreground">Alamat</Label><Textarea className="mt-1.5" rows={2} defaultValue={brand.address} /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label className="text-[13px] text-muted-foreground">Telepon</Label><Input className="mt-1.5" defaultValue={brand.phone} /></div>
              <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1.5" defaultValue={brand.email} /></div>
            </div>
          </div>
        </Panel>
        <Panel title="Penagihan">
          <div className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label className="text-[13px] text-muted-foreground">Tanggal jatuh tempo</Label><Input className="mt-1.5" defaultValue="Tanggal 5 tiap bulan" /></div>
              <div><Label className="text-[13px] text-muted-foreground">Denda keterlambatan</Label><Input className="mt-1.5" defaultValue="Rp25.000 / hari" /></div>
            </div>
            <div><Label className="text-[13px] text-muted-foreground">Biaya administrasi</Label><Input className="mt-1.5" defaultValue="Rp150.000" /></div>
            {[["Terbitkan tagihan otomatis", true], ["Kirim reminder H-3", true], ["Aktifkan pembayaran QRIS", true], ["Izinkan cicilan deposit", false]].map(([l, v]) => (
              <div key={String(l)} className="flex items-center justify-between border-t border-border pt-4 text-[13px]">
                <span>{String(l)}</span><Switch defaultChecked={Boolean(v)} />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
