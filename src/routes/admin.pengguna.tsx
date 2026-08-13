
import { DataTablePage } from "@/components/portal/DataTablePage";
import { users } from "@/data/exc-kost";

export default function Page() {
  return (
    <DataTablePage
      title="Users & Roles"
      description="Akun pengelola dan hak aksesnya."
      rows={users}
      columns={[{ key: "name", label: "Nama" }, { key: "email", label: "Email" }, { key: "role", label: "Peran" }, { key: "last", label: "Login terakhir" }, { key: "status", label: "Status", badge: true }]}
      createLabel="Undang pengguna"
    />
  );
}
