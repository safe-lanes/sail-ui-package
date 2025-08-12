// Define the sidebar item interface
import React from 'react';
export interface SidebarItem {
    id?: string;
    title: string;
    icon: React.ReactElement;
    link: string;
    isActive?: boolean;
    badge?: string;
}

// Define the sidebar props interface
export interface VerticalSidebarProps {
    items: SidebarItem[];
    onItemClick?: (item: SidebarItem) => void;
    className?: string;
}

export const VerticalSidebar: React.FC<VerticalSidebarProps> = ({
    items,
    onItemClick,
    className = ""
}) => {
    const handleItemClick = (item: SidebarItem) => {
        if (onItemClick) {
            onItemClick(item);
        } else {
            // Default behavior - navigate to link
            window.location.href = item.link;
        }
    };

    const renderIcon = (iconElement: React.ReactElement) => {
        return React.cloneElement(iconElement, {
            className: "w-6 h-6 mb-2"
        });
    };

    return (
        <aside className={`bg-blue-600 text-white w-32 min-h-screen ${className}`}>
            <nav className="py-4">
                {items.map((item, index) => (
                    <button
                        key={item.id || `sidebar-${index}`}
                        onClick={() => handleItemClick(item)}
                        className={`
              w-full flex flex-col items-center justify-center px-2 py-4 text-center transition-colors duration-200 relative
              ${item.isActive
                                ? 'bg-blue-700 text-white'
                                : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                            }
            `}
                        title={item.title}
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center relative">
                            {renderIcon(item.icon)}
                            {item.badge && (
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center text-[10px] font-semibold">
                                    {item.badge}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <span className="text-xs font-medium leading-tight px-1">
                            {item.title}
                        </span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};