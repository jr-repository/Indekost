
import { Button } from "@/components/ui/button";
import { PageHeader, Panel } from "@/components/portal/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, brand } from "@/data/ernala";
import { Phone, Mail, MessageCircle } from "lucide-react";

function Page() {
  return (
    <>
      <PageHeader title="Help" description="Bantuan cepat untuk penghuni Ernala." />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[[Phone, "Telepon pengelola", brand.phone], [MessageCircle, "WhatsApp", brand.phone], [Mail, "Email", brand.email]].map(([Icon, l, v]: any) => (
          <div key={l} className="rounded-2xl border border-border bg-card p-5">
            <Icon className="h-5 w-5 text-accent" />
            <p className="mt-3 text-[13px] text-muted-foreground">{l}</p>
            <p className="text-[14px] font-semibold text-primary">{v}</p>
          </div>
        ))}
      </div>
      <Panel title="Pertanyaan umum">
        <div className="p-5">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`} className="border-border">
                <AccordionTrigger className="text-left text-[14px] font-semibold text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button variant="cta" className="mt-6">Hubungi pengelola</Button>
        </div>
      </Panel>
    </>
  );
}

export default Page;
