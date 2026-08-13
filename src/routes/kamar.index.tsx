import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { RoomCard, SectionHead } from "./index";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { rooms, rupiah, img } from "@/data/ernala";
import { SlidersHorizontal, LayoutGrid } from "lucide-react";

const types = ["Standard", "Deluxe", "Premium", "Studio"];

function RoomList() {
  const [selected, setSelected] = useState<string[]>([]);
  const [max, setMax] = useState([2200000]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState("Rekomendasi");

  const list = useMemo(() => {
    let r = rooms.filter((x) => x.price <= max[0]);
    if (selected.length) r = r.filter((x) => selected.includes(x.type));
    if (onlyAvailable) r = r.filter((x) => x.status === "Tersedia");
    if (sort === "Harga terendah") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "Harga tertinggi") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "Rating tertinggi") r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  }, [selected, max, onlyAvailable, sort]);

  const toggle = (t: string) =>
    setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  return (
    <PublicLayout>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Daftar Kamar</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Daftar Kamar</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">
            {rooms.filter((r) => r.status === "Tersedia").length} kamar tersedia dari {rooms.length} tipe yang ditampilkan. Semua harga sudah termasuk air, Wi-Fi, dan kebersihan area umum.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="rounded-2xl border-border p-5 shadow-none">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-accent" />
              <h2 className="font-display text-sm font-bold text-primary">Filter</h2>
            </div>
            <div className="mt-5">
              <p className="text-[13px] font-semibold text-primary">Tipe kamar</p>
              <div className="mt-3 space-y-2.5">
                {types.map((t) => (
                  <label key={t} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-muted-foreground">
                    <Checkbox checked={selected.includes(t)} onCheckedChange={() => toggle(t)} />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[13px] font-semibold text-primary">Budget maksimal</p>
              <Slider className="mt-4" min={1400000} max={2200000} step={50000} value={max} onValueChange={setMax} />
              <p className="mt-2 text-[13px] text-muted-foreground">Sampai {rupiah(max[0])}/bulan</p>
            </div>
            <div className="mt-6">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-muted-foreground">
                <Checkbox checked={onlyAvailable} onCheckedChange={(v) => setOnlyAvailable(!!v)} />
                Hanya kamar tersedia
              </label>
            </div>
            <Button variant="outline" className="mt-6 w-full" onClick={() => { setSelected([]); setMax([2200000]); setOnlyAvailable(false); }}>
              Reset filter
            </Button>
          </Card>
          <Card className="mt-4 overflow-hidden rounded-2xl border-border p-0 shadow-none">
            <img src={img.station} alt="Stasiun Cisauk" className="h-32 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-sm font-bold text-primary">Belum yakin?</h3>
              <p className="mt-1.5 text-[13px] text-muted-foreground">Datang survey gratis dan lihat kamarnya langsung.</p>
              <Button asChild variant="cta" size="sm" className="mt-4 w-full"><Link to="/survey">Ajukan Survey</Link></Button>
            </div>
          </Card>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">{list.length}</span> kamar ditemukan</p>
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-4 w-4 text-muted-foreground" />
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="h-9 w-[180px]"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Rekomendasi", "Harga terendah", "Harga tertinggi", "Rating tertinggi"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {list.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {list.map((r) => <RoomCard key={r.id} room={r} />)}
            </div>
          ) : (
            <Card className="rounded-2xl border-dashed p-16 text-center shadow-none">
              <p className="font-display text-lg font-bold text-primary">Tidak ada kamar yang cocok</p>
              <p className="mt-2 text-sm text-muted-foreground">Coba longgarkan filter budget atau tipe kamar.</p>
            </Card>
          )}
          <div className="mt-16">
            <SectionHead eyebrow="Butuh bantuan" title="Tim kami bisa bantu pilihkan kamar" desc="Ceritakan kebutuhan dan budgetmu, kami rekomendasikan tipe yang paling pas." action={<Button asChild variant="cta"><Link to="/survey">Konsultasi gratis</Link></Button>} />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default RoomList;
