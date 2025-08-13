import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./components/layout/NavBar/Sidebar";
import HeaderExample from "./pages/navbar/HeaderExample";
import { sidebarItems } from "./utils/sideBarData";
import { Card } from ".";
import NormalForm from "./pages/form/NormalForm";
import { Title } from "./components/ui/Title/Title";
import Forminput from "./pages/form/Forminput";
import FormButtons from "./pages/form/FormButtons";
import FormCheckboxRadio from "./pages/form/FormCheckboxRadio";

const App: React.FC = () => {
  const handleSidebarClick = (item: any) => {
    console.log("Sidebar item clicked:", item);
    // If sidebar items have `link`, navigation will be handled by NavLink or useNavigate
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <HeaderExample />

        {/* Sidebar + Main content */}
        <div className="flex flex-1">
          <SideBar
            items={sidebarItems}
            onItemClick={handleSidebarClick}
            currentLink={""}
            allowedLinks={[]}
          />

          {/* Main area changes based on route */}
          <main className="flex-1 overflow-auto ml-20">
            <div className="w-full">
              <Title title={"Main Content Area"} className="mt-4 mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Custom Action
                </button>
              </Title>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Routes>
                  <Route
                    path="/forms"
                    element={
                      <Card className="my-3 p-2">
                        <NormalForm />
                      </Card>
                    }
                  />
                  <Route
                    path="/inputs"
                    element={
                        <Forminput />
                    }
                  />
                   <Route
                    path="/buttons"
                    element={
                        <FormButtons />
                    }
                  />
                   <Route
                    path="/checkboxes"
                    element={
                        <FormCheckboxRadio />
                    }
                  />
                  
                  {/* You can keep adding more routes here */}
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
