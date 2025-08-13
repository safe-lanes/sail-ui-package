import React from 'react';

import { SideBar } from './components/layout/NavBar/Sidebar';
import HeaderExample from './pages/navbar/HeaderExample';
import { sidebarItems } from './utils/sideBarData';
import { Card } from '.';
import NormalForm from './pages/form/NormalForm';

const App: React.FC = () => {


  const handleSidebarClick = (item: any) => {
    console.log('Sidebar item clicked:', item);
    // Handle navigation logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header: full width at top */}
        <HeaderExample />

        {/* Body: Sidebar + Main content */}
        <div className="flex flex-1">
          <SideBar
            items={sidebarItems}
            onItemClick={handleSidebarClick}
            currentLink={""}
            allowedLinks={[]}
          />

          {/* Main Content Area fills remaining space */}
          <main className="flex-1 overflow-auto ml-20">
            <div className="w-full">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Main Content Area</h1>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
                <p className="text-gray-600 mb-4">
                  This is the main content area. The sidebar on the left shows the vertical
                  navigation matching your design with blue background and white icons.
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

                <Card className='my-3 p-2'>
                  <NormalForm />
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );

};

export default App;