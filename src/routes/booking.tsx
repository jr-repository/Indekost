import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { rooms, rupiah } from "@/data/ernala";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>) => ({ room: typeof s.room === "string" ? s.room : rooms[2].id }),
  head: () => ({
    meta: [
      { title: "Booking Kamar — Ernala Indekost Cisauk BSD" },
      { name: "description", content: "Amankan kamar pilihanmu di Ernala Indekost Cisauk BSD. Proses booking cepat dengan rincian biaya transparan." },
      { property: "og:title", content: "Booking Kamar Ernala Indekost" },
      { property: "og:description", content: "Booking kamar kos modern dekat Stasiun Cisauk." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const { room: roomId } = Route.useSearch();
  const room = rooms.find((r) => r.id === roomId) ?? rooms[2];
  const [duration, setDuration] = useState("6");
  const discount = duration === "12" ? 0.1 : duration === "6" ? 0.05 : 0;
  const monthly = Math.round(room.price * (1 - discount));
  const admin = 150000;
  const total = monthly + room.price + admin;

  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground"><Link to="/kamar" className="hover:text-accent">Daftar Kamar</Link> / Booking</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Booking & Checkout</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <Card className="rounded-2xl border-border p-6 shadow-none">
              <h2 className="font-display text-lg font-bold text-primary">1. Data penyewa</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <F label="Nama lengkap"><Input defaultValue="Fajar Ramadhan" /></F>
                <F label="NIK"><Input defaultValue="3603 1122 3344 5566" /></F>
                <F label="Nomor WhatsApp"><Input defaultValue="0811 2233 4455" /></F>
                <F label="Email"><Input defaultValue="fajar@mail.com" /></F>
                <F label="Pekerjaan"><Input defaultValue="Karyawan swasta" /></F>
                <F label="Kontak darurat"><Input defaultValue="Ibu Sari — 0812 7788 9900" /></F>
              </div>
            </Card>

            <Card className="rounded-2xl border-border p-6 shadow-none">
              <h2 className="font-display text-lg font-bold text-primary">2. Detail sewa</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <F label="Kamar">
                  <Select defaultValue={room.id}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{rooms.map((r) => <SelectItem key={r.id} value={r.id}>{r.code} — {r.name}</SelectItem>)}</SelectContent>
                  </Select>
                </F>
                <F label="Durasi kontrak">
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 bulan</SelectItem>
                      <SelectItem value="6">6 bulan (diskon 5%)</SelectItem>
                      <SelectItem value="12">12 bulan (diskon 10%)</SelectItem>
                    </SelectContent>
                  </Select>
                </F>
                <F label="Tanggal mulai huni"><Input type="date" defaultValue="2026-09-01" /></F>
                <F label="Kode promo"><Input placeholder="SURVEYNOW" /></F>
              </div>
            </Card>

            <Card className="rounded-2xl border-border p-6 shadow-none">
              <h2 className="font-display text-lg font-bold text-primary">3. Persetujuan</h2>
              <div className="mt-4 space-y-3 text-[13px] text-muted-foreground">
                {["Saya menyetujui aturan hunian dan tata tertib Ernala Indekost.", "Saya memahami deposit dikembalikan penuh saat check-out tanpa kerusakan.", "Saya bersedia melengkapi dokumen KTP saat online check-in."].map((t) => (
                  <label key={t} className="flex cursor-pointer items-start gap-2.5"><Checkbox defaultChecked className="mt-0.5" />{t}</label>
                ))}
              </div>
            </Card>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="overflow-hidden rounded-2xl border-border p-0 shadow-[var(--shadow-soft)]">
              <img src={room.cover} alt={room.name} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary">{room.name}</h3>
                <p className="text-[13px] text-muted-foreground">{room.code} · {room.type} · {room.size}</p>
                <div className="mt-5 space-y-2.5 border-t border-border pt-5 text-[13px]">
                  <Row l={`Sewa bulan pertama (${duration} bln)`} v={rupiah(monthly)} />
                  {discount > 0 && <Row l="Diskon kontrak" v={`-${(discount * 100).toFixed(0)}%`} />}
                  <Row l="Deposit (refundable)" v={rupiah(room.price)} />
                  <Row l="Biaya administrasi" v={rupiah(admin)} />
                  <div className="flex items-center justify-between border-t border-border pt-3 font-display text-[17px] font-extrabold text-primary">
                    <span>Total bayar</span><span>{rupiah(total)}</span>
                  </div>
                </div>
                <Button asChild variant="cta" size="lg" className="mt-6 w-full"><Link to="/pembayaran">Lanjut ke pembayaran</Link></Button>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />Pembayaran mockup, tidak ada transaksi nyata
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label className="text-[13px] text-muted-foreground">{label}</Label><div className="mt-1.5">{children}</div></div>;
}
function Row({ l, v }: { l: string; v: string }) {
  return <div className="flex justify-between text-muted-foreground"><span>{l}</span><span className="font-medium text-foreground">{v}</span></div>;
}
