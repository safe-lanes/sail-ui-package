import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from './components/layout/NavBar/Sidebar';
import HeaderExample from './pages/navbar/HeaderExample';
import { sidebarItems } from './utils/sideBarData';
import { Card } from './components/ui/Card/Card';
import NormalForm from './pages/form/NormalForm';
import { Title } from './components/ui/Title/Title';
import Forminput from './pages/form/Forminput';
import FormButtons from './pages/form/FormButtons';
import FormCheckboxRadio from './pages/form/FormCheckboxRadio';
import FormAlertDialog from './pages/form/FormAlertDialog';
import FormSelect from './pages/form/FormSelect';
import FormSpinnersCollapse from './pages/form/FormSpinnersCollapse';
import AggridTable from './pages/Table/AggridTable';
import DatTablePage from './pages/Table/DatTablePage';

const App: React.FC = () => {
  // Define the type for sidebar items based on your sidebarItems structure
  type SidebarItem = (typeof sidebarItems)[number];

  const handleSidebarClick = (item: SidebarItem) => {
    console.log('Sidebar item clicked:', item);
    // If sidebar items have `link`, navigation will be handled by NavLink or useNavigate
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <HeaderExample />

        {/* Sidebar + Main content */}
        <div className="flex flex-1">
          <SideBar
            items={sidebarItems}
            onItemClick={handleSidebarClick}
            currentLink={''}
            allowedLinks={[]}
          />

          {/* Main area changes based on route */}
          <main className="flex-1 overflow-auto ml-20">
            <div className="w-full">
              <Title title={'Main Content Area'} className="mt-4 mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Custom Action
                </button>
              </Title>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Card className="my-3 p-2">
                        <NormalForm />
                      </Card>
                    }
                  />
                  <Route path="/inputs" element={<Forminput />} />
                  <Route path="/buttons" element={<FormButtons />} />
                  <Route path="/checkboxes" element={<FormCheckboxRadio />} />
                  <Route path="/alert" element={<FormAlertDialog />} />
                  <Route path="/select" element={<FormSelect />} />
                  <Route path="/spinnersModal" element={<FormSpinnersCollapse />} />
                  <Route path="/ag-grid" element={<AggridTable />} />

                  {/* You can keep adding more routes here */}
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
