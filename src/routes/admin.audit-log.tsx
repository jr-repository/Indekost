import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { auditLog } from "@/data/ernala";

export const Route = createFileRoute("/admin/audit-log")({
  component: () => (
    <DataTablePage
      title="Audit Log"
      description="Rekam jejak aktivitas seluruh pengguna sistem."
      rows={auditLog}
      columns={[{ key: "time", label: "Waktu" }, { key: "user", label: "Pengguna" }, { key: "action", label: "Aktivitas" }, { key: "ip", label: "IP" }]}
      
    />
  ),
});
