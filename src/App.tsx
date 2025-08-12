import React from 'react';
import {
  Ship,
  Database,
  Users,
  Plus,
  User,
  MapPin,
  Settings,
  Lock,
  BarChart3
} from 'lucide-react';
import { SidebarItem, VerticalSidebar } from './components/layout/NavBar/Sidebar';
import HeaderExample from './pages/navbar/HeaderExample';

const App: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    {
      id: 'vessel-management',
      title: 'Vessel Management',
      icon: <Ship />,
      link: '/vessel-management',
      isActive: false
    },
    {
      id: 'custom-data',
      title: 'Custom Data Field Management',
      icon: <Database />,
      link: '/custom-data',
      isActive: false
    },
    {
      id: 'fleet',
      title: 'Fleet',
      icon: <Ship />,
      link: '/fleet',
      isActive: true
    },
    {
      id: 'additional-group',
      title: 'Additional Group',
      icon: <Plus />,
      link: '/additional-group',
      isActive: false
    },
    {
      id: 'vessel-owner',
      title: 'Vessel Owner',
      icon: <Ship />,
      link: '/vessel-owner',
      isActive: false
    },
    {
      id: 'port',
      title: 'Port',
      icon: <MapPin />,
      link: '/port',
      isActive: false
    },
    {
      id: 'user-management',
      title: 'User Management',
      icon: <Users />,
      link: '/user-management',
      isActive: false
    },
    {
      id: 'access-control',
      title: 'Access Control',
      icon: <Lock />,
      link: '/access-control',
      isActive: false
    },
    {
      id: 'kpi-configuration',
      title: 'Kpi Configuration',
      icon: <BarChart3 />,
      link: '/kpi-configuration',
      isActive: false
    }
  ];

  const handleSidebarClick = (item: SidebarItem) => {
    console.log('Sidebar item clicked:', item);
    // Handle navigation logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div>
        <VerticalSidebar
          items={sidebarItems}
          onItemClick={handleSidebarClick}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <HeaderExample />
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Main Content Area</h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-4">
              This is the main content area. The sidebar on the left shows the vertical navigation
              matching your design with blue background and white icons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Feature 1</h3>
                <p className="text-sm text-gray-600">Sample content for demonstration</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Feature 2</h3>
                <p className="text-sm text-gray-600">Sample content for demonstration</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Feature 3</h3>
                <p className="text-sm text-gray-600">Sample content for demonstration</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;