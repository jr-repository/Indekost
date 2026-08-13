import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight, Star, MapPin, TrainFront, BadgeCheck, ReceiptText, Users, Search,
  Wifi, Wind, ShieldCheck, Sofa, CheckCircle2, Quote,
} from "lucide-react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { rooms, img, facilities, whyExcKost, stats, testimonials, faqs, nearby, rupiah, gallery } from "@/data/exc-kost";
import { toast } from "sonner";

const iconMap: Record<string, any> = { TrainFront, BadgeCheck, ReceiptText, Users, Wifi, Wind, ShieldCheck, Sofa };

function Home() {
  const [type, setType] = useState("Semua");
  const [budget, setBudget] = useState("Semua");
  const featured = rooms.slice(0, 3);

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={img.hero} alt="Interior kamar kos Exc Kost Cisauk" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-accent" /> Cibogo, Cisauk — Kabupaten Tangerang
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[56px]">
              Kos modern yang terasa seperti rumah, 5 menit dari Stasiun Cisauk.
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80">
              Exc Kost menghadirkan hunian bersih, aman, dan terkelola profesional untuk pekerja muda di kawasan BSD. Kamar siap huni mulai Rp1.400.000/bulan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/kamar">Cek Ketersediaan <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/35 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <Link to="/survey">Ajukan Survey</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-accent">{s.value}</p>
                  <p className="text-xs text-primary-foreground/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mx-auto -mb-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="translate-y-8 rounded-2xl border-border p-5 shadow-[var(--shadow-lift)]">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Tipe kamar</label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="mt-1.5 h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Semua", "Standard", "Deluxe", "Premium", "Studio"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Budget per bulan</label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="mt-1.5 h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Semua", "< Rp1,5 juta", "Rp1,5 – 1,9 juta", "> Rp1,9 juta"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Mulai huni</label>
                <Select defaultValue="Bulan ini">
                  <SelectTrigger className="mt-1.5 h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Bulan ini", "Bulan depan", "2 bulan lagi", "Fleksibel"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button asChild variant="cta" className="h-10 w-full md:w-auto" onClick={() => toast.success("Menampilkan 4 kamar tersedia")}>
                  <Link to="/kamar"><Search className="h-4 w-4" />Cari kamar</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Pilihan kamar"
          title="Kamar favorit penghuni Exc Kost"
          desc="Empat tipe kamar dengan fasilitas lengkap, harga transparan, dan perawatan rutin."
          action={<Button asChild variant="outline"><Link to="/kamar">Lihat semua kamar</Link></Button>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RoomCard key={r.id} room={r} />
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="mt-28 bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Fasilitas" title="Semua yang dibutuhkan, sudah tersedia" desc="Fasilitas kamar dan area bersama yang dirawat setiap hari oleh tim on-site." action={<Button asChild variant="outline"><Link to="/fasilitas">Detail fasilitas</Link></Button>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 8).map((f) => {
              const Icon = iconMap[f.icon] ?? Wifi;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/40">
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-primary">{f.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={img.lounge} alt="Common lounge Exc Kost" className="h-[420px] w-full rounded-2xl object-cover" />
            <Card className="absolute -bottom-8 left-6 hidden w-64 rounded-2xl border-border p-5 shadow-[var(--shadow-lift)] sm:block">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-2 font-display text-2xl font-extrabold text-primary">4,8 / 5</p>
              <p className="text-xs text-muted-foreground">dari 128 ulasan penghuni</p>
            </Card>
          </div>
          <div>
            <SectionHead eyebrow="Kenapa Exc Kost" title="Bukan sekadar kos, tapi hunian yang dikelola serius" desc="Kami menggabungkan kenyamanan hunian modern dengan operasional yang rapi dan transparan." />
            <div className="grid gap-5 sm:grid-cols-2">
              {whyExcKost.map((w) => {
                const Icon = iconMap[w.icon] ?? BadgeCheck;
                return (
                  <div key={w.title} className="flex gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-accent/12 text-accent">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-primary">{w.title}</h3>
                      <p className="mt-1 text-[13px] text-muted-foreground">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Lokasi</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Strategis untuk yang bolak-balik BSD & Jakarta</h2>
            <p className="mt-4 max-w-lg text-primary-foreground/75">
              Berada di Cibogo, Cisauk — dekat Stasiun Cisauk, Intermoda BSD, dan kawasan perkantoran Digital Hub.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {nearby.slice(0, 6).map((n) => (
                <div key={n.name} className="flex items-center justify-between rounded-[12px] border border-white/12 bg-white/5 px-4 py-3">
                  <span className="text-sm">{n.name}</span>
                  <span className="text-xs text-accent">{n.dist}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="cta" className="mt-8"><Link to="/lokasi">Lihat peta & rute</Link></Button>
          </div>
          <img src={img.map} alt="Peta lokasi Exc Kost Cisauk" className="h-[380px] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Galeri" title="Lihat suasana Exc Kost" desc="Foto kamar, area bersama, dan lingkungan sekitar." action={<Button asChild variant="outline"><Link to="/galeri">Buka galeri</Link></Button>} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.slice(0, 8).map((g, i) => (
            <div key={g.caption} className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={g.src} alt={g.caption} loading="lazy" className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${i === 0 ? "h-full min-h-[280px]" : "h-40"}`} />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Testimoni" title="Cerita penghuni Exc Kost" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="rounded-2xl border-border p-6 shadow-none">
                <Quote className="h-6 w-6 text-accent/50" />
                <p className="mt-4 text-[14px] leading-relaxed text-foreground">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Pertanyaan yang sering diajukan" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, 5).map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-[15px] font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <Button asChild variant="ghost"><Link to="/faq">Lihat semua pertanyaan <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={img.neighborhood} alt="Lingkungan sekitar Cisauk BSD" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/88" />
          <div className="relative px-6 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">Siap pindah ke hunian yang lebih nyaman?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
              Jadwalkan survey gratis, atau langsung amankan kamar pilihanmu hari ini. Proses booking hanya 3 menit.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cta" size="lg"><Link to="/booking">Booking Sekarang</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/35 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <Link to="/survey">Ajukan Survey</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
              {["Tanpa biaya survey", "Deposit dikembalikan penuh", "Kontrak fleksibel mulai 3 bulan"].map((x) => (
                <span key={x} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function SectionHead({ eyebrow, title, desc, action }: { eyebrow?: string; title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-[34px]">{title}</h2>
        {desc && <p className="mt-3 text-[15px] text-muted-foreground">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

export function RoomCard({ room }: { room: (typeof rooms)[number] }) {
  return (
    <Card className="hover-lift overflow-hidden rounded-2xl border-border p-0 shadow-none">
      <div className="relative">
        <img src={room.cover} alt={`Kamar ${room.name}`} loading="lazy" className="h-56 w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-card/95 px-2.5 py-1 text-[11px] font-semibold text-primary">{room.type}</span>
        <span className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold ${room.status === "Tersedia" ? "bg-success text-success-foreground" : "bg-primary/80 text-primary-foreground"}`}>
          {room.status}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-primary">{room.name}</h3>
            <p className="text-[13px] text-muted-foreground">{room.code} · {room.size} · Lantai {room.floor}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />{room.rating}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {room.facilities.slice(0, 3).map((f) => (
            <span key={f} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-primary">{f}</span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="font-display text-xl font-extrabold text-primary">{rupiah(room.price)}</p>
            <p className="text-[11px] text-muted-foreground">per bulan</p>
          </div>
          <Button asChild variant="cta" size="sm">
            <Link to={`/kamar/${room.id}`}>Lihat detail</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Home;
