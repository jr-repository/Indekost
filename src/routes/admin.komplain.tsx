import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { complaintsAdmin } from "@/data/ernala";

export const Route = createFileRoute("/admin/komplain")({
  component: () => (
    <DataTablePage
      title="Complaints"
      description="Keluhan penghuni dan tindak lanjutnya."
      rows={complaintsAdmin}
      columns={[{ key: "id", label: "ID" }, { key: "tenant", label: "Penghuni" }, { key: "topic", label: "Topik" }, { key: "severity", label: "Tingkat" }, { key: "created", label: "Dibuat" }, { key: "status", label: "Status", badge: true }]}
      
    />
  ),
});
