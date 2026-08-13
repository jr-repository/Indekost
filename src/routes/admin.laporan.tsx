
import { Button } from "@/components/ui/button";
import { PageHeader, Panel, StatCard } from "@/components/portal/ui";
import { revenueSeries, occupancySeries, roomTypeMix, rupiah } from "@/data/exc-kost";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";

export default Reports;

function Reports() {
  return (
    <>
      <PageHeader title="Reports" description="Laporan performa okupansi dan pendapatan 7 bulan terakhir."
        actions={<Button variant="cta" size="sm"><Download className="h-3.5 w-3.5" />Unduh PDF</Button>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total pendapatan YTD" value={rupiah(366300000)} delta="+11%" sub="vs 2025" />
        <StatCard label="Rata-rata okupansi" value="90,1%" delta="+2,4%" sub="7 bulan" />
        <StatCard label="Rata-rata lama tinggal" value="9,4 bulan" sub="per penghuni" />
        <StatCard label="Tingkat perpanjangan" value="72%" delta="+5%" sub="kontrak diperpanjang" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Pendapatan bulanan">
          <div className="h-[280px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickFormatter={(v) => `${v / 1000000}jt`} tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip formatter={(v: number) => rupiah(v)} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-chart-2)" fill="var(--color-chart-2)" fillOpacity={0.18} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Okupansi bulanan">
          <div className="h-[280px] p-4">
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
      </div>
      <Panel title="Distribusi tipe kamar" className="mt-6">
        <div className="divide-y divide-border">
          {roomTypeMix.map((t) => (
            <div key={t.name} className="flex items-center gap-4 px-5 py-4 text-[13px]">
              <span className="w-24 font-medium text-primary">{t.name}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-accent" style={{ width: `${(t.value / 32) * 100}%` }} />
              </div>
              <span className="w-16 text-right text-muted-foreground">{t.value} unit</span>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
