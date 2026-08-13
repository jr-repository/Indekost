import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { housekeeping } from "@/data/ernala";

export const Route = createFileRoute("/admin/housekeeping")({
  component: () => (
    <DataTablePage
      title="Housekeeping"
      description="Jadwal kebersihan area dan kamar."
      rows={housekeeping}
      columns={[{ key: "area", label: "Area" }, { key: "staff", label: "Petugas" }, { key: "schedule", label: "Jadwal" }, { key: "last", label: "Terakhir" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah jadwal"
    />
  ),
});
