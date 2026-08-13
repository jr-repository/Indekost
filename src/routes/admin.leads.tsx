import { createFileRoute } from "@tanstack/react-router";
import { DataTablePage } from "@/components/portal/DataTablePage";
import { leads } from "@/data/ernala";

export const Route = createFileRoute("/admin/leads")({
  component: () => (
    <DataTablePage
      title="Leads / CRM"
      description="Pipeline calon penghuni dari seluruh kanal akuisisi."
      rows={leads}
      columns={[{ key: "id", label: "ID" }, { key: "name", label: "Nama" }, { key: "channel", label: "Kanal" }, { key: "interest", label: "Minat" }, { key: "budget", label: "Budget", money: true }, { key: "stage", label: "Tahap", badge: true }, { key: "owner", label: "PIC" }, { key: "updated", label: "Update" }]}
      createLabel="Tambah lead"
    />
  ),
});
