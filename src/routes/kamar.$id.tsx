import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { NotFoundPage } from "@/components/system/NotFoundPage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rooms, rupiah, nearby } from "@/data/ernala";
import { Star, Check, MapPin, Ruler, Users, Building2, CalendarDays } from "lucide-react";
import { RoomCard } from "./index";

function RoomDetail() {
  const { id } = useParams();
  const room = rooms.find((item) => item.id === id);

  if (!room) {
    return <NotFoundPage />;
  }

  const [active, setActive] = useState(0);
  const others = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link> / <Link to="/kamar" className="hover:text-accent">Daftar Kamar</Link> / {room.name}
        </p>

        <div className="mt-6 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <img src={room.gallery[active]} alt={room.name} className="h-[300px] w-full rounded-2xl object-cover sm:h-[440px]" />
          <div className="grid grid-cols-4 gap-3 lg:grid-cols-2">
            {room.gallery.map((g, i) => (
              <button key={g} onClick={() => setActive(i)} className={`overflow-hidden rounded-xl border-2 transition ${active === i ? "border-accent" : "border-transparent"}`}>
                <img src={g} alt={`${room.name} foto ${i + 1}`} className="h-20 w-full object-cover lg:h-[102px]" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">{room.type}</span>
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${room.status === "Tersedia" ? "bg-success/12 text-success" : "bg-accent/12 text-accent"}`}>{room.status}</span>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {room.rating} · {room.reviews} ulasan
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">{room.name}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" /> Cibogo, Cisauk — 1,2 km dari Stasiun Cisauk
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Ruler, label: "Ukuran", value: room.size },
                { icon: Building2, label: "Lantai", value: `Lantai ${room.floor}` },
                { icon: Users, label: "Kapasitas", value: `${room.capacity} orang` },
                { icon: CalendarDays, label: "Tersedia", value: room.availableFrom },
              ].map((s) => (
                <Card key={s.label} className="rounded-xl border-border p-4 shadow-none">
                  <s.icon className="h-4 w-4 text-accent" />
                  <p className="mt-2 text-[11px] text-muted-foreground">{s.label}</p>
                  <p className="text-[13px] font-semibold text-primary">{s.value}</p>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="desc" className="mt-10">
              <TabsList className="bg-secondary">
                <TabsTrigger value="desc">Deskripsi</TabsTrigger>
                <TabsTrigger value="fac">Fasilitas</TabsTrigger>
                <TabsTrigger value="rules">Aturan</TabsTrigger>
                <TabsTrigger value="loc">Sekitar</TabsTrigger>
              </TabsList>
              <TabsContent value="desc" className="pt-6 text-[15px] leading-relaxed text-muted-foreground">
                <p>{room.description}</p>
                <p className="mt-4">
                  Kamar dibersihkan menyeluruh sebelum penghuni baru masuk, dilengkapi perabot siap pakai, dan mendapatkan pemeriksaan rutin dari tim teknisi Ernala setiap bulan.
                </p>
              </TabsContent>
              <TabsContent value="fac" className="pt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {room.facilities.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-[14px]">
                      <Check className="h-4 w-4 text-accent" />{f}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="rules" className="pt-6">
                <ul className="space-y-2.5 text-[14px] text-muted-foreground">
                  {["Minimum sewa 3 bulan", "Deposit 1 bulan sewa, dikembalikan saat check-out", "Tamu maksimal sampai pukul 22.00 WIB", "Dilarang merokok di dalam kamar", "Hewan peliharaan belum diizinkan", "Listrik menggunakan token per kamar"].map((r) => (
                    <li key={r} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{r}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="loc" className="pt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {nearby.map((n) => (
                    <div key={n.name} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-[14px]">
                      <span>{n.name}</span>
                      <span className="text-[12px] text-muted-foreground">{n.dist} · {n.time}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="rounded-2xl border-border p-6 shadow-[var(--shadow-soft)]">
              <p className="text-[13px] text-muted-foreground">Harga sewa</p>
              <p className="font-display text-3xl font-extrabold text-primary">{rupiah(room.price)}<span className="text-sm font-medium text-muted-foreground">/bulan</span></p>
              <div className="mt-5 space-y-2.5 border-t border-border pt-5 text-[13px]">
                <Row label="Deposit (refundable)" value={rupiah(room.price)} />
                <Row label="Biaya administrasi" value={rupiah(150000)} />
                <Row label="Listrik" value="Token, ± Rp200.000" />
                <div className="flex items-center justify-between border-t border-border pt-3 text-[15px] font-bold text-primary">
                  <span>Total bulan pertama</span>
                  <span>{rupiah(room.price * 2 + 150000)}</span>
                </div>
              </div>
              <Button asChild variant="cta" className="mt-6 w-full" size="lg">
                <Link to={`/booking?room=${room.id}`}>Booking kamar ini</Link>
              </Button>
              <Button asChild variant="outline" className="mt-2 w-full"><Link to="/survey">Ajukan survey dulu</Link></Button>
              <p className="mt-4 text-center text-[12px] text-muted-foreground">Gratis dibatalkan dalam 24 jam setelah booking.</p>
            </Card>
          </aside>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-2xl font-extrabold text-primary">Kamar lain yang mungkin cocok</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((r) => <RoomCard key={r.id} room={r} />)}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default RoomDetail;

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
