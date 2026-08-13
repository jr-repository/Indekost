import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { img } from "@/data/exc-kost";
import { ArrowLeft } from "lucide-react";

function Login() {
  const [role, setRole] = useState<"tenant" | "admin">("tenant");
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img src={img.corridor} alt="Koridor Exc Kost" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/72" />
        <div className="absolute inset-0 flex flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent font-display text-sm font-extrabold text-accent-foreground">E</span>
            <span className="font-display text-lg font-extrabold">Exc Kost</span>
          </Link>
          <div>
            <h2 className="max-w-sm font-display text-3xl font-extrabold">Semua urusan kos, dalam satu portal.</h2>
            <p className="mt-3 max-w-sm text-primary-foreground/75">Tagihan, maintenance, tamu, dan kontrak — semua tercatat rapi dan bisa diakses kapan saja.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" />Kembali ke website
          </Link>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger value="login">Masuk</TabsTrigger>
              <TabsTrigger value="register">Daftar</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="pt-8">
              <h1 className="font-display text-2xl font-extrabold text-primary">Selamat datang kembali</h1>
              <p className="mt-1.5 text-[13px] text-muted-foreground">Masuk sebagai penghuni atau pengelola.</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <Button variant={role === "tenant" ? "cta" : "outline"} onClick={() => setRole("tenant")}>Penghuni</Button>
                <Button variant={role === "admin" ? "cta" : "outline"} onClick={() => setRole("admin")}>Admin</Button>
              </div>
              <div className="mt-6 space-y-4">
                <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1.5" defaultValue={role === "tenant" ? "rani.ayu@mail.com" : "nadia@exckost.id"} /></div>
                <div><Label className="text-[13px] text-muted-foreground">Kata sandi</Label><Input className="mt-1.5" type="password" defaultValue="exckost2026" /></div>
              </div>
              <Button asChild variant="cta" size="lg" className="mt-6 w-full">
                <Link to={role === "tenant" ? "/tenant" : "/admin"}>Masuk ke {role === "tenant" ? "Portal Penghuni" : "Portal Admin"}</Link>
              </Button>
              <p className="mt-4 text-center text-[12px] text-muted-foreground">Mockup — kredensial apa pun akan diterima.</p>
            </TabsContent>
            <TabsContent value="register" className="pt-8">
              <h1 className="font-display text-2xl font-extrabold text-primary">Buat akun</h1>
              <p className="mt-1.5 text-[13px] text-muted-foreground">Daftar untuk booking dan mengelola sewa kamarmu.</p>
              <div className="mt-6 space-y-4">
                <div><Label className="text-[13px] text-muted-foreground">Nama lengkap</Label><Input className="mt-1.5" placeholder="Nama sesuai KTP" /></div>
                <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1.5" placeholder="nama@email.com" /></div>
                <div><Label className="text-[13px] text-muted-foreground">Nomor WhatsApp</Label><Input className="mt-1.5" placeholder="08xxxxxxxxxx" /></div>
                <div><Label className="text-[13px] text-muted-foreground">Kata sandi</Label><Input className="mt-1.5" type="password" placeholder="Minimal 8 karakter" /></div>
              </div>
              <Button asChild variant="cta" size="lg" className="mt-6 w-full"><Link to="/tenant">Daftar sekarang</Link></Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Login;
