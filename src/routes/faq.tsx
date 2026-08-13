import { Link } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqs, brand } from "@/data/ernala";
import { Search, MessageCircle } from "lucide-react";

function Faq() {
  const [q, setQ] = useState("");
  const list = faqs.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));

  return (
    <PublicLayout>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Pertanyaan Umum</h1>
          <div className="relative mx-auto mt-6 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pertanyaan…" className="h-11 pl-10" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {list.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-[15px] font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {!list.length && <p className="py-10 text-center text-sm text-muted-foreground">Tidak ada pertanyaan yang cocok.</p>}

        <Card className="mt-12 rounded-2xl border-border p-8 text-center shadow-none">
          <MessageCircle className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-display text-xl font-bold text-primary">Masih ada pertanyaan?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Hubungi kami di {brand.phone} atau ajukan survey untuk bertanya langsung.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="cta"><Link to="/survey">Ajukan Survey</Link></Button>
            <Button asChild variant="outline"><Link to="/kamar">Lihat Kamar</Link></Button>
          </div>
        </Card>
      </div>
    </PublicLayout>
  );
}

export default Faq;
