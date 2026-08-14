export const brand = {
  name: "Exc Kost",
  full: "Exc Kost Cisauk BSD",
  tagline: "Kos modern, nyaman, dan terawat di Cibogo — Cisauk, BSD.",
  address: "Jl. Cibogo Raya No. 21, Cibogo, Cisauk, Kabupaten Tangerang, Banten 15341",
  phone: "+62 812-9045-7781",
  email: "halo@exckost.id",
  hours: "Setiap hari, 08.00 – 21.00 WIB",
};

export const img = {
  hero: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
  building: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  facade: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  lounge: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  kitchen: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
  laundry: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80",
  workspace: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  parking: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80",
  rooftop: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  corridor: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  garden: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80",
  neighborhood: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
  station: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80",
  room1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  room2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
  room3: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
  room4: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
  room5: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
  room6: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
  desk: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
};

export const rupiah = (n: number) =>
  "Rp" + n.toLocaleString("id-ID", { maximumFractionDigits: 0 });

export type Room = {
  id: string;
  code: string;
  name: string;
  type: "Standard" | "Deluxe" | "Premium" | "Studio";
  price: number;
  size: string;
  floor: number;
  capacity: number;
  status: "Tersedia" | "Terisi" | "Booked" | "Maintenance";
  availableFrom: string;
  cover: string;
  gallery: string[];
  facilities: string[];
  highlight: string;
  rating: number;
  reviews: number;
  description: string;
};

const baseFac = ["Kasur + kasur busa premium", "Lemari & meja kerja", "AC 1 PK", "Wi-Fi 100 Mbps", "Kamar mandi dalam"];

export const rooms: Room[] = [
  {
    id: "std-a1", code: "A-101", name: "Standard Warm A", type: "Standard", price: 1400000, size: "3 x 3 m", floor: 1, capacity: 1,
    status: "Tersedia", availableFrom: "Segera", cover: img.room1, gallery: [img.room1, img.desk, img.bathroom, img.corridor],
    facilities: [...baseFac, "Jendela ke taman"], highlight: "Paling ekonomis", rating: 4.7, reviews: 38,
    description: "Kamar hangat dengan pencahayaan alami, cocok untuk pekerja muda yang butuh hunian rapi dan efisien dekat Stasiun Cisauk.",
  },
  {
    id: "std-a2", code: "A-104", name: "Standard Warm B", type: "Standard", price: 1550000, size: "3 x 3.5 m", floor: 1, capacity: 1,
    status: "Booked", availableFrom: "1 Okt 2026", cover: img.room2, gallery: [img.room2, img.room1, img.bathroom],
    facilities: [...baseFac, "Rak dinding"], highlight: "Dekat pantry", rating: 4.6, reviews: 24,
    description: "Tipe standard dengan ruang simpan ekstra dan akses cepat ke pantry bersama lantai satu.",
  },
  {
    id: "dlx-b1", code: "B-203", name: "Deluxe Sage", type: "Deluxe", price: 1750000, size: "3.5 x 4 m", floor: 2, capacity: 1,
    status: "Tersedia", availableFrom: "Segera", cover: img.room3, gallery: [img.room3, img.desk, img.bathroom, img.lounge],
    facilities: [...baseFac, "Water heater", "Balkon kecil"], highlight: "Terfavorit", rating: 4.9, reviews: 61,
    description: "Kamar lega dengan water heater dan balkon kecil menghadap area hijau. Pilihan favorit penghuni jangka panjang.",
  },
  {
    id: "dlx-b2", code: "B-206", name: "Deluxe Terracotta", type: "Deluxe", price: 1850000, size: "3.5 x 4 m", floor: 2, capacity: 2,
    status: "Terisi", availableFrom: "12 Des 2026", cover: img.room4, gallery: [img.room4, img.room3, img.bathroom],
    facilities: [...baseFac, "Water heater", "TV 32 inci"], highlight: "Bisa 2 orang", rating: 4.8, reviews: 33,
    description: "Deluxe dengan kapasitas dua orang, cocok untuk pasangan muda atau saudara yang tinggal bersama.",
  },
  {
    id: "prm-c1", code: "C-301", name: "Premium Forest View", type: "Premium", price: 2050000, size: "4 x 4.5 m", floor: 3, capacity: 2,
    status: "Tersedia", availableFrom: "Segera", cover: img.room5, gallery: [img.room5, img.rooftop, img.bathroom, img.workspace],
    facilities: [...baseFac, "Water heater", "Smart TV", "Sofa & coffee table"], highlight: "View terbaik", rating: 4.9, reviews: 47,
    description: "Kamar premium sudut dengan jendela besar, area duduk, dan akses langsung ke rooftop lounge.",
  },
  {
    id: "stu-c2", code: "C-305", name: "Studio Exc Kost", type: "Studio", price: 2200000, size: "4.5 x 5 m", floor: 3, capacity: 2,
    status: "Tersedia", availableFrom: "20 Sep 2026", cover: img.room6, gallery: [img.room6, img.kitchen, img.bathroom, img.rooftop],
    facilities: [...baseFac, "Water heater", "Mini kitchen", "Kulkas", "Smart TV"], highlight: "Unit terlengkap", rating: 5.0, reviews: 19,
    description: "Unit studio terlengkap dengan mini kitchen dan kulkas pribadi. Hunian paling mandiri di Exc Kost.",
  },
];

export const facilities = [
  { icon: "Wifi", title: "Wi-Fi 100 Mbps", desc: "Fiber optic stabil di seluruh area, cocok untuk WFH dan meeting online." },
  { icon: "Wind", title: "AC di setiap kamar", desc: "AC 1 PK dengan servis rutin tiap 3 bulan." },
  { icon: "ShowerHead", title: "Kamar mandi dalam", desc: "Shower, closet duduk, dan water heater di tipe Deluxe ke atas." },
  { icon: "WashingMachine", title: "Laundry area", desc: "Mesin cuci dan area jemur atap dengan jadwal terkelola." },
  { icon: "CookingPot", title: "Pantry bersama", desc: "Kompor, microwave, dispenser, dan kulkas komunal per lantai." },
  { icon: "Sofa", title: "Common lounge", desc: "Ruang santai dan co-working kecil dengan colokan di tiap kursi." },
  { icon: "Bike", title: "Parkir motor & mobil", desc: "Parkir tertutup, 24 slot motor dan 6 slot mobil." },
  { icon: "ShieldCheck", title: "CCTV & akses kartu", desc: "Keamanan 24 jam dengan CCTV 12 titik dan akses kartu." },
  { icon: "Sparkles", title: "Housekeeping", desc: "Pembersihan area umum harian, kamar 2x sebulan." },
  { icon: "Droplets", title: "Air & listrik", desc: "Token listrik per kamar, air tanah tersaring." },
  { icon: "Trees", title: "Taman & rooftop", desc: "Taman depan dan rooftop lounge untuk sore hari." },
  { icon: "PackageCheck", title: "Titip paket", desc: "Loker paket di lobi, aman ditinggal saat kerja." },
];

export const gallery = [
  { src: img.facade, cat: "Bangunan", caption: "Fasad Exc Kost" },
  { src: img.room3, cat: "Kamar", caption: "Deluxe Sage" },
  { src: img.lounge, cat: "Common Area", caption: "Common lounge lantai 1" },
  { src: img.kitchen, cat: "Common Area", caption: "Pantry bersama" },
  { src: img.room5, cat: "Kamar", caption: "Premium Forest View" },
  { src: img.corridor, cat: "Bangunan", caption: "Koridor lantai 2" },
  { src: img.laundry, cat: "Fasilitas", caption: "Laundry area" },
  { src: img.rooftop, cat: "Common Area", caption: "Rooftop sore hari" },
  { src: img.bathroom, cat: "Kamar", caption: "Kamar mandi dalam" },
  { src: img.parking, cat: "Fasilitas", caption: "Area parkir tertutup" },
  { src: img.garden, cat: "Lingkungan", caption: "Taman depan" },
  { src: img.station, cat: "Lingkungan", caption: "Stasiun Cisauk, 7 menit" },
];

export const nearby = [
  { name: "Stasiun Cisauk", dist: "1,2 km", time: "5 menit motor" },
  { name: "Intermoda BSD", dist: "1,4 km", time: "6 menit motor" },
  { name: "AEON Mall BSD", dist: "4,8 km", time: "12 menit" },
  { name: "The Breeze BSD", dist: "5,6 km", time: "14 menit" },
  { name: "Digital Hub BSD", dist: "5,1 km", time: "13 menit" },
  { name: "Pasar Modern Intermoda", dist: "1,5 km", time: "6 menit" },
  { name: "Eka Hospital BSD", dist: "7,2 km", time: "18 menit" },
  { name: "Indomaret Cibogo", dist: "220 m", time: "3 menit jalan" },
];

export const testimonials = [
  { name: "Pratiwi", role: "UI Designer, Digital Hub", text: "Lokasinya juara. Tinggal 5 menit ke Stasiun Cisauk, jadi commuting ke Jakarta gampang. Kamarnya bersih dan pengelolanya responsif.", avatar: "https://i.pravatar.cc/120?img=47", rating: 5 },
  { name: "Bagas Nugroho", role: "Software Engineer", text: "Wi-Fi stabil buat WFH, dan lounge-nya enak dipakai kerja kalau bosan di kamar. Sudah 1,5 tahun di sini.", avatar: "https://i.pravatar.cc/120?img=12", rating: 5 },
  { name: "Siti Maharani", role: "Marketing Associate", text: "Yang paling saya suka: pembayaran dan laporan kerusakan semua lewat portal. Nggak perlu chat berkali-kali.", avatar: "https://i.pravatar.cc/120?img=32", rating: 4 },
];

export const faqs = [
  { q: "Berapa minimum masa sewa di Exc Kost?", a: "Minimum sewa adalah 3 bulan untuk semua tipe kamar. Tersedia diskon 5% untuk kontrak 6 bulan dan 10% untuk 12 bulan." },
  { q: "Apakah harga sudah termasuk listrik dan air?", a: "Harga sudah termasuk air, kebersihan area umum, Wi-Fi, dan iuran keamanan. Listrik menggunakan token per kamar dengan rata-rata Rp150.000–250.000 per bulan." },
  { q: "Apakah bisa survey dulu sebelum booking?", a: "Bisa. Ajukan jadwal survey lewat halaman Ajukan Survey, pilih tanggal dan jam, lalu tim kami mengonfirmasi maksimal 1x24 jam." },
  { q: "Berapa deposit yang harus dibayar?", a: "Deposit sebesar 1 bulan sewa, dikembalikan penuh saat check-out bila tidak ada kerusakan di luar kewajaran." },
  { q: "Apakah menerima pasangan suami istri?", a: "Menerima, khusus tipe Deluxe kapasitas 2 dan Studio, dengan menyertakan dokumen pendukung saat check-in online." },
  { q: "Bagaimana aturan tamu?", a: "Tamu diperbolehkan sampai pukul 22.00 WIB dan wajib didaftarkan lewat menu Visitor di portal penghuni. Menginap perlu izin pengelola." },
  { q: "Apakah boleh membawa hewan peliharaan?", a: "Untuk kenyamanan bersama, hewan peliharaan belum diizinkan di area indoor Exc Kost." },
  { q: "Metode pembayaran apa saja yang tersedia?", a: "Transfer bank (BCA, Mandiri, BNI), QRIS, dan virtual account. Semua tagihan muncul otomatis di portal penghuni." },
];

export const whyExcKost = [
  { title: "5 menit ke Stasiun Cisauk", desc: "Commuter line ke Tanah Abang dan akses cepat Intermoda BSD.", icon: "TrainFront" },
  { title: "Dikelola profesional", desc: "Tim on-site, SOP kebersihan, dan portal penghuni digital.", icon: "BadgeCheck" },
  { title: "Harga transparan", desc: "Tanpa biaya tersembunyi. Semua tagihan tercatat rapi.", icon: "ReceiptText" },
  { title: "Komunitas nyaman", desc: "Penghuni profesional muda, lingkungan tenang dan aman.", icon: "Users" },
];

export const stats = [
  { label: "Kamar", value: "32" },
  { label: "Okupansi", value: "94%" },
  { label: "Rating penghuni", value: "4,8/5" },
  { label: "Tahun beroperasi", value: "6" },
];

/* ---------------- Tenant dummy ---------------- */

export const tenant = {
  name: "Pratiwi",
  email: "demo@mail.com",
  phone: "+62 813-2211-9087",
  avatar: "https://i.pravatar.cc/120?img=47",
  room: rooms[2],
  contractNo: "EXC/CTR/2026/0142",
  startDate: "1 Feb 2026",
  endDate: "31 Jan 2027",
  deposit: 1750000,
  occupation: "UI Designer — Digital Hub BSD",
  emergency: "Ibu Wati (Ibu) — +62 812-7788-1122",
};

export const tenantBills = [
  { id: "INV-2026-0812", period: "Agustus 2026", due: "5 Agu 2026", amount: 1750000, extra: 186000, status: "Belum dibayar" },
  { id: "INV-2026-0712", period: "Juli 2026", due: "5 Jul 2026", amount: 1750000, extra: 172000, status: "Lunas" },
  { id: "INV-2026-0612", period: "Juni 2026", due: "5 Jun 2026", amount: 1750000, extra: 164000, status: "Lunas" },
  { id: "INV-2026-0512", period: "Mei 2026", due: "5 Mei 2026", amount: 1750000, extra: 158000, status: "Lunas" },
  { id: "INV-2026-0412", period: "April 2026", due: "5 Apr 2026", amount: 1750000, extra: 149000, status: "Lunas" },
];

export const tenantPayments = [
  { id: "PAY-90231", date: "3 Jul 2026", method: "BCA Virtual Account", amount: 1922000, invoice: "INV-2026-0712", status: "Berhasil" },
  { id: "PAY-88104", date: "4 Jun 2026", method: "QRIS", amount: 1914000, invoice: "INV-2026-0612", status: "Berhasil" },
  { id: "PAY-86550", date: "2 Mei 2026", method: "Transfer Mandiri", amount: 1908000, invoice: "INV-2026-0512", status: "Berhasil" },
  { id: "PAY-84221", date: "5 Apr 2026", method: "BCA Virtual Account", amount: 1899000, invoice: "INV-2026-0412", status: "Berhasil" },
];

export const tenantTickets = [
  { id: "MTC-1187", title: "AC kurang dingin", cat: "Elektronik", created: "8 Agu 2026", status: "Diproses", tech: "Pak Yusuf", priority: "Sedang" },
  { id: "MTC-1102", title: "Keran wastafel menetes", cat: "Plumbing", created: "21 Jul 2026", status: "Selesai", tech: "Pak Dedi", priority: "Rendah" },
  { id: "MTC-1043", title: "Lampu koridor mati", cat: "Listrik", created: "2 Jul 2026", status: "Selesai", tech: "Pak Yusuf", priority: "Rendah" },
];

export const announcements = [
  { title: "Pemeliharaan pompa air", date: "12 Agu 2026", body: "Air akan mati sementara pukul 10.00–12.00 WIB untuk penggantian pompa lantai 3." },
  { title: "Jadwal fogging bulanan", date: "18 Agu 2026", body: "Fogging dilakukan di seluruh area luar. Mohon tutup jendela pukul 16.00–17.00." },
  { title: "Promo perpanjangan kontrak", date: "1 Agu 2026", body: "Perpanjang 6 bulan sebelum 30 September dan dapatkan potongan Rp250.000." },
];

export const tenantActivity = [
  { text: "Tagihan Agustus 2026 diterbitkan", time: "2 hari lalu" },
  { text: "Tiket MTC-1187 diperbarui ke status Diproses", time: "3 hari lalu" },
  { text: "Tamu ‘Dinda Kirana’ tercatat check-out 20.40", time: "5 hari lalu" },
  { text: "Pembayaran INV-2026-0712 berhasil", time: "1 bulan lalu" },
];

export const visitors = [
  { name: "Dinda Kirana", rel: "Teman", date: "8 Agu 2026", in: "18.20", out: "20.40", status: "Selesai" },
  { name: "Bapak Hendra", rel: "Keluarga", date: "27 Jul 2026", in: "13.00", out: "16.10", status: "Selesai" },
  { name: "Kurir Shopee", rel: "Kurir", date: "25 Jul 2026", in: "11.05", out: "11.12", status: "Selesai" },
];

/* ---------------- Admin dummy ---------------- */

export const adminKpis = [
  { label: "Okupansi", value: "94%", delta: "+3,2%", trend: "up", sub: "30 dari 32 kamar terisi" },
  { label: "Pendapatan bulan ini", value: rupiah(56400000), delta: "+8,1%", trend: "up", sub: "Target " + rupiah(60000000) },
  { label: "Kamar kosong", value: "2", delta: "-1", trend: "down", sub: "A-101, C-301" },
  { label: "Tagihan overdue", value: rupiah(3620000), delta: "2 tagihan", trend: "down", sub: "Lewat jatuh tempo >7 hari" },
];

export const revenueSeries = [
  { month: "Feb", revenue: 48200000, target: 52000000 },
  { month: "Mar", revenue: 50100000, target: 53000000 },
  { month: "Apr", revenue: 51800000, target: 54000000 },
  { month: "Mei", revenue: 52600000, target: 55000000 },
  { month: "Jun", revenue: 54300000, target: 57000000 },
  { month: "Jul", revenue: 52900000, target: 58000000 },
  { month: "Agu", revenue: 56400000, target: 60000000 },
];

export const occupancySeries = [
  { month: "Feb", occ: 86 }, { month: "Mar", occ: 88 }, { month: "Apr", occ: 91 },
  { month: "Mei", occ: 89 }, { month: "Jun", occ: 92 }, { month: "Jul", occ: 91 }, { month: "Agu", occ: 94 },
];

export const roomTypeMix = [
  { name: "Standard", value: 12 },
  { name: "Deluxe", value: 11 },
  { name: "Premium", value: 6 },
  { name: "Studio", value: 3 },
];

export const leads = [
  { id: "LEAD-2211", name: "Fajar Ramadhan", channel: "Instagram Ads", interest: "Deluxe", budget: 1800000, stage: "Survey terjadwal", owner: "Nadia", updated: "12 Agu 2026", phone: "+62 811-2233-4455" },
  { id: "LEAD-2210", name: "Putri Larasati", channel: "Google Search", interest: "Studio", budget: 2200000, stage: "Negosiasi", owner: "Rio", updated: "12 Agu 2026", phone: "+62 812-9876-1122" },
  { id: "LEAD-2209", name: "Andi Setiawan", channel: "Walk-in", interest: "Standard", budget: 1500000, stage: "Baru", owner: "Nadia", updated: "11 Agu 2026", phone: "+62 856-3311-9080" },
  { id: "LEAD-2208", name: "Melia Kusuma", channel: "Mamikos", interest: "Deluxe", budget: 1750000, stage: "Booking", owner: "Rio", updated: "10 Agu 2026", phone: "+62 878-1200-5566" },
  { id: "LEAD-2207", name: "Yoga Pratama", channel: "Referral", interest: "Premium", budget: 2050000, stage: "Survey selesai", owner: "Nadia", updated: "9 Agu 2026", phone: "+62 813-4455-7788" },
  { id: "LEAD-2206", name: "Cindy Halim", channel: "TikTok", interest: "Standard", budget: 1400000, stage: "Hilang", owner: "Rio", updated: "7 Agu 2026", phone: "+62 819-2211-3344" },
];

export const surveys = [
  { id: "SRV-0451", name: "Fajar Ramadhan", date: "14 Agu 2026", time: "10.00", room: "Deluxe Sage", status: "Terkonfirmasi", pic: "Nadia", note: "Datang bersama orang tua" },
  { id: "SRV-0450", name: "Melia Kusuma", date: "13 Agu 2026", time: "16.30", room: "Deluxe Terracotta", status: "Selesai", pic: "Rio", note: "Tertarik kontrak 12 bulan" },
  { id: "SRV-0449", name: "Yoga Pratama", date: "12 Agu 2026", time: "09.30", room: "Premium Forest View", status: "Selesai", pic: "Nadia", note: "Minta penawaran tertulis" },
  { id: "SRV-0448", name: "Andi Setiawan", date: "15 Agu 2026", time: "13.00", room: "Standard Warm A", status: "Menunggu", pic: "—", note: "Perlu konfirmasi jadwal" },
  { id: "SRV-0447", name: "Cindy Halim", date: "9 Agu 2026", time: "11.00", room: "Standard Warm A", status: "Batal", pic: "Rio", note: "Pindah ke area Serpong" },
];

export const bookings = [
  { id: "BK-3021", name: "Melia Kusuma", room: "B-206", type: "Deluxe", start: "1 Sep 2026", duration: "6 bulan", total: 11100000, paid: 1850000, status: "DP dibayar" },
  { id: "BK-3020", name: "Fajar Ramadhan", room: "B-203", type: "Deluxe", start: "20 Agu 2026", duration: "12 bulan", total: 21000000, paid: 21000000, status: "Lunas" },
  { id: "BK-3019", name: "Yoga Pratama", room: "C-301", type: "Premium", start: "1 Sep 2026", duration: "3 bulan", total: 6150000, paid: 0, status: "Menunggu bayar" },
  { id: "BK-3018", name: "Andi Setiawan", room: "A-101", type: "Standard", start: "25 Agu 2026", duration: "6 bulan", total: 8400000, paid: 1400000, status: "DP dibayar" },
  { id: "BK-3017", name: "Putri Larasati", room: "C-305", type: "Studio", start: "20 Sep 2026", duration: "12 bulan", total: 26400000, paid: 0, status: "Dibatalkan" },
];

export const tenants = [
  { id: "TN-0142", name: "Pratiwi", room: "B-203", start: "1 Feb 2026", end: "31 Jan 2027", status: "Aktif", billing: "Lancar", phone: "+62 813-2211-9087" },
  { id: "TN-0141", name: "Bagas Nugroho", room: "C-301", start: "5 Jan 2026", end: "4 Jan 2027", status: "Aktif", billing: "Lancar", phone: "+62 812-4455-1290" },
  { id: "TN-0138", name: "Siti Maharani", room: "A-104", start: "12 Nov 2025", end: "11 Nov 2026", status: "Aktif", billing: "Overdue", phone: "+62 878-9911-2200" },
  { id: "TN-0134", name: "Dimas Aryo", room: "B-206", start: "1 Okt 2025", end: "30 Sep 2026", status: "Akan habis", billing: "Lancar", phone: "+62 856-1122-7788" },
  { id: "TN-0129", name: "Nabila Zahra", room: "C-305", start: "1 Agu 2025", end: "31 Jul 2026", status: "Check-out", billing: "Selesai", phone: "+62 819-3344-1100" },
  { id: "TN-0125", name: "Rizky Maulana", room: "A-107", start: "1 Jul 2025", end: "30 Jun 2027", status: "Aktif", billing: "Overdue", phone: "+62 811-7788-9911" },
];

export const invoices = [
  { id: "INV-2026-0812", tenant: "Pratiwi", room: "B-203", period: "Agu 2026", due: "5 Agu 2026", amount: 1936000, status: "Belum dibayar" },
  { id: "INV-2026-0811", tenant: "Siti Maharani", room: "A-104", period: "Agu 2026", due: "5 Agu 2026", amount: 1712000, status: "Overdue" },
  { id: "INV-2026-0810", tenant: "Bagas Nugroho", room: "C-301", period: "Agu 2026", due: "5 Agu 2026", amount: 2244000, status: "Lunas" },
  { id: "INV-2026-0809", tenant: "Dimas Aryo", room: "B-206", period: "Agu 2026", due: "5 Agu 2026", amount: 2018000, status: "Lunas" },
  { id: "INV-2026-0808", tenant: "Rizky Maulana", room: "A-107", period: "Agu 2026", due: "5 Agu 2026", amount: 1908000, status: "Overdue" },
  { id: "INV-2026-0807", tenant: "Nabila Zahra", room: "C-305", period: "Jul 2026", due: "5 Jul 2026", amount: 2388000, status: "Lunas" },
];

export const paymentsAdmin = [
  { id: "PAY-90231", tenant: "Pratiwi", date: "3 Jul 2026", method: "BCA VA", amount: 1922000, ref: "8801 2244 9087", status: "Berhasil" },
  { id: "PAY-90244", tenant: "Bagas Nugroho", date: "4 Agu 2026", method: "QRIS", amount: 2244000, ref: "QR-778120", status: "Berhasil" },
  { id: "PAY-90250", tenant: "Dimas Aryo", date: "5 Agu 2026", method: "Transfer Mandiri", amount: 2018000, ref: "TRF-991002", status: "Menunggu verifikasi" },
  { id: "PAY-90255", tenant: "Melia Kusuma", date: "10 Agu 2026", method: "BCA VA", amount: 1850000, ref: "8801 5566 1122", status: "Berhasil" },
  { id: "PAY-90260", tenant: "Rizky Maulana", date: "11 Agu 2026", method: "QRIS", amount: 500000, ref: "QR-778455", status: "Gagal" },
];

export const deposits = [
  { id: "DEP-0142", tenant: "Pratiwi", room: "B-203", amount: 1750000, held: "1 Feb 2026", status: "Ditahan" },
  { id: "DEP-0141", tenant: "Bagas Nugroho", room: "C-301", amount: 2050000, held: "5 Jan 2026", status: "Ditahan" },
  { id: "DEP-0129", tenant: "Nabila Zahra", room: "C-305", amount: 2200000, held: "1 Agu 2025", status: "Dikembalikan" },
  { id: "DEP-0134", tenant: "Dimas Aryo", room: "B-206", amount: 1850000, held: "1 Okt 2025", status: "Potongan Rp150.000" },
];

export const movements = [
  { id: "MV-0512", type: "Check-in", name: "Fajar Ramadhan", room: "B-203", date: "20 Agu 2026", status: "Terjadwal" },
  { id: "MV-0511", type: "Check-out", name: "Dimas Aryo", room: "B-206", date: "30 Sep 2026", status: "Terjadwal" },
  { id: "MV-0509", type: "Check-in", name: "Andi Setiawan", room: "A-101", date: "25 Agu 2026", status: "Dokumen kurang" },
  { id: "MV-0505", type: "Check-out", name: "Nabila Zahra", room: "C-305", date: "31 Jul 2026", status: "Selesai" },
];

export const maintenanceAdmin = [
  { id: "MTC-1187", room: "B-203", title: "AC kurang dingin", cat: "Elektronik", priority: "Sedang", tech: "Pak Yusuf", created: "8 Agu 2026", status: "Diproses" },
  { id: "MTC-1190", room: "A-104", title: "Pintu kamar mandi seret", cat: "Bangunan", priority: "Rendah", tech: "Pak Dedi", created: "10 Agu 2026", status: "Antrian" },
  { id: "MTC-1191", room: "C-305", title: "Water heater tidak menyala", cat: "Elektronik", priority: "Tinggi", tech: "Pak Yusuf", created: "11 Agu 2026", status: "Diproses" },
  { id: "MTC-1102", room: "B-203", title: "Keran wastafel menetes", cat: "Plumbing", priority: "Rendah", tech: "Pak Dedi", created: "21 Jul 2026", status: "Selesai" },
];

export const complaintsAdmin = [
  { id: "CMP-0231", tenant: "Siti Maharani", topic: "Kebisingan malam hari", severity: "Sedang", created: "9 Agu 2026", status: "Ditindaklanjuti" },
  { id: "CMP-0230", tenant: "Bagas Nugroho", topic: "Parkir motor penuh", severity: "Rendah", created: "6 Agu 2026", status: "Selesai" },
  { id: "CMP-0229", tenant: "Pratiwi", topic: "Paket tertukar di loker", severity: "Rendah", created: "2 Agu 2026", status: "Selesai" },
];

export const housekeeping = [
  { area: "Lobi & koridor L1", staff: "Ibu Nur", schedule: "Harian 07.00", last: "13 Agu 2026", status: "Selesai" },
  { area: "Pantry L2", staff: "Ibu Nur", schedule: "Harian 08.00", last: "13 Agu 2026", status: "Selesai" },
  { area: "Rooftop", staff: "Pak Dedi", schedule: "2x seminggu", last: "11 Agu 2026", status: "Terjadwal" },
  { area: "Kamar B-206 (deep clean)", staff: "Tim Vendor", schedule: "Bulanan", last: "30 Jul 2026", status: "Terlambat" },
];

export const promos = [
  { code: "EXC12", name: "Diskon kontrak 12 bulan", value: "10%", period: "1 Jul – 30 Sep 2026", used: 14, status: "Aktif" },
  { code: "SURVEYNOW", name: "Potongan survey to booking", value: "Rp250.000", period: "1 Agu – 31 Agu 2026", used: 6, status: "Aktif" },
  { code: "REFER50", name: "Referral penghuni", value: "Rp500.000", period: "Sepanjang tahun", used: 9, status: "Aktif" },
  { code: "NEWYEAR26", name: "Promo awal tahun", value: "5%", period: "1 Jan – 28 Feb 2026", used: 21, status: "Berakhir" },
];

export const contents = [
  { title: "Hero — Home", type: "Section", updated: "10 Agu 2026", by: "Nadia", status: "Publish" },
  { title: "Artikel: Tips memilih kos dekat BSD", type: "Blog", updated: "8 Agu 2026", by: "Rio", status: "Draft" },
  { title: "Galeri Agustus 2026", type: "Gallery", updated: "5 Agu 2026", by: "Nadia", status: "Publish" },
  { title: "FAQ pembayaran", type: "FAQ", updated: "1 Agu 2026", by: "Admin", status: "Publish" },
];

export const notifications = [
  { title: "Reminder tagihan H-3", channel: "WhatsApp", audience: "Semua penghuni", schedule: "Tiap tanggal 2", status: "Aktif" },
  { title: "Konfirmasi survey", channel: "Email", audience: "Lead terjadwal", schedule: "Otomatis", status: "Aktif" },
  { title: "Pengumuman pemeliharaan", channel: "Push portal", audience: "Lantai 3", schedule: "12 Agu 2026", status: "Terkirim" },
  { title: "Promo perpanjangan", channel: "WhatsApp", audience: "Kontrak <60 hari", schedule: "15 Agu 2026", status: "Terjadwal" },
];

export const users = [
  { name: "Nadia Prameswari", email: "nadia@exckost.id", role: "Manager", last: "13 Agu 2026 09.12", status: "Aktif" },
  { name: "Rio Ardiansyah", email: "rio@exckost.id", role: "Sales / CRM", last: "13 Agu 2026 08.40", status: "Aktif" },
  { name: "Pak Yusuf", email: "yusuf@exckost.id", role: "Teknisi", last: "12 Agu 2026 17.05", status: "Aktif" },
  { name: "Ibu Nur", email: "nur@exckost.id", role: "Housekeeping", last: "13 Agu 2026 07.10", status: "Aktif" },
  { name: "Owner Exc Kost", email: "owner@exckost.id", role: "Super Admin", last: "11 Agu 2026 21.30", status: "Aktif" },
];

export const auditLog = [
  { time: "13 Agu 2026 09.22", user: "Nadia", action: "Mengubah status booking BK-3020 menjadi Lunas", ip: "103.22.14.8" },
  { time: "13 Agu 2026 08.51", user: "Rio", action: "Menambahkan lead LEAD-2211", ip: "103.22.14.11" },
  { time: "12 Agu 2026 17.10", user: "Pak Yusuf", action: "Menutup tiket MTC-1102", ip: "103.22.14.30" },
  { time: "12 Agu 2026 14.02", user: "Owner Exc Kost", action: "Memperbarui harga Room Type Premium", ip: "180.244.9.71" },
  { time: "11 Agu 2026 10.44", user: "Nadia", action: "Mengirim notifikasi pemeliharaan ke lantai 3", ip: "103.22.14.8" },
];

export const properties = [
  { name: "Exc Kost Cisauk", address: "Jl. Cibogo Raya No. 21, Cisauk", rooms: 32, occ: "94%", status: "Aktif", cover: img.facade },
  { name: "Exc Kost Annex (rencana)", address: "Jl. Cibogo Raya No. 25, Cisauk", rooms: 14, occ: "—", status: "Pembangunan", cover: img.building },
];

export const roomTypes = [
  { name: "Standard", price: 1400000, size: "3 x 3 m", units: 12, occupied: 11, facilities: "AC, Wi-Fi, KM dalam" },
  { name: "Deluxe", price: 1750000, size: "3.5 x 4 m", units: 11, occupied: 10, facilities: "AC, Wi-Fi, KM dalam, Water heater" },
  { name: "Premium", price: 2050000, size: "4 x 4.5 m", units: 6, occupied: 6, facilities: "+ Smart TV, Sofa" },
  { name: "Studio", price: 2200000, size: "4.5 x 5 m", units: 3, occupied: 3, facilities: "+ Mini kitchen, Kulkas" },
];

export const roomUnits = Array.from({ length: 32 }, (_, i) => {
  const floor = Math.floor(i / 11) + 1;
  const block = ["A", "B", "C"][floor - 1];
  const num = (i % 11) + 1;
  const type = roomTypes[i % 4].name;
  const statuses = ["Terisi", "Terisi", "Terisi", "Tersedia", "Terisi", "Maintenance", "Terisi", "Booked"];
  return {
    code: `${block}-${floor}${String(num).padStart(2, "0")}`,
    type,
    floor,
    price: roomTypes[i % 4].price,
    status: statuses[i % statuses.length],
    tenant: statuses[i % statuses.length] === "Terisi" ? tenants[i % tenants.length].name : "—",
  };
});
