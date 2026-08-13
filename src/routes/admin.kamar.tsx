import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { roomUnits } from "@/data/ernala";

export const Route = createFileRoute("/admin/kamar")({
  component: () => (
    <DataTablePage
      title="Rooms"
      description="Seluruh unit kamar beserta status dan penghuninya."
      rows={roomUnits}
      columns={[{ key: "code", label: "Kode" }, { key: "type", label: "Tipe" }, { key: "floor", label: "Lantai" }, { key: "price", label: "Harga", money: true }, { key: "tenant", label: "Penghuni" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Tambah kamar"
    />
  ),
});
