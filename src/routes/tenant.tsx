import { PortalShell, type NavItem } from "@/components/portal/PortalShell";
import { tenant } from "@/data/exc-kost";
import {
  LayoutDashboard, BedDouble, ReceiptText, CreditCard, FileText, Wrench,
  MessageSquareWarning, CalendarPlus, ArrowLeftRight, LogOut, Users, User, LifeBuoy,
} from "lucide-react";

const items: NavItem[] = [
  { to: "/tenant", label: "Overview", icon: LayoutDashboard, group: "Utama" },
  { to: "/tenant/kamar", label: "My Room", icon: BedDouble, group: "Utama" },
  { to: "/tenant/tagihan", label: "Billing", icon: ReceiptText, group: "Keuangan" },
  { to: "/tenant/pembayaran", label: "Payments", icon: CreditCard, group: "Keuangan" },
  { to: "/tenant/kontrak", label: "Contract", icon: FileText, group: "Keuangan" },
  { to: "/tenant/maintenance", label: "Maintenance", icon: Wrench, group: "Layanan" },
  { to: "/tenant/komplain", label: "Complaint", icon: MessageSquareWarning, group: "Layanan" },
  { to: "/tenant/perpanjang", label: "Extend Stay", icon: CalendarPlus, group: "Layanan" },
  { to: "/tenant/pindah-kamar", label: "Move Room", icon: ArrowLeftRight, group: "Layanan" },
  { to: "/tenant/checkout", label: "Check-out", icon: LogOut, group: "Layanan" },
  { to: "/tenant/tamu", label: "Visitor", icon: Users, group: "Layanan" },
  { to: "/tenant/profil", label: "Profile", icon: User, group: "Akun" },
  { to: "/tenant/bantuan", label: "Help", icon: LifeBuoy, group: "Akun" },
];

export default function TenantLayout() {
  return (
    <PortalShell
      items={items}
      title="Portal Penghuni"
      badge="PORTAL PENGHUNI"
      user={{ name: tenant.name, role: "Penghuni B-203", avatar: tenant.avatar }}
    />
  );
}
