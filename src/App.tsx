import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { NotFoundPage } from "@/components/system/NotFoundPage";
import HomePage from "@/routes/index";
import RoomListPage from "@/routes/kamar.index";
import RoomDetailPage from "@/routes/kamar.$id";
import FacilitiesPage from "@/routes/fasilitas";
import GalleryPage from "@/routes/galeri";
import LocationPage from "@/routes/lokasi";
import AboutPage from "@/routes/tentang";
import FaqPage from "@/routes/faq";
import SurveyPage from "@/routes/survey";
import BookingPage from "@/routes/booking";
import PaymentPage from "@/routes/pembayaran";
import CheckinPage from "@/routes/checkin";
import LoginPage from "@/routes/masuk";
import TenantLayout from "@/routes/tenant";
import TenantOverviewPage from "@/routes/tenant.index";
import TenantRoomPage from "@/routes/tenant.kamar";
import TenantBillingPage from "@/routes/tenant.tagihan";
import TenantPaymentsPage from "@/routes/tenant.pembayaran";
import TenantContractPage from "@/routes/tenant.kontrak";
import TenantMaintenancePage from "@/routes/tenant.maintenance";
import TenantComplaintPage from "@/routes/tenant.komplain";
import TenantExtendPage from "@/routes/tenant.perpanjang";
import TenantMoveRoomPage from "@/routes/tenant.pindah-kamar";
import TenantCheckoutPage from "@/routes/tenant.checkout";
import TenantVisitorPage from "@/routes/tenant.tamu";
import TenantProfilePage from "@/routes/tenant.profil";
import TenantHelpPage from "@/routes/tenant.bantuan";
import AdminLayout from "@/routes/admin";
import AdminDashboardPage from "@/routes/admin.index";
import AdminPropertiesPage from "@/routes/admin.properti";
import AdminRoomTypesPage from "@/routes/admin.tipe-kamar";
import AdminRoomsPage from "@/routes/admin.kamar";
import AdminAvailabilityPage from "@/routes/admin.ketersediaan";
import AdminLeadsPage from "@/routes/admin.leads";
import AdminSurveyPage from "@/routes/admin.survey";
import AdminBookingsPage from "@/routes/admin.booking";
import AdminTenantsPage from "@/routes/admin.penghuni";
import AdminContractsPage from "@/routes/admin.kontrak";
import AdminBillingPage from "@/routes/admin.tagihan";
import AdminPaymentsPage from "@/routes/admin.pembayaran";
import AdminDepositsPage from "@/routes/admin.deposit";
import AdminCheckinCheckoutPage from "@/routes/admin.checkin-checkout";
import AdminMaintenancePage from "@/routes/admin.maintenance";
import AdminComplaintsPage from "@/routes/admin.komplain";
import AdminHousekeepingPage from "@/routes/admin.housekeeping";
import AdminPromoPage from "@/routes/admin.promo";
import AdminContentPage from "@/routes/admin.konten";
import AdminNotificationsPage from "@/routes/admin.notifikasi";
import AdminReportsPage from "@/routes/admin.laporan";
import AdminUsersPage from "@/routes/admin.pengguna";
import AdminSettingsPage from "@/routes/admin.pengaturan";
import AdminAuditLogPage from "@/routes/admin.audit-log";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, search]);

  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kamar" element={<RoomListPage />} />
        <Route path="/kamar/:id" element={<RoomDetailPage />} />
        <Route path="/fasilitas" element={<FacilitiesPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/lokasi" element={<LocationPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/pembayaran" element={<PaymentPage />} />
        <Route path="/checkin" element={<CheckinPage />} />
        <Route path="/masuk" element={<LoginPage />} />

        <Route path="/tenant" element={<TenantLayout />}>
          <Route index element={<TenantOverviewPage />} />
          <Route path="kamar" element={<TenantRoomPage />} />
          <Route path="tagihan" element={<TenantBillingPage />} />
          <Route path="pembayaran" element={<TenantPaymentsPage />} />
          <Route path="kontrak" element={<TenantContractPage />} />
          <Route path="maintenance" element={<TenantMaintenancePage />} />
          <Route path="komplain" element={<TenantComplaintPage />} />
          <Route path="perpanjang" element={<TenantExtendPage />} />
          <Route path="pindah-kamar" element={<TenantMoveRoomPage />} />
          <Route path="checkout" element={<TenantCheckoutPage />} />
          <Route path="tamu" element={<TenantVisitorPage />} />
          <Route path="profil" element={<TenantProfilePage />} />
          <Route path="bantuan" element={<TenantHelpPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="properti" element={<AdminPropertiesPage />} />
          <Route path="tipe-kamar" element={<AdminRoomTypesPage />} />
          <Route path="kamar" element={<AdminRoomsPage />} />
          <Route path="ketersediaan" element={<AdminAvailabilityPage />} />
          <Route path="leads" element={<AdminLeadsPage />} />
          <Route path="survey" element={<AdminSurveyPage />} />
          <Route path="booking" element={<AdminBookingsPage />} />
          <Route path="penghuni" element={<AdminTenantsPage />} />
          <Route path="kontrak" element={<AdminContractsPage />} />
          <Route path="tagihan" element={<AdminBillingPage />} />
          <Route path="pembayaran" element={<AdminPaymentsPage />} />
          <Route path="deposit" element={<AdminDepositsPage />} />
          <Route path="checkin-checkout" element={<AdminCheckinCheckoutPage />} />
          <Route path="maintenance" element={<AdminMaintenancePage />} />
          <Route path="komplain" element={<AdminComplaintsPage />} />
          <Route path="housekeeping" element={<AdminHousekeepingPage />} />
          <Route path="promo" element={<AdminPromoPage />} />
          <Route path="konten" element={<AdminContentPage />} />
          <Route path="notifikasi" element={<AdminNotificationsPage />} />
          <Route path="laporan" element={<AdminReportsPage />} />
          <Route path="pengguna" element={<AdminUsersPage />} />
          <Route path="pengaturan" element={<AdminSettingsPage />} />
          <Route path="audit-log" element={<AdminAuditLogPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
