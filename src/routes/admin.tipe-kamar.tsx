import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { roomTypes } from "@/data/ernala";

export const Route = createFileRoute("/admin/tipe-kamar")({
  component: () => (
    <DataTablePage
      title="Room Types"
      description="Tipe kamar, harga dasar, dan jumlah unit."
      rows={roomTypes}
      columns={[{ key: "name", label: "Tipe" }, { key: "price", label: "Harga", money: true }, { key: "size", label: "Ukuran" }, { key: "units", label: "Unit" }, { key: "occupied", label: "Terisi" }, { key: "facilities", label: "Fasilitas" }]}
      createLabel="Tambah tipe"
    />
  ),
});
