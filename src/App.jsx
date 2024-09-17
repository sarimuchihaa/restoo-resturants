import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './Components/Admin/LoginPage.jsx';
import AdminDraftView from './Components/Admin/AdminDraftView.jsx';
import OrderPage from './Components/Admin/OrderPage.jsx';
import ResturantDetails from './Components/Admin/ResturantDetails.jsx';
import AdminSettings from './Components/Admin/AdminSettings.jsx';
import ReservationNotification from './Components/Admin/ReservationNotification.jsx';
import AllReservations from './Components/Admin/AllReservations.jsx';
import ReservationDetails from './Components/Admin/ReservationDetails.jsx';
import AddPromotionPage from './Components/Admin/AddPromotion.jsx';
import AdditionalAssets from './Components/Admin/AdditionalAssets.jsx';
import SuperAdminDraftView from './Components/SuperAdmin/SuperAdminDraftView.jsx';
import ManageVendor from './Components/SuperAdmin/ManageVendor.jsx';
import AddNewVendor from './Components/SuperAdmin/AddNewVendor.jsx';


function App() {
  return (
  <>
   <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin/draft-view" element={<AdminDraftView />} />
          <Route path="/admin/order-page" element={<OrderPage />} />
          <Route path="/admin/resturant-details" element={<ResturantDetails />} />
          <Route path="/admin/all-reservations" element={<AllReservations />} />
          <Route path="/admin/reservation-notification" element={<ReservationNotification />} />
          <Route path="/admin/reservation-details" element={<ReservationDetails />} />
          <Route path="/admin/admin-settings" element={<AdminSettings />} />
          <Route path="/admin/add-promotion" element={<AddPromotionPage />} />
          <Route path="/admin/additional-assets" element={<AdditionalAssets />} />
          <Route path="/super-admin/draft-view" element={<SuperAdminDraftView />} />
          <Route path="/super-admin/manage-vendor" element={<ManageVendor />} />
          <Route path="/super-admin/add-vendor" element={<AddNewVendor />} />
        </Routes>
     </Router>
  </>
  )
}

export default App;