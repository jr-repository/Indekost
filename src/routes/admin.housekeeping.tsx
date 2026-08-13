
import { DataTablePage } from "@/components/portal/DataTablePage";
import { housekeeping } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Housekeeping"
      description="Jadwal kebersihan area dan kamar."
      rows={housekeeping}
      columns={[{ key: "area", label: "Area" }, { key: "staff", label: "Petugas" }, { key: "schedule", label: "Jadwal" }, { key: "last", label: "Terakhir" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah jadwal"
    />
  );
}
