
import { DataTablePage } from "@/components/portal/DataTablePage";
import { contents } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Content Management"
      description="Konten website publik yang dikelola tim marketing."
      rows={contents}
      columns={[{ key: "title", label: "Judul" }, { key: "type", label: "Tipe" }, { key: "updated", label: "Diperbarui" }, { key: "by", label: "Oleh" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah konten"
    />
  );
}
