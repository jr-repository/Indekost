import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { notifications } from "@/data/ernala";

export const Route = createFileRoute("/admin/notifikasi")({
  component: () => (
    <DataTablePage
      title="Notifications"
      description="Template dan jadwal pengiriman notifikasi."
      rows={notifications}
      columns={[{ key: "title", label: "Judul" }, { key: "channel", label: "Kanal" }, { key: "audience", label: "Penerima" }, { key: "schedule", label: "Jadwal" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Buat notifikasi"
    />
  ),
});
