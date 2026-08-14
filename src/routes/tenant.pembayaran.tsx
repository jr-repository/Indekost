
import { PageHeader, Panel, StatusBadge } from "@/components/portal/ui";
import { tenantPayments, rupiah } from "@/data/exc-kost";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <>
      <PageHeader title="Payments" description="Riwayat pembayaran yang sudah kamu lakukan." actions={<Button variant="outline" size="sm">Unduh bukti</Button>} />
      <Panel>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader><TableRow className="bg-secondary/50 hover:bg-secondary/50">
              {["No", "ID", "Tanggal", "Metode", "Invoice", "Nominal", "Status"].map((h) => <TableHead key={h} className="text-[12px] font-semibold text-primary">{h}</TableHead>)}
            </TableRow></TableHeader>
            <TableBody>
              {tenantPayments.map((p, index) => (
                <TableRow key={p.id} className="text-[13px] hover:bg-secondary/40">
                  <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                  <TableCell>{p.id}</TableCell><TableCell>{p.date}</TableCell><TableCell>{p.method}</TableCell>
                  <TableCell>{p.invoice}</TableCell><TableCell className="font-semibold">{rupiah(p.amount)}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
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
