import { Link } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { rupiah } from "@/data/exc-kost";
import { Copy, CheckCircle2, Clock, Landmark, QrCode, Wallet } from "lucide-react";
import { toast } from "sonner";

const methods = [
  { id: "va", label: "BCA Virtual Account", icon: Landmark, desc: "Otomatis terverifikasi" },
  { id: "qris", label: "QRIS", icon: QrCode, desc: "Semua e-wallet & mobile banking" },
  { id: "transfer", label: "Transfer Manual", icon: Wallet, desc: "Verifikasi maksimal 1x24 jam" },
];

function Payment() {
  const [method, setMethod] = useState("va");
  const [paid, setPaid] = useState(false);
  const total = 3512500;

  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-display text-4xl font-extrabold text-primary">Pembayaran</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">Booking <b className="text-foreground">BK-3022</b> · Deluxe Sage (B-203)</p>

        {!paid ? (
          <>
            <Card className="mt-8 rounded-2xl border-border p-6 shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-muted-foreground">Total tagihan</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/18 px-3 py-1 text-[11px] font-semibold text-warning-foreground">
                  <Clock className="h-3 w-3" />Bayar sebelum 23:59 WIB
                </span>
              </div>
              <p className="mt-2 font-display text-3xl font-extrabold text-primary">{rupiah(total)}</p>
            </Card>

            <div className="mt-6 space-y-3">
              {methods.map((m) => (
                <button key={m.id} onClick={() => setMethod(m.id)} className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${method === m.id ? "border-accent bg-accent/6" : "border-border bg-card hover:border-accent/40"}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-secondary text-primary"><m.icon className="h-5 w-5" /></span>
                  <span className="flex-1">
                    <span className="block font-display text-[15px] font-bold text-primary">{m.label}</span>
                    <span className="block text-[12px] text-muted-foreground">{m.desc}</span>
                  </span>
                  <span className={`h-4 w-4 rounded-full border-2 ${method === m.id ? "border-accent bg-accent" : "border-border"}`} />
                </button>
              ))}
            </div>

            <Card className="mt-6 rounded-2xl border-border p-6 shadow-none">
              {method === "va" && (
                <>
                  <p className="text-[13px] text-muted-foreground">Nomor Virtual Account</p>
                  <div className="mt-2 flex items-center justify-between rounded-[10px] bg-secondary px-4 py-3">
                    <span className="font-display text-lg font-extrabold tracking-wider text-primary">8801 3022 4455</span>
                    <Button variant="ghost" size="sm" onClick={() => toast.success("Nomor VA disalin")}><Copy className="h-3.5 w-3.5" />Salin</Button>
                  </div>
                </>
              )}
              {method === "qris" && (
                <div className="text-center">
                  <div className="mx-auto grid h-44 w-44 place-items-center rounded-xl border border-border bg-secondary">
                    <QrCode className="h-24 w-24 text-primary" />
                  </div>
                  <p className="mt-3 text-[13px] text-muted-foreground">Scan menggunakan aplikasi e-wallet atau m-banking.</p>
                </div>
              )}
              {method === "transfer" && (
                <div className="space-y-2 text-[14px]">
                  <p className="text-muted-foreground">Transfer ke rekening:</p>
                  <p className="font-display text-lg font-bold text-primary">BCA 500 123 4567</p>
                  <p className="text-muted-foreground">a.n. PT Exc Kost Hunian Nyaman</p>
                  <Button variant="outline" size="sm" className="mt-2">Unggah bukti transfer</Button>
                </div>
              )}
            </Card>

            <Button variant="cta" size="lg" className="mt-6 w-full" onClick={() => { setPaid(true); toast.success("Pembayaran berhasil disimulasikan"); }}>
              Saya sudah bayar (simulasi)
            </Button>
          </>
        ) : (
          <Card className="mt-8 rounded-2xl border-border p-10 text-center shadow-none">
            <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
            <h2 className="mt-5 font-display text-2xl font-extrabold text-primary">Pembayaran berhasil</h2>
            <p className="mt-2 text-sm text-muted-foreground">{rupiah(total)} · {methods.find((m) => m.id === method)?.label} · Ref PAY-90277</p>
            <p className="mt-1 text-sm text-muted-foreground">Kamar B-203 resmi menjadi milikmu mulai 1 September 2026.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cta"><Link to="/checkin">Lanjut Online Check-in</Link></Button>
              <Button asChild variant="outline"><Link to="/tenant">Buka Portal Penghuni</Link></Button>
            </div>
          </Card>
        )}
      </div>
    </PublicLayout>
  );
}

export default Payment;
