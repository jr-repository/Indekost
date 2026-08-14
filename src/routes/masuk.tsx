import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { img } from "@/data/exc-kost";
import { ArrowLeft } from "lucide-react";

function Login() {
  const [role, setRole] = useState<"tenant" | "admin">("tenant");
  const paneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ scale: 1, width: 0, height: 0 });

  useLayoutEffect(() => {
    const pane = paneRef.current;
    const content = contentRef.current;
    if (!pane || !content) return;

    const updateFit = () => {
      const paneWidth = pane.clientWidth - 32;
      const paneHeight = pane.clientHeight - 24;
      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;

      if (!contentWidth || !contentHeight) return;

      const nextScale = Math.min(1, paneWidth / contentWidth, paneHeight / contentHeight);

      setFit({
        scale: nextScale,
        width: contentWidth * nextScale,
        height: contentHeight * nextScale,
      });
    };

    updateFit();

    const observer = new ResizeObserver(updateFit);
    observer.observe(pane);
    observer.observe(content);
    window.addEventListener("resize", updateFit);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFit);
    };
  }, []);

  return (
    <div className="grid h-[100dvh] overflow-hidden bg-background lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative hidden lg:block">
        <img
          src={img.corridor}
          alt="Koridor Exc Kost"
          className="h-full w-full object-cover object-[38%_center]"
        />
        <div className="absolute inset-0 bg-primary/72" />
        <div className="absolute inset-0 px-12 py-14 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent font-display text-sm font-extrabold text-accent-foreground">E</span>
            <span className="font-display text-lg font-extrabold">Exc Kost</span>
          </Link>
          <div className="absolute bottom-14 left-12 max-w-sm">
            <h2 className="max-w-sm font-display text-3xl font-extrabold">Semua urusan kos, dalam satu portal.</h2>
            <p className="mt-3 max-w-sm text-primary-foreground/75">Tagihan, maintenance, tamu, dan kontrak — semua tercatat rapi dan bisa diakses kapan saja.</p>
          </div>
        </div>
      </div>

      <div ref={paneRef} className="flex h-full items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
        <div
          className="flex items-center justify-center"
          style={{
            width: fit.width || undefined,
            height: fit.height || undefined,
          }}
        >
          <div
            ref={contentRef}
            className="w-[436px] max-w-[436px] origin-center"
            style={{
              transform: `scale(${fit.scale})`,
            }}
          >
            <Link to="/" className="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-accent sm:mb-4">
              <ArrowLeft className="h-3.5 w-3.5" />
              Kembali ke website
            </Link>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid h-9 w-full grid-cols-2 bg-secondary">
                <TabsTrigger value="login">Masuk</TabsTrigger>
                <TabsTrigger value="register">Daftar</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="pt-3 sm:pt-4">
                <h1 className="font-display text-[26px] font-extrabold leading-tight text-primary sm:text-[28px]">Selamat datang kembali</h1>
                <p className="mt-1 text-[13px] text-muted-foreground">Masuk sebagai penghuni atau pengelola.</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button variant={role === "tenant" ? "cta" : "outline"} className="h-9" onClick={() => setRole("tenant")}>Penghuni</Button>
                  <Button variant={role === "admin" ? "cta" : "outline"} className="h-9" onClick={() => setRole("admin")}>Admin</Button>
                </div>
                <div className="mt-3 space-y-2">
                  <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1 h-10" defaultValue={role === "tenant" ? "demo@mail.com" : "nadia@exckost.id"} /></div>
                  <div><Label className="text-[13px] text-muted-foreground">Kata sandi</Label><Input className="mt-1 h-10" type="password" defaultValue="exckost2026" /></div>
                </div>
                <Button asChild variant="cta" className="mt-3.5 h-10 w-full">
                  <Link to={role === "tenant" ? "/tenant" : "/admin"}>Masuk ke {role === "tenant" ? "Portal Penghuni" : "Portal Admin"}</Link>
                </Button>
                <p className="mt-2 text-center text-[12px] text-muted-foreground">Mockup — kredensial apa pun akan diterima.</p>
              </TabsContent>
              <TabsContent value="register" className="pt-3 sm:pt-4">
                <h1 className="font-display text-[26px] font-extrabold leading-tight text-primary sm:text-[28px]">Buat akun</h1>
                <p className="mt-1 text-[13px] text-muted-foreground">Daftar untuk booking dan mengelola sewa kamarmu.</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div><Label className="text-[13px] text-muted-foreground">Nama lengkap</Label><Input className="mt-1 h-10" placeholder="Nama sesuai KTP" /></div>
                  <div><Label className="text-[13px] text-muted-foreground">Email</Label><Input className="mt-1 h-10" placeholder="nama@email.com" /></div>
                  <div><Label className="text-[13px] text-muted-foreground">Nomor WhatsApp</Label><Input className="mt-1 h-10" placeholder="08xxxxxxxxxx" /></div>
                  <div><Label className="text-[13px] text-muted-foreground">Kata sandi</Label><Input className="mt-1 h-10" type="password" placeholder="Minimal 8 karakter" /></div>
                </div>
                <Button asChild variant="cta" className="mt-3.5 h-10 w-full"><Link to="/tenant">Daftar sekarang</Link></Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
