import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { invoices } from "@/data/ernala";

export const Route = createFileRoute("/admin/tagihan")({
  component: () => (
    <DataTablePage
      title="Billing"
      description="Tagihan bulanan seluruh penghuni."
      rows={invoices}
      columns={[{ key: "id", label: "No. Invoice" }, { key: "tenant", label: "Penghuni" }, { key: "room", label: "Kamar" }, { key: "period", label: "Periode" }, { key: "due", label: "Jatuh tempo" }, { key: "amount", label: "Nominal", money: true }, { key: "status", label: "Status", badge: true }]}
      createLabel="Terbitkan tagihan"
    />
  ),
});
