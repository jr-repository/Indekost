
import { DataTablePage } from "@/components/portal/DataTablePage";
import { tenants } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Contracts"
      description="Kontrak sewa aktif dan masa berlakunya."
      rows={tenants}
      columns={[{ key: "id", label: "No. Kontrak" }, { key: "name", label: "Penghuni" }, { key: "room", label: "Kamar" }, { key: "start", label: "Mulai" }, { key: "end", label: "Berakhir" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Buat kontrak"
    />
  );
}
