import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brand, nearby, img } from "@/data/ernala";
import { MapPin, TrainFront, Car, Bike, Clock, Phone } from "lucide-react";

function Location() {
  return (
    <PublicLayout>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Location</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Lokasi & Akses</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">{brand.address}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="relative">
            <img src={img.map} alt="Peta lokasi Ernala Indekost" className="h-[380px] w-full object-cover" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg">
                <MapPin className="h-6 w-6" />
              </span>
            </div>
            <div className="absolute bottom-5 left-5 rounded-2xl bg-card p-5 shadow-[var(--shadow-lift)]">
              <p className="font-display text-sm font-bold text-primary">Ernala Indekost Cisauk</p>
              <p className="mt-1 max-w-xs text-[12px] text-muted-foreground">{brand.address}</p>
              <Button variant="cta" size="sm" className="mt-3">Buka di Google Maps</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border-border p-6 shadow-none lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-primary">Jarak ke titik penting</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <div key={n.name} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
                  <span className="text-[14px]">{n.name}</span>
                  <span className="text-[12px] text-muted-foreground">{n.dist} · {n.time}</span>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="rounded-2xl border-border p-6 shadow-none">
              <h2 className="font-display text-lg font-bold text-primary">Cara menuju ke sini</h2>
              <ul className="mt-4 space-y-4 text-[13px] text-muted-foreground">
                <li className="flex gap-3"><TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span><b className="text-foreground">KRL:</b> Turun di Stasiun Cisauk, lanjut ojek online 5 menit.</span></li>
                <li className="flex gap-3"><Car className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span><b className="text-foreground">Mobil:</b> Keluar Tol BSD, arah Intermoda, masuk Jl. Cibogo Raya.</span></li>
                <li className="flex gap-3"><Bike className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span><b className="text-foreground">Motor:</b> 6 menit dari Pasar Modern Intermoda BSD.</span></li>
              </ul>
            </Card>
            <Card className="rounded-2xl border-border p-6 shadow-none">
              <h2 className="font-display text-lg font-bold text-primary">Kunjungi kami</h2>
              <p className="mt-3 flex gap-2.5 text-[13px] text-muted-foreground"><Clock className="h-4 w-4 text-accent" />{brand.hours}</p>
              <p className="mt-2 flex gap-2.5 text-[13px] text-muted-foreground"><Phone className="h-4 w-4 text-accent" />{brand.phone}</p>
              <Button asChild variant="cta" className="mt-5 w-full"><Link to="/survey">Jadwalkan kunjungan</Link></Button>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Location;
