import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader, Panel, StatCard, StatusBadge } from "@/components/portal/ui";
import { adminKpis, revenueSeries, occupancySeries, roomTypeMix, bookings, movements, maintenanceAdmin, surveys, rupiah } from "@/data/exc-kost";
import { Building2, Wallet, DoorOpen, AlertTriangle } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default AdminDashboard;

const icons = [Building2, Wallet, DoorOpen, AlertTriangle];
const pieColors = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)"];

function AdminDashboard() {
  return (
    <>
      <PageHeader title="Dashboard" description="Ringkasan operasional Exc Kost Cisauk — Agustus 2026."
        actions={<><Button variant="outline" size="sm">Unduh laporan</Button><Button asChild variant="cta" size="sm"><Link to="/admin/booking">Buat booking</Link></Button></>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminKpis.map((k, i) => <StatCard key={k.label} label={k.label} value={k.value} delta={k.delta} sub={k.sub} icon={icons[i]} />)}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Pendapatan vs target" className="lg:col-span-2">
          <div className="h-[280px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSeries}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickFormatter={(v) => `${v / 1000000}jt`} tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip formatter={(v: number) => rupiah(v)} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-chart-2)" fill="url(#rev)" strokeWidth={2} />
                <Area type="monotone" dataKey="target" stroke="var(--color-chart-3)" fill="none" strokeDasharray="4 4" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Komposisi tipe kamar">
          <div className="h-[280px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={roomTypeMix} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                  {roomTypeMix.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Tren okupansi">
          <div className="h-[240px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancySeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis domain={[70, 100]} tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Bar dataKey="occ" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Booking terbaru" action={<Button asChild variant="ghost" size="sm"><Link to="/admin/booking">Semua</Link></Button>}>
          <ul className="divide-y divide-border">
            {bookings.slice(0, 4).map((b) => (
              <li key={b.id} className="flex items-center justify-between px-5 py-3.5 text-[13px]">
                <div><p className="font-medium">{b.name}</p><p className="text-muted-foreground">{b.room} · {b.start}</p></div>
                <StatusBadge status={b.status} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Survey pipeline" action={<Button asChild variant="ghost" size="sm"><Link to="/admin/survey">Semua</Link></Button>}>
          <ul className="divide-y divide-border">
            {surveys.slice(0, 4).map((s) => (
              <li key={s.id} className="flex items-center justify-between px-5 py-3.5 text-[13px]">
                <div><p className="font-medium">{s.name}</p><p className="text-muted-foreground">{s.date} · {s.time}</p></div>
                <StatusBadge status={s.status} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Check-in / check-out mendatang">
          <ul className="divide-y divide-border">
            {movements.map((m) => (
              <li key={m.id} className="flex items-center justify-between px-5 py-3.5 text-[13px]">
                <div><p className="font-medium">{m.type} — {m.name}</p><p className="text-muted-foreground">{m.room} · {m.date}</p></div>
                <StatusBadge status={m.status} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Status maintenance">
          <ul className="divide-y divide-border">
            {maintenanceAdmin.map((m) => (
              <li key={m.id} className="flex items-center justify-between px-5 py-3.5 text-[13px]">
                <div><p className="font-medium">{m.title}</p><p className="text-muted-foreground">{m.room} · {m.tech} · {m.priority}</p></div>
                <StatusBadge status={m.status} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}
