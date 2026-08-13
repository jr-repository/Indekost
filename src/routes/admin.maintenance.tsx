import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { maintenanceAdmin } from "@/data/ernala";

export const Route = createFileRoute("/admin/maintenance")({
  component: () => (
    <DataTablePage
      title="Maintenance"
      description="Tiket perbaikan dan penugasan teknisi."
      rows={maintenanceAdmin}
      columns={[{ key: "id", label: "Tiket" }, { key: "room", label: "Kamar" }, { key: "title", label: "Masalah" }, { key: "cat", label: "Kategori" }, { key: "priority", label: "Prioritas" }, { key: "tech", label: "Teknisi" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Buat tiket"
    />
  ),
});
