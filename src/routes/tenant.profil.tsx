
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PageHeader, Panel } from "@/components/portal/ui";
import { tenant } from "@/data/exc-kost";
import { toast } from "sonner";

function Page() {
  return (
    <>
      <PageHeader title="Profile" description="Data pribadi dan preferensi akun." actions={<Button variant="cta" size="sm" onClick={() => toast.success("Profil disimpan")}>Simpan</Button>} />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Panel title="Foto & identitas">
          <div className="p-5 text-center">
            <img src={tenant.avatar} alt={tenant.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
            <p className="mt-4 font-display text-lg font-bold text-primary">{tenant.name}</p>
            <p className="text-[13px] text-muted-foreground">{tenant.occupation}</p>
            <Button variant="outline" size="sm" className="mt-4">Ganti foto</Button>
          </div>
        </Panel>
        <div className="space-y-6">
          <Panel title="Data diri">
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <div><Label className="text-[13px] text-muted-foreground">Nama</Label><Input className="mt-1.5" defaultValue={tenant.name} /></div>
              <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1.5" defaultValue={tenant.email} /></div>
              <div><Label className="text-[13px] text-muted-foreground">WhatsApp</Label><Input className="mt-1.5" defaultValue={tenant.phone} /></div>
              <div><Label className="text-[13px] text-muted-foreground">Kontak darurat</Label><Input className="mt-1.5" defaultValue={tenant.emergency} /></div>
            </div>
          </Panel>
          <Panel title="Preferensi notifikasi">
            <div className="space-y-4 p-5 text-[13px]">
              {[["Reminder tagihan", true], ["Pengumuman pengelola", true], ["Promo & penawaran", false]].map(([l, v]) => (
                <div key={String(l)} className="flex items-center justify-between"><span>{String(l)}</span><Switch defaultChecked={Boolean(v)} /></div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

export default Page;
