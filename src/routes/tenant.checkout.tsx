
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PageHeader, Panel } from "@/components/portal/ui";
import { tenant, rupiah } from "@/data/exc-kost";
import { toast } from "sonner";

function Page() {
  return (
    <>
      <PageHeader title="Check-out" description="Ajukan pengakhiran sewa minimal 30 hari sebelum tanggal keluar." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Form pengajuan check-out">
          <div className="space-y-4 p-5">
            <div><Label className="text-[13px] text-muted-foreground">Tanggal keluar</Label><Input className="mt-1.5" type="date" defaultValue="2027-01-31" /></div>
            <div><Label className="text-[13px] text-muted-foreground">Alasan</Label><Textarea className="mt-1.5" rows={3} placeholder="Pindah kota / dekat kantor baru / lainnya" /></div>
            <div className="space-y-2.5 text-[13px] text-muted-foreground">
              {["Saya akan mengosongkan kamar sebelum pukul 12.00 WIB.", "Saya bersedia mengikuti inspeksi kamar bersama pengelola.", "Saya memahami potongan deposit bila ada kerusakan."].map((t) => (
                <label key={t} className="flex cursor-pointer items-start gap-2.5"><Checkbox className="mt-0.5" defaultChecked />{t}</label>
              ))}
            </div>
            <Button variant="cta" className="w-full" onClick={() => toast.success("Pengajuan check-out terkirim")}>Ajukan check-out</Button>
          </div>
        </Panel>
        <Panel title="Estimasi pengembalian deposit">
          <div className="space-y-3 p-5 text-[13px]">
            <div className="flex justify-between"><span className="text-muted-foreground">Deposit dibayar</span><span className="font-medium">{rupiah(tenant.deposit)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Estimasi potongan</span><span className="font-medium">{rupiah(0)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Sisa tagihan berjalan</span><span className="font-medium">{rupiah(1936000)}</span></div>
            <div className="flex justify-between border-t border-border pt-3 font-display text-[16px] font-extrabold text-primary"><span>Estimasi diterima</span><span>{rupiah(tenant.deposit - 1936000 > 0 ? tenant.deposit - 1936000 : 0)}</span></div>
            <p className="text-[12px] text-muted-foreground">Deposit dikembalikan maksimal 14 hari kerja setelah inspeksi kamar.</p>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default Page;
