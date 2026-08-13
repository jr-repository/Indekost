
import { DataTablePage } from "@/components/portal/DataTablePage";
import { surveys } from "@/data/ernala";

export default function Page() {
  return (
    <DataTablePage
      title="Survey Management"
      description="Jadwal survey calon penghuni beserta status dan PIC."
      rows={surveys}
      columns={[{ key: "id", label: "Kode" }, { key: "name", label: "Nama" }, { key: "date", label: "Tanggal" }, { key: "time", label: "Jam" }, { key: "room", label: "Kamar" }, { key: "pic", label: "PIC" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Jadwalkan survey"
    />
  );
}
