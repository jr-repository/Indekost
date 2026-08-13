import { Link } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { gallery, img } from "@/data/ernala";

const cats = ["Semua", "Kamar", "Common Area", "Fasilitas", "Bangunan", "Lingkungan"];

function Gallery() {
  const [cat, setCat] = useState("Semua");
  const [open, setOpen] = useState<string | null>(null);
  const list = cat === "Semua" ? gallery : gallery.filter((g) => g.cat === cat);

  return (
    <PublicLayout>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Gallery</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Galeri Ernala</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">Semua foto diambil di properti Ernala Indekost Cisauk.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <Button key={c} size="sm" variant={cat === c ? "cta" : "outline"} onClick={() => setCat(c)}>{c}</Button>
          ))}
        </div>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {list.map((g) => (
            <button key={g.caption} onClick={() => setOpen(g.src)} className="group relative block w-full overflow-hidden rounded-2xl">
              <img src={g.src} alt={g.caption} loading="lazy" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-4 text-left text-sm font-medium text-primary-foreground">
                {g.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {open && <img src={open} alt="Foto Ernala" className="w-full object-contain" />}
        </DialogContent>
      </Dialog>
    </PublicLayout>
  );
}

export default Gallery;
