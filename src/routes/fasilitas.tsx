import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { SectionHead } from "./index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { facilities, img } from "@/data/ernala";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/fasilitas")({
  head: () => ({
    meta: [
      { title: "Fasilitas — Ernala Indekost Cisauk BSD" },
      { name: "description", content: "Wi-Fi 100 Mbps, AC, kamar mandi dalam, pantry, laundry, rooftop lounge, CCTV 24 jam, dan parkir tertutup di Ernala Indekost Cisauk." },
      { property: "og:title", content: "Fasilitas Ernala Indekost" },
      { property: "og:description", content: "Fasilitas kamar dan area bersama yang dirawat setiap hari." },
      { property: "og:image", content: img.lounge },
      { name: "twitter:image", content: img.lounge },
    ],
  }),
  component: Facilities,
});

const showcase = [
  { src: img.lounge, title: "Common Lounge", desc: "Ruang santai dan co-working dengan colokan di setiap kursi, buka 24 jam." },
  { src: img.kitchen, title: "Pantry Bersama", desc: "Kompor, microwave, dispenser, dan kulkas komunal di setiap lantai." },
  { src: img.laundry, title: "Laundry Area", desc: "Tiga mesin cuci dan area jemur atap dengan jadwal pemakaian." },
  { src: img.rooftop, title: "Rooftop", desc: "Area terbuka untuk sore hari, dilengkapi kursi dan pencahayaan hangat." },
];

function Facilities() {
  return (
    <PublicLayout>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Facilities</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Fasilitas Ernala</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">
            Kami merancang setiap sudut agar penghuni bisa istirahat, bekerja, dan bersosialisasi dengan nyaman.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => {
            const Icon = (Icons as any)[f.icon] ?? Icons.Check;
            return (
              <Card key={f.title} className="rounded-2xl border-border p-6 shadow-none transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Area bersama" title="Ruang yang membuat betah" />
          <div className="grid gap-6 md:grid-cols-2">
            {showcase.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-2xl border border-border bg-background">
                <img src={s.src} alt={s.title} loading="lazy" className="h-60 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-extrabold">Ingin lihat langsung fasilitasnya?</h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/75">Ajukan survey gratis dan tim kami akan menemani berkeliling.</p>
          <Button asChild variant="cta" size="lg" className="mt-7"><Link to="/survey">Ajukan Survey</Link></Button>
        </div>
      </section>
    </PublicLayout>
  );
}
