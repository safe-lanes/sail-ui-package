import React, { useState } from 'react';
import { ModuleNavigator, Module } from './ModuleNavigator'; // Adjust import path
import { cn } from '../../../lib/utils'; // or replace with clsx or simple string concat

export interface NavItem {
  id?: string;
  title: string;
  icon: React.ElementType; // Icon component
  link: string;
  activeBg?: string;
  activeText?: string;
  inactiveBg?: string;
  inactiveText?: string;
  badge?: string;
  isActive?: boolean; // <-- Control active state externally
}

export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

export interface HeaderProps {
  logo?: LogoProps;
  navItems: NavItem[];
  modules: Module[];
  rightSection?: React.ReactNode;
  onNavClick?: (item: NavItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navItems,
  modules,
  rightSection,
  onNavClick,
}) => {
  const [currentModule, setCurrentModule] = useState<string>(
    modules.length > 0 ? modules[0].id : '',
  );

  const handleModuleChange = (moduleId: string) => {
    setCurrentModule(moduleId);
  };

  return (
    <header className="w-full h-[67px] bg-[#E8E8E8] border-b-2 border-[#5DADE2]">
      <div className="flex items-center h-full">
        {/* Logo */}
        <div className="flex items-center ml-4">
          {logo ? (
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn('h-12 w-auto', logo.className ?? '')}
            />
          ) : (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">Logo</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-1">
          {/* Module Navigator */}
          <div className="flex flex-col items-center justify-center w-[100px] h-[67px] bg-[#E8E8E8] border-r border-gray-300">
            <ModuleNavigator
              currentModule={currentModule}
              onModuleChange={handleModuleChange}
              modules={modules}
            />
          </div>

          {/* Nav Items */}
          <div className="flex">
            {navItems.map(
              ({
                id,
                title,
                link,
                icon: Icon,
                activeBg = '#5DADE2',
                activeText = 'white',
                inactiveBg = '#E8E8E8',
                inactiveText = '#4f5863',
                badge,
                isActive,
              }) => {
                // If isActive provided externally, use it; else fallback false
                const active = !!isActive;

                const handleClick = () => {
                  onNavClick?.({ id, title, link, icon: Icon });
                };

                return (
                  <div
                    key={link}
                    onClick={handleClick}
                    className="relative flex flex-col items-center justify-center w-[100px] h-[67px] border-r border-gray-300 cursor-pointer hover:bg-gray-300"
                    style={{
                      backgroundColor: active ? activeBg : inactiveBg,
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                      }
                    }}
                  >
                    <Icon size={24} color={active ? activeText : '#6B7280'} className="mb-1" />
                    <div
                      className="text-[10px] font-normal font-['Roboto',Helvetica]"
                      style={{ color: active ? activeText : inactiveText }}
                    >
                      {title}
                    </div>

                    {badge && (
                      <span className="absolute top-1 right-2 text-xs bg-red-600 rounded-full px-1.5 text-white">
                        {badge}
                      </span>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </nav>

        {/* Right Section */}
        {rightSection && (
          <div className="flex items-center space-x-2 ml-auto mr-4">{rightSection}</div>
        )}
      </div>
    </header>
  );
};
