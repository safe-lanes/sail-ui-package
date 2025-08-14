import React from 'react';

export interface SidebarItem {
  id: string;
  title: string;
  icon: React.ReactElement;
  link: string;
  badge?: string;
}

export interface SideBarProps {
  currentLink: string;
  allowedLinks?: string[];
  items: SidebarItem[];
  onItemClick: (item: SidebarItem) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  currentLink,
  allowedLinks = [],
  items,
  onItemClick,
}) => {
  return (
    <aside className="w-[67px] absolute left-0 top-[67px] h-[calc(100vh-67px)] bg-[#16569e] flex flex-col">
      {items
        .filter((item) => (allowedLinks.length === 0 ? true : allowedLinks.includes(item.id)))
        .map((item) => {
          const active = item.link === currentLink;

          return (
            <div
              key={item.id ?? item.link}
              className={`w-full h-[79px] flex flex-col items-center justify-center cursor-pointer ${
                active ? 'bg-[#52baf3]' : 'hover:bg-[#1e5fa8]'
              }`}
              onClick={() => onItemClick(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onItemClick(item);
                }
              }}
            >
              <div className="text-white text-[10px] font-normal font-['Roboto',Helvetica] flex flex-col items-center relative text-center">
                {item.icon}
                <span>{item.title}</span>

                {item.badge && (
                  <span className="absolute top-1 right-1 text-xs bg-red-600 rounded-full px-1.5 text-white">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          );
        })}

      {/* Fill remaining space with dark blue */}
      <div className="flex-1 bg-[#16569e]" />
    </aside>
  );
};
