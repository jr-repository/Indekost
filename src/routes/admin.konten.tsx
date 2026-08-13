import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { contents } from "@/data/ernala";

export const Route = createFileRoute("/admin/konten")({
  component: () => (
    <DataTablePage
      title="Content Management"
      description="Konten website publik yang dikelola tim marketing."
      rows={contents}
      columns={[{ key: "title", label: "Judul" }, { key: "type", label: "Tipe" }, { key: "updated", label: "Diperbarui" }, { key: "by", label: "Oleh" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah konten"
    />
  ),
});
