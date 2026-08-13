import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { bookings } from "@/data/ernala";

export const Route = createFileRoute("/admin/booking")({
  component: () => (
    <DataTablePage
      title="Bookings"
      description="Seluruh pemesanan kamar beserta status pembayarannya."
      rows={bookings}
      columns={[{ key: "id", label: "Kode" }, { key: "name", label: "Nama" }, { key: "room", label: "Kamar" }, { key: "type", label: "Tipe" }, { key: "start", label: "Mulai" }, { key: "duration", label: "Durasi" }, { key: "total", label: "Total", money: true }, { key: "paid", label: "Dibayar", money: true }, { key: "status", label: "Status", badge: true }]}
      createLabel="Buat booking"
    />
  ),
});
