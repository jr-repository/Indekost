
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { complaintsAdmin } from "@/data/exc-kost";
import { toast } from "sonner";

function Page() {
  return (
    <>
      <PageHeader title="Complaint" description="Sampaikan keluhan terkait kenyamanan hunian." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Form komplain">
          <div className="space-y-4 p-5">
            <div><Label className="text-[13px] text-muted-foreground">Topik</Label>
              <Select defaultValue="Kebisingan"><SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>{["Kebisingan", "Kebersihan", "Parkir", "Tamu", "Lainnya"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select></div>
            <div><Label className="text-[13px] text-muted-foreground">Judul</Label><Input className="mt-1.5" placeholder="Ringkas dan jelas" /></div>
            <div><Label className="text-[13px] text-muted-foreground">Detail</Label><Textarea className="mt-1.5" rows={4} /></div>
            <Button variant="cta" className="w-full" onClick={() => toast.success("Komplain CMP-0232 terkirim")}>Kirim komplain</Button>
          </div>
        </Panel>
        <Panel title="Riwayat komplain">
          <ul className="divide-y divide-border">
            {complaintsAdmin.map((c) => (
              <li key={c.id} className="flex items-center justify-between px-5 py-4 text-[13px]">
                <div><p className="font-medium">{c.topic}</p><p className="text-muted-foreground">{c.id} · {c.created}</p></div>
                <StatusBadge status={c.status} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}

export default Page;
