import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { promos } from "@/data/ernala";

export const Route = createFileRoute("/admin/promo")({
  component: () => (
    <DataTablePage
      title="Promo"
      description="Kode promo aktif dan performanya."
      rows={promos}
      columns={[{ key: "code", label: "Kode" }, { key: "name", label: "Nama" }, { key: "value", label: "Nilai" }, { key: "period", label: "Periode" }, { key: "used", label: "Terpakai" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Buat promo"
    />
  ),
});
