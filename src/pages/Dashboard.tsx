import { Users, ShoppingCart, FolderOpen, FileText } from 'lucide-react';
import StatCard from '../components/StatCard';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Tổng nhân viên" 
          value={0} 
          icon={<Users size={32} />} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Đơn hàng mới" 
          value={20} 
          icon={<ShoppingCart size={32} />} 
          color="bg-green-500" 
        />
        <StatCard 
          title="Dự án đang thực hiện" 
          value={7} 
          icon={<FolderOpen size={32} />} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Báo cáo chờ duyệt" 
          value={10} 
          icon={<FileText size={32} />} 
          color="bg-orange-500" 
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Báo cáo</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          MỤC TIÊU VÀ KẾ HOẠCH
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
