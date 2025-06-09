import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

// Quality Management
import QualityManagement from './pages/QualityManagement';
import QualityPersonnel from './pages/quality/QualityPersonnel';
import QualityOffice from './pages/quality/QualityOffice';
import QualityProduction from './pages/quality/QualityProduction';
import QualityProcess from './pages/quality/QualityProcess';

// General Management
import GeneralManagement from './pages/GeneralManagement';
import GeneralPricing from './pages/general/GeneralPricing';
import GeneralPartners from './pages/general/GeneralPartners';

// Business Management
import BusinessManagement from './pages/BusinessManagement';
import BusinessInternational from './pages/business/BusinessInternational';
import BusinessDomestic from './pages/business/BusinessDomestic';

// Accounting Management
import AccountingManagement from './pages/AccountingManagement';
import AccountingAdmin from './pages/accounting/AccountingAdmin';
import AccountingTax from './pages/accounting/AccountingTax';

// Purchasing Management
import PurchasingManagement from './pages/PurchasingManagement';
import PurchasingMaterials from './pages/purchasing/PurchasingMaterials';
import PurchasingEquipment from './pages/purchasing/PurchasingEquipment';

// Production Management
import ProductionManagement from './pages/ProductionManagement';
import ProductionDepartment from './pages/production/ProductionDepartment';
import ProductionWarehouse from './pages/production/ProductionWarehouse';

// Technical Management
import TechnicalManagement from './pages/TechnicalManagement';
import TechnicalQuality from './pages/technical/TechnicalQuality';
import TechnicalMechanical from './pages/technical/TechnicalMechanical';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          {/* Quality Management Routes */}
          <Route path="/quality" element={<QualityManagement />} />
          <Route path="/quality/personnel" element={<QualityPersonnel />} />
          <Route path="/quality/office" element={<QualityOffice />} />
          <Route path="/quality/production" element={<QualityProduction />} />
          <Route path="/quality/process" element={<QualityProcess />} />
          
          {/* General Management Routes */}
          <Route path="/general" element={<GeneralManagement />} />
          <Route path="/general/pricing" element={<GeneralPricing />} />
          <Route path="/general/partners" element={<GeneralPartners />} />
          
          {/* Business Management Routes */}
          <Route path="/business" element={<BusinessManagement />} />
          <Route path="/business/international" element={<BusinessInternational />} />
          <Route path="/business/domestic" element={<BusinessDomestic />} />
          
          {/* Accounting Management Routes */}
          <Route path="/accounting" element={<AccountingManagement />} />
          <Route path="/accounting/admin" element={<AccountingAdmin />} />
          <Route path="/accounting/tax" element={<AccountingTax />} />
          
          {/* Purchasing Management Routes */}
          <Route path="/purchasing" element={<PurchasingManagement />} />
          <Route path="/purchasing/materials" element={<PurchasingMaterials />} />
          <Route path="/purchasing/equipment" element={<PurchasingEquipment />} />
          
          {/* Production Management Routes */}
          <Route path="/production" element={<ProductionManagement />} />
          <Route path="/production/management" element={<ProductionDepartment />} />
          <Route path="/production/warehouse" element={<ProductionWarehouse />} />
          
          {/* Technical Management Routes */}
          <Route path="/technical" element={<TechnicalManagement />} />
          <Route path="/technical/quality" element={<TechnicalQuality />} />
          <Route path="/technical/mechanical" element={<TechnicalMechanical />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
