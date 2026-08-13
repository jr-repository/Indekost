import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader, Panel, StatCard, StatusBadge } from "@/components/portal/ui";
import { tenant, tenantBills, tenantTickets, announcements, tenantActivity, rupiah } from "@/data/ernala";
import { BedDouble, ReceiptText, Wrench, CalendarDays } from "lucide-react";

export default Overview;

function Overview() {
  const bill = tenantBills[0];
  return (
    <>
      <PageHeader title={`Halo, ${tenant.name.split(" ")[0]} 👋`} description="Ini ringkasan hunianmu di Ernala Indekost bulan ini."
        actions={<><Button asChild variant="outline" size="sm"><Link to="/tenant/maintenance">Lapor kerusakan</Link></Button>
        <Button asChild variant="cta" size="sm"><Link to="/tenant/tagihan">Bayar tagihan</Link></Button></>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Kamar aktif" value={tenant.room.code} sub={tenant.room.name} icon={BedDouble} />
        <StatCard label="Tagihan berikutnya" value={rupiah(bill.amount + bill.extra)} sub={`Jatuh tempo ${bill.due}`} icon={ReceiptText} />
        <StatCard label="Kontrak berakhir" value={tenant.endDate} sub="Perpanjang H-30" icon={CalendarDays} />
        <StatCard label="Tiket aktif" value="1" sub="AC kurang dingin" icon={Wrench} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Tagihan Agustus 2026" className="lg:col-span-2">
          <div className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-3xl font-extrabold text-primary">{rupiah(bill.amount + bill.extra)}</p>
                <p className="mt-1 text-[13px] text-muted-foreground">Sewa {rupiah(bill.amount)} + listrik {rupiah(bill.extra)}</p>
              </div>
              <StatusBadge status={bill.status} />
            </div>
            <div className="mt-5 flex gap-2">
              <Button asChild variant="cta"><Link to="/tenant/tagihan">Bayar sekarang</Link></Button>
              <Button asChild variant="outline"><Link to="/tenant/pembayaran">Riwayat pembayaran</Link></Button>
            </div>
          </div>
        </Panel>
        <Panel title="Kamar saya">
          <div className="p-5">
            <img src={tenant.room.cover} alt={tenant.room.name} className="h-32 w-full rounded-xl object-cover" />
            <p className="mt-3 font-display text-base font-bold text-primary">{tenant.room.name}</p>
            <p className="text-[13px] text-muted-foreground">{tenant.room.code} · {tenant.room.size} · Lantai {tenant.room.floor}</p>
            <Button asChild variant="outline" size="sm" className="mt-4 w-full"><Link to="/tenant/kamar">Detail kamar</Link></Button>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Pengumuman" className="lg:col-span-2">
          <ul className="divide-y divide-border">
            {announcements.map((a) => (
              <li key={a.title} className="px-5 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-semibold text-primary">{a.title}</p>
                  <span className="text-[12px] text-muted-foreground">{a.date}</span>
                </div>
                <p className="mt-1 text-[13px] text-muted-foreground">{a.body}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Aktivitas terbaru">
          <ul className="divide-y divide-border">
            {tenantActivity.map((a) => (
              <li key={a.text} className="px-5 py-3.5 text-[13px]">
                <p>{a.text}</p><p className="text-[12px] text-muted-foreground">{a.time}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Tiket maintenance saya" className="mt-6">
        <ul className="divide-y divide-border">
          {tenantTickets.map((t) => (
            <li key={t.id} className="flex items-center justify-between px-5 py-3.5 text-[13px]">
              <div><p className="font-medium">{t.title}</p><p className="text-muted-foreground">{t.id} · {t.cat} · {t.created}</p></div>
              <StatusBadge status={t.status} />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
