
import { Button } from "@/components/ui/button";
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { tenantBills, rupiah } from "@/data/exc-kost";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

function Page() {
  return (
    <>
      <PageHeader title="Billing" description="Tagihan sewa dan listrik setiap bulan." />
      <Panel title="Tagihan berjalan" className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5">
          <div>
            <p className="font-display text-3xl font-extrabold text-primary">{rupiah(tenantBills[0].amount + tenantBills[0].extra)}</p>
            <p className="mt-1 text-[13px] text-muted-foreground">{tenantBills[0].id} · jatuh tempo {tenantBills[0].due}</p>
          </div>
          <Button variant="cta" onClick={() => toast.success("Mengalihkan ke halaman pembayaran (mockup)")}>Bayar sekarang</Button>
        </div>
      </Panel>
      <Panel title="Riwayat tagihan">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader><TableRow className="bg-secondary/50 hover:bg-secondary/50">
              {["Invoice", "Periode", "Jatuh tempo", "Sewa", "Listrik", "Total", "Status"].map((h) => <TableHead key={h} className="text-[12px] font-semibold text-primary">{h}</TableHead>)}
            </TableRow></TableHeader>
            <TableBody>
              {tenantBills.map((b) => (
                <TableRow key={b.id} className="text-[13px] hover:bg-secondary/40">
                  <TableCell>{b.id}</TableCell><TableCell>{b.period}</TableCell><TableCell>{b.due}</TableCell>
                  <TableCell>{rupiah(b.amount)}</TableCell><TableCell>{rupiah(b.extra)}</TableCell>
                  <TableCell className="font-semibold">{rupiah(b.amount + b.extra)}</TableCell>
                  <TableCell><StatusBadge status={b.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>
    </>
  );
}

export default Page;
