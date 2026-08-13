
import { DataTablePage } from "@/components/portal/DataTablePage";
import { deposits } from "@/data/ernala";

export default function Page() {
  return (
    <DataTablePage
      title="Deposits"
      description="Deposit yang ditahan dan pengembaliannya."
      rows={deposits}
      columns={[{ key: "id", label: "ID" }, { key: "tenant", label: "Penghuni" }, { key: "room", label: "Kamar" }, { key: "amount", label: "Nominal", money: true }, { key: "held", label: "Sejak" }, { key: "status", label: "Status", badge: true }]}
      
    />
  );
}
