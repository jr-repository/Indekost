import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { movements } from "@/data/ernala";

export const Route = createFileRoute("/admin/checkin-checkout")({
  component: () => (
    <DataTablePage
      title="Check-in / Check-out"
      description="Jadwal kedatangan dan kepindahan penghuni."
      rows={movements}
      columns={[{ key: "id", label: "ID" }, { key: "type", label: "Jenis" }, { key: "name", label: "Nama" }, { key: "room", label: "Kamar" }, { key: "date", label: "Tanggal" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Jadwalkan"
    />
  ),
});
