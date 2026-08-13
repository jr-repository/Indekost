import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, type NavItem } from "@/components/portal/PortalShell";
import {
  LayoutDashboard, Building2, Layers, DoorClosed, CalendarRange, Target, ClipboardCheck,
  BookMarked, Users, FileText, ReceiptText, CreditCard, PiggyBank, LogIn, Wrench,
  MessageSquareWarning, Sparkles, Ticket, FileEdit, Bell, BarChart3, ShieldCheck, Settings, History,
} from "lucide-react";

const items: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, group: "Ringkasan" },
  { to: "/admin/properti", label: "Properties", icon: Building2, group: "Properti" },
  { to: "/admin/tipe-kamar", label: "Room Types", icon: Layers, group: "Properti" },
  { to: "/admin/kamar", label: "Rooms", icon: DoorClosed, group: "Properti" },
  { to: "/admin/ketersediaan", label: "Availability", icon: CalendarRange, group: "Properti" },
  { to: "/admin/leads", label: "Leads / CRM", icon: Target, group: "Penjualan" },
  { to: "/admin/survey", label: "Survey Management", icon: ClipboardCheck, group: "Penjualan" },
  { to: "/admin/booking", label: "Bookings", icon: BookMarked, group: "Penjualan" },
  { to: "/admin/penghuni", label: "Tenants", icon: Users, group: "Penghunian" },
  { to: "/admin/kontrak", label: "Contracts", icon: FileText, group: "Penghunian" },
  { to: "/admin/tagihan", label: "Billing", icon: ReceiptText, group: "Keuangan" },
  { to: "/admin/pembayaran", label: "Payments", icon: CreditCard, group: "Keuangan" },
  { to: "/admin/deposit", label: "Deposits", icon: PiggyBank, group: "Keuangan" },
  { to: "/admin/checkin-checkout", label: "Check-in / out", icon: LogIn, group: "Operasional" },
  { to: "/admin/maintenance", label: "Maintenance", icon: Wrench, group: "Operasional" },
  { to: "/admin/komplain", label: "Complaints", icon: MessageSquareWarning, group: "Operasional" },
  { to: "/admin/housekeeping", label: "Housekeeping", icon: Sparkles, group: "Operasional" },
  { to: "/admin/promo", label: "Promo", icon: Ticket, group: "Marketing" },
  { to: "/admin/konten", label: "Content Management", icon: FileEdit, group: "Marketing" },
  { to: "/admin/notifikasi", label: "Notifications", icon: Bell, group: "Marketing" },
  { to: "/admin/laporan", label: "Reports", icon: BarChart3, group: "Sistem" },
  { to: "/admin/pengguna", label: "Users & Roles", icon: ShieldCheck, group: "Sistem" },
  { to: "/admin/pengaturan", label: "Settings", icon: Settings, group: "Sistem" },
  { to: "/admin/audit-log", label: "Audit Log", icon: History, group: "Sistem" },
];

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Portal Admin — Ernala Indekost" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <PortalShell items={items} title="Portal Admin" badge="PORTAL ADMIN"
      user={{ name: "Nadia Prameswari", role: "Manager", avatar: "https://i.pravatar.cc/120?img=45" }} />
  ),
});
