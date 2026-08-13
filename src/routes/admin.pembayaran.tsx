
import { DataTablePage } from "@/components/portal/DataTablePage";
import { paymentsAdmin } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Payments"
      description="Riwayat pembayaran masuk dan status verifikasinya."
      rows={paymentsAdmin}
      columns={[{ key: "id", label: "ID" }, { key: "tenant", label: "Penghuni" }, { key: "date", label: "Tanggal" }, { key: "method", label: "Metode" }, { key: "ref", label: "Referensi" }, { key: "amount", label: "Nominal", money: true }, { key: "status", label: "Status", badge: true }]}
      
    />
  );
}
