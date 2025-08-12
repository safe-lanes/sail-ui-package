import React from 'react';
import { Header, NavItem } from '../../components/layout/NavBar/Header';
import {
  Grid3X3,
  BarChart3,
  Calendar,
  FileText,
  UserCheck,
  Users,
  Clock,
  Share2,
  FileBarChart,
  Settings,
  User,
  RotateCcw,
  Plus,
  Youtube
} from 'lucide-react';


const HeaderExample: React.FC = () => {
  const navigationItems: NavItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: <BarChart3 />,
      link: '/dashboard',
      isActive: true
    },
    {
      title: "Personal Details",
      icon: <User />,
      link: "/personal-details",
      badge: 'BETA'
    },
    {
      id: 'audit',
      title: 'Audit',
      icon: <Grid3X3 />,
      link: '/audit',
      isActive: false
    },
    {
      id: 'planning',
      title: 'Planning',
      icon: <Calendar />,
      link: '/planning',
      isActive: false
    },
    {
      id: 'preparation',
      title: 'Preparation',
      icon: <FileText />,
      link: '/preparation',
      isActive: false
    },
    {
      id: 'request-assign',
      title: 'Request/Assign',
      icon: <UserCheck />,
      link: '/request-assign',
      isActive: false
    },
    {
      id: 'inspectors',
      title: 'Inspectors',
      icon: <Users />,
      link: '/inspectors',
      isActive: false
    },
    {
      id: 'history',
      title: 'History',
      icon: <Clock />,
      link: '/history',
      isActive: false
    },
    {
      id: 'fleet-sharing',
      title: 'Fleet Sharing',
      icon: <Share2 />,
      link: '/fleet-sharing',
      isActive: false
    },
    {
      id: 'report',
      title: 'Report',
      icon: <FileBarChart />,
      link: '/report',
      isActive: false
    },
    {
      id: 'custom',
      title: 'Custom',
      icon: <Settings />,
      link: '/custom',
      isActive: false,
      badge: 'BETA'
    },
  ];

  const handleNavClick = (item: NavItem) => {
    console.log('Navigation clicked:', item);
    // Handle navigation logic here
  };

  const handleNewClick = () => {
    console.log('New button clicked');
  };

  const handleYoutubeClick = () => {
    console.log('YouTube button clicked');
  };

  const handleRefreshClick = () => {
    console.log('Refresh button clicked');
  };
  const userAvatar = null
  return (
    <div>
      <Header
        navItems={navigationItems}
        onNavClick={handleNavClick}
        logo={{
          src: 'https://dev2.sl-sail.com/assets/logo.svg',
          alt: 'Sail UI Logo',
          className: "h-10"
        }}
        rightSection={
          <>
            {/* New Button */}
            <button
              onClick={handleNewClick}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md flex items-center space-x-1 text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New</span>
            </button>

            {/* YouTube Button */}
            <button
              onClick={handleYoutubeClick}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </button>

            {/* Refresh Button */}
            <button
              onClick={handleRefreshClick}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-md transition-colors"
              title="Refresh"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* User Avatar */}
            <div className="flex items-center">
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                />
              ) : (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-gray-300">
                  <span className="text-white text-sm font-semibold">
                    MT
                  </span>
                </div>
              )}
            </div>
          </>
        }
      />
    </div>
  );
};

export default HeaderExample;