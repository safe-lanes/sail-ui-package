// ModuleNavigator.tsx
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/Dialog';
import { Button } from '../../ui/Button';

export interface Module {
  id: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
  available: boolean;
}

export interface ModuleNavigatorProps {
  currentModule: string;
  onModuleChange: (moduleId: string) => void;
  modules: Module[];
}

export function ModuleNavigator({ currentModule, onModuleChange, modules }: ModuleNavigatorProps) {
  const [showModuleDialog, setShowModuleDialog] = useState(false);

  const handleModuleSelect = (moduleId: string) => {
    onModuleChange(moduleId);
    setShowModuleDialog(false);
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setShowModuleDialog(true)}
      >
        <div className="w-6 h-6 mb-1">
          {/* Custom grid icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" fill="#6B7280" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="#6B7280" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="#6B7280" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="#6B7280" />
          </svg>
        </div>
        <div className="text-[#4f5863] text-[10px] font-normal font-['Mulish',Helvetica]">
          {modules.find((m) => m.id === currentModule)?.name ?? 'Select Module'}
        </div>
      </div>

      <Dialog open={showModuleDialog} onOpenChange={setShowModuleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Module</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            {modules.map((module) => (
              <Button
                key={module.id}
                variant={currentModule === module.id ? 'default' : 'ghost'}
                className="w-full justify-start h-auto p-4"
                onClick={() => handleModuleSelect(module.id)}
                disabled={!module.available}
              >
                <div className="flex items-center gap-3">
                  {module.icon}
                  <div className="text-left">
                    <div className="font-medium">{module.name}</div>
                    {module.description && (
                      <div className="text-sm text-muted-foreground">{module.description}</div>
                    )}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
