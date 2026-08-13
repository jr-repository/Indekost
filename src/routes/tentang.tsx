import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { SectionHead } from "./index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { img, stats } from "@/data/ernala";
import { HeartHandshake, Sparkles, ShieldCheck, Leaf } from "lucide-react";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Ernala Indekost — Kos Modern Cisauk BSD" },
      { name: "description", content: "Cerita, nilai, dan tim di balik Ernala Indekost Cisauk BSD — hunian kos modern yang dikelola profesional sejak 2020." },
      { property: "og:title", content: "Tentang Ernala Indekost" },
      { property: "og:description", content: "Hunian kos modern yang dikelola profesional di Cisauk, BSD." },
      { property: "og:image", content: img.facade },
      { name: "twitter:image", content: img.facade },
    ],
  }),
  component: About,
});

const values = [
  { icon: HeartHandshake, title: "Pelayanan personal", desc: "Setiap penghuni punya pendamping dari tim kami, bukan sekadar nomor kamar." },
  { icon: Sparkles, title: "Bersih itu standar", desc: "Housekeeping harian di area umum dan deep clean bulanan tiap kamar." },
  { icon: ShieldCheck, title: "Aman & transparan", desc: "CCTV, akses kartu, dan seluruh tagihan tercatat digital." },
  { icon: Leaf, title: "Tenang & hijau", desc: "Taman depan, rooftop, dan lingkungan warga yang ramah." },
];

const timeline = [
  { year: "2020", title: "Ernala berdiri", desc: "Dimulai dengan 12 kamar di Cibogo, Cisauk." },
  { year: "2022", title: "Ekspansi blok B & C", desc: "Menambah 20 kamar dan area common lounge." },
  { year: "2024", title: "Portal digital penghuni", desc: "Tagihan, maintenance, dan tamu dikelola dari satu portal." },
  { year: "2026", title: "Okupansi 94%", desc: "Rating penghuni 4,8/5 dengan 128 ulasan." },
];

function About() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={img.facade} alt="Bangunan Ernala Indekost" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">Kami membangun kos yang layak disebut rumah</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Ernala Indekost lahir dari pengalaman sederhana: mencari kos yang bersih, aman, dan dikelola dengan jelas ternyata sulit. Sejak 2020 kami memperbaikinya di Cisauk, BSD.
          </p>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold text-accent">{s.value}</p>
                <p className="text-xs text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={img.garden} alt="Taman Ernala" className="h-[380px] w-full rounded-2xl object-cover" />
          <div>
            <SectionHead eyebrow="Nilai kami" title="Empat hal yang kami jaga setiap hari" />
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title}>
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-accent/12 text-accent"><v.icon className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-primary">{v.title}</h3>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Perjalanan" title="Tumbuh bersama penghuni" />
          <div className="space-y-6">
            {timeline.map((t) => (
              <Card key={t.year} className="flex gap-6 rounded-2xl border-border p-6 shadow-none">
                <span className="font-display text-xl font-extrabold text-accent">{t.year}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-primary">{t.title}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">{t.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-extrabold text-primary">Mau jadi bagian dari Ernala?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Lihat kamar yang tersedia bulan ini atau ajukan survey terlebih dulu.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="cta" size="lg"><Link to="/kamar">Lihat Kamar</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/survey">Ajukan Survey</Link></Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
