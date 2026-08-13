
import { DataTablePage } from "@/components/portal/DataTablePage";
import { complaintsAdmin } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Complaints"
      description="Keluhan penghuni dan tindak lanjutnya."
      rows={complaintsAdmin}
      columns={[{ key: "id", label: "ID" }, { key: "tenant", label: "Penghuni" }, { key: "topic", label: "Topik" }, { key: "severity", label: "Tingkat" }, { key: "created", label: "Dibuat" }, { key: "status", label: "Status", badge: true }]}
      
    />
  );
}
