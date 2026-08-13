import { Link } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { rooms, img } from "@/data/exc-kost";
import { CalendarDays, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

const slots = ["09.00", "10.00", "11.00", "13.00", "14.00", "15.00", "16.00", "17.00"];
const dates = ["Kam, 14 Agu", "Jum, 15 Agu", "Sab, 16 Agu", "Min, 17 Agu", "Sen, 18 Agu", "Sel, 19 Agu"];

function Survey() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(dates[0]);
  const [slot, setSlot] = useState(slots[1]);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Ajukan Survey</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Ajukan Survey</h1>
        <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">Gratis, tanpa komitmen. Tim kami akan mengonfirmasi jadwal maksimal 1x24 jam.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <Card className="rounded-2xl border-border p-6 shadow-none sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              {["Data diri", "Jadwal", "Konfirmasi"].map((s, i) => (
                <div key={s} className="flex flex-1 items-center gap-3">
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[13px] font-bold ${step > i ? "bg-accent text-accent-foreground" : "bg-secondary text-primary"}`}>{i + 1}</span>
                  <span className={`text-[13px] ${step === i + 1 ? "font-semibold text-primary" : "text-muted-foreground"}`}>{s}</span>
                  {i < 2 && <span className="hidden h-px flex-1 bg-border sm:block" />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nama lengkap"><Input placeholder="Nama sesuai KTP" defaultValue="Fajar Ramadhan" /></Field>
                <Field label="Nomor WhatsApp"><Input placeholder="08xxxxxxxxxx" defaultValue="0811 2233 4455" /></Field>
                <Field label="Email"><Input type="email" placeholder="nama@email.com" defaultValue="fajar@mail.com" /></Field>
                <Field label="Pekerjaan"><Input placeholder="Karyawan / Mahasiswa" defaultValue="Karyawan swasta" /></Field>
                <Field label="Tipe kamar diminati">
                  <Select defaultValue={rooms[2].name}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{rooms.map((r) => <SelectItem key={r.id} value={r.name}>{r.name} — {r.type}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Rencana mulai huni">
                  <Select defaultValue="September 2026">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{["Agustus 2026", "September 2026", "Oktober 2026", "Belum pasti"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Catatan (opsional)"><Textarea rows={3} placeholder="Misal: datang bersama orang tua" /></Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="flex items-center gap-2 text-[13px] font-semibold text-primary"><CalendarDays className="h-4 w-4 text-accent" />Pilih tanggal</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {dates.map((d) => (
                    <button key={d} onClick={() => setDate(d)} className={`rounded-[10px] border px-4 py-3 text-[13px] transition ${date === d ? "border-accent bg-accent/10 font-semibold text-accent" : "border-border hover:border-accent/40"}`}>{d}</button>
                  ))}
                </div>
                <p className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-primary"><Clock className="h-4 w-4 text-accent" />Pilih jam</p>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {slots.map((s) => (
                    <button key={s} onClick={() => setSlot(s)} className={`rounded-[10px] border px-3 py-2.5 text-[13px] transition ${slot === s ? "border-accent bg-accent/10 font-semibold text-accent" : "border-border hover:border-accent/40"}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
                <h2 className="mt-5 font-display text-2xl font-extrabold text-primary">Permintaan survey terkirim</h2>
                <p className="mt-2 text-sm text-muted-foreground">Kode survey <b className="text-foreground">SRV-0452</b> · {date}, pukul {slot} WIB</p>
                <p className="mt-1 text-sm text-muted-foreground">Kami akan menghubungi via WhatsApp untuk konfirmasi.</p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Button asChild variant="cta"><Link to="/booking">Lanjut booking kamar</Link></Button>
                  <Button asChild variant="outline"><Link to="/kamar">Lihat kamar lain</Link></Button>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="mt-8 flex justify-between gap-3 border-t border-border pt-6">
                <Button variant="outline" disabled={step === 1} onClick={() => setStep((s) => s - 1)}>Kembali</Button>
                <Button variant="cta" onClick={() => { setStep((s) => s + 1); if (step === 2) toast.success("Survey berhasil diajukan"); }}>
                  {step === 2 ? "Kirim permintaan" : "Lanjut"}
                </Button>
              </div>
            )}
          </Card>

          <aside className="space-y-4">
            <Card className="overflow-hidden rounded-2xl border-border p-0 shadow-none">
              <img src={img.lounge} alt="Common area Exc Kost" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-sm font-bold text-primary">Yang akan kamu lihat</h3>
                <ul className="mt-3 space-y-2 text-[13px] text-muted-foreground">
                  {["Kamar contoh sesuai tipe", "Common lounge & pantry", "Area laundry dan parkir", "Lingkungan sekitar Cibogo"].map((x) => (
                    <li key={x} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />{x}</li>
                  ))}
                </ul>
              </div>
            </Card>
            <Card className="rounded-2xl border-border bg-primary p-5 text-primary-foreground shadow-none">
              <p className="font-display text-sm font-bold">Promo SURVEYNOW</p>
              <p className="mt-1.5 text-[13px] text-primary-foreground/75">Booking maksimal 7 hari setelah survey, dapat potongan Rp250.000.</p>
            </Card>
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-[13px] text-muted-foreground">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

export default Survey;
