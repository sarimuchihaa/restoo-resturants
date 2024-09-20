import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdminSignup from './Components/SuperAdmin/SuperAdminSignup.jsx';
import SuperAdminDraftView from './Components/SuperAdmin/SuperAdminDraftView.jsx';
import ManageVendor from './Components/SuperAdmin/ManageVendor.jsx';
import AddNewVendor from './Components/SuperAdmin/AddNewVendor.jsx';


function App() {
  return (
  <>
   <Router>
        <Routes>
          <Route path="/" element={<SuperAdminSignup />} />
          <Route path="/super-admin/draft-view" element={<SuperAdminDraftView />} />
          <Route path="/super-admin/manage-vendor" element={<ManageVendor />} />
          <Route path="/super-admin/add-vendor" element={<AddNewVendor />} />
        </Routes>
     </Router>
  </>
  )
}

export default App;