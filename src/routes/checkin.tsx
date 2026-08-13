import { Link } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { UploadCloud, CheckCircle2, KeyRound } from "lucide-react";
import { toast } from "sonner";

const steps = ["Verifikasi data", "Unggah dokumen", "Jadwal kedatangan", "Selesai"];

function Checkin() {
  const [step, setStep] = useState(0);
  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-accent">Home</Link> / Online Check-in</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-primary">Online Check-in</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">Booking BK-3022 · Deluxe Sage (B-203) · Mulai 1 September 2026</p>

        <Progress value={((step + 1) / steps.length) * 100} className="mt-8 h-2" />
        <p className="mt-2 text-[12px] text-muted-foreground">Langkah {step + 1} dari {steps.length}: {steps[step]}</p>

        <Card className="mt-6 rounded-2xl border-border p-6 shadow-none sm:p-8">
          {step === 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <F label="Nama lengkap"><Input defaultValue="Fajar Ramadhan" /></F>
              <F label="NIK"><Input defaultValue="3603 1122 3344 5566" /></F>
              <F label="Nomor WhatsApp"><Input defaultValue="0811 2233 4455" /></F>
              <F label="Alamat asal"><Input defaultValue="Bandung, Jawa Barat" /></F>
              <F label="Kontak darurat"><Input defaultValue="Ibu Sari — 0812 7788 9900" /></F>
              <F label="Plat kendaraan"><Input defaultValue="B 3312 KWZ" /></F>
            </div>
          )}
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {["Foto KTP", "Foto diri (selfie)", "Surat keterangan kerja", "Foto STNK (opsional)"].map((d, i) => (
                <div key={d} className="rounded-xl border border-dashed border-border p-6 text-center">
                  <UploadCloud className="mx-auto h-6 w-6 text-accent" />
                  <p className="mt-2 text-[13px] font-semibold text-primary">{d}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{i < 2 ? "ktp-fajar.jpg · terunggah" : "JPG/PNG maks 5 MB"}</p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={() => toast.success("Dokumen terunggah (mockup)")}>
                    {i < 2 ? "Ganti file" : "Pilih file"}
                  </Button>
                </div>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <F label="Tanggal kedatangan"><Input type="date" defaultValue="2026-09-01" /></F>
              <F label="Perkiraan jam tiba"><Input type="time" defaultValue="14:00" /></F>
              <div className="sm:col-span-2 space-y-3 text-[13px] text-muted-foreground">
                {["Saya membaca dan menyetujui tata tertib penghuni.", "Saya bersedia mengikuti briefing singkat saat kedatangan.", "Data yang saya isi benar dan dapat dipertanggungjawabkan."].map((t) => (
                  <label key={t} className="flex cursor-pointer items-start gap-2.5"><Checkbox defaultChecked className="mt-0.5" />{t}</label>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-primary">Check-in selesai</h2>
              <p className="mt-2 text-sm text-muted-foreground">Kode akses kamar akan aktif pada 1 September 2026 pukul 12.00 WIB.</p>
              <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-xl bg-secondary px-6 py-4">
                <KeyRound className="h-5 w-5 text-accent" />
                <span className="font-display text-xl font-extrabold tracking-[0.3em] text-primary">4 7 2 9</span>
              </div>
              <Button asChild variant="cta" className="mt-7"><Link to="/tenant">Buka Portal Penghuni</Link></Button>
            </div>
          )}

          {step < 3 && (
            <div className="mt-8 flex justify-between border-t border-border pt-6">
              <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Kembali</Button>
              <Button variant="cta" onClick={() => setStep((s) => s + 1)}>{step === 2 ? "Selesaikan check-in" : "Lanjut"}</Button>
            </div>
          )}
        </Card>
      </div>
    </PublicLayout>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><Label className="text-[13px] text-muted-foreground">{label}</Label><div className="mt-1.5">{children}</div></div>;
}

export default Checkin;
