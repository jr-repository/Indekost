import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { tenants } from "@/data/ernala";

export const Route = createFileRoute("/admin/penghuni")({
  component: () => (
    <DataTablePage
      title="Tenants"
      description="Daftar penghuni aktif, akan habis kontrak, dan yang sudah check-out."
      rows={tenants}
      columns={[{ key: "id", label: "ID" }, { key: "name", label: "Nama" }, { key: "room", label: "Kamar" }, { key: "start", label: "Mulai" }, { key: "end", label: "Berakhir" }, { key: "billing", label: "Tagihan", badge: true }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah penghuni"
    />
  ),
});
