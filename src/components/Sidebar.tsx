import { Link, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, BarChart2, Briefcase, Calculator, ShoppingCart, Factory, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    '/quality': false,
    '/general': false,
    '/business': false,
    '/accounting': false,
    '/purchasing': false,
    '/production': false,
    '/technical': false,
  });
  
  const toggleExpand = (path: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };
  
  const menuItems = [
    { 
      path: '/', 
      name: 'Dashboard', 
      icon: <LayoutDashboard size={20} />,
      subItems: [] 
    },
    { 
      path: '/quality', 
      name: 'Bộ phận chất lượng', 
      icon: <BarChart2 size={20} />,
      subItems: [
        { path: '/quality/personnel', name: 'Thông tin nhân sự' },
        { path: '/quality/office', name: 'Chất lượng khối văn phòng' },
        { path: '/quality/production', name: 'Chất lượng khối sản xuất' },
        { path: '/quality/process', name: 'Quy trình' },
      ]
    },
    { 
      path: '/general', 
      name: 'Bộ phận tổng hợp', 
      icon: <BarChart2 size={20} />,
      subItems: [
        { path: '/general/pricing', name: 'Tính báo giá' },
        { path: '/general/partners', name: 'Đối tác' },
      ]
    },
    { 
      path: '/business', 
      name: 'Bộ phận kinh doanh', 
      icon: <Briefcase size={20} />,
      subItems: [
        { path: '/business/international', name: 'Phòng KD Quốc Tế' },
        { path: '/business/domestic', name: 'Phòng KD Nội Địa' },
      ]
    },
    { 
      path: '/accounting', 
      name: 'Bộ phận kế toán', 
      icon: <Calculator size={20} />,
      subItems: [
        { path: '/accounting/admin', name: 'Phòng KT Hành chính' },
        { path: '/accounting/tax', name: 'Phòng KT thuế' },
      ]
    },
    { 
      path: '/purchasing', 
      name: 'Bộ phận Thu mua', 
      icon: <ShoppingCart size={20} />,
      subItems: [
        { path: '/purchasing/materials', name: 'Thu mua NVL' },
        { path: '/purchasing/equipment', name: 'Thu mua Thiết bị' },
      ]
    },
    { 
      path: '/production', 
      name: 'Bộ phận sản xuất', 
      icon: <Factory size={20} />,
      subItems: [
        { path: '/production/management', name: 'Phòng QLSX' },
        { path: '/production/warehouse', name: 'Quản lý kho' },
      ]
    },
    { 
      path: '/technical', 
      name: 'Bộ phận kỹ thuật', 
      icon: <Settings size={20} />,
      subItems: [
        { path: '/technical/quality', name: 'Phòng QLHTM' },
        { path: '/technical/mechanical', name: 'Phòng cơ- điện' },
      ]
    },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">ABF System</h1>
      </div>
      
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 rounded-full p-2">
            <Users size={20} />
          </div>
          <div>
            <p className="font-medium">Người dùng</p>
            <p className="text-sm text-gray-400">Quản trị viên</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {menuItems.map((item) => (
            <li key={item.path} className="mb-1">
              {item.path === '/' ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
                    location.pathname === item.path ? 'bg-gray-800 text-white' : ''
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ) : (
                <>
                  <div
                    className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer ${
                      location.pathname.startsWith(item.path) ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => toggleExpand(item.path)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                    <span className="ml-auto">
                      {expandedItems[item.path] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </span>
                  </div>
                  
                  {expandedItems[item.path] && item.subItems.length > 0 && (
                    <ul className="bg-gray-800 py-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center pl-12 pr-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors ${
                              location.pathname === subItem.path ? 'bg-gray-700 text-white' : ''
                            }`}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
