
import React from 'react';
import { cn } from '../../../lib/utils';
// Define the navigation item interface
export interface NavItem {
    id?: string;
    title: string;
    icon: React.ReactElement;
    link: string;
    isActive?: boolean;
    badge?: string;
}

// Define the header props interface
export interface HeaderProps {
    logo?: {
        src: string;
        alt: string;
        className: string;
    };
    navItems: NavItem[];
    onNavClick?: (item: NavItem) => void;
    rightSection?: React.ReactNode;
}


export const Header: React.FC<HeaderProps> = ({
    logo,
    navItems,
    onNavClick,
    rightSection
}) => {
    const handleNavClick = (item: NavItem) => {
        if (onNavClick) {
            onNavClick(item);
        } else {
            // Default behavior - navigate to link
            window.location.href = item.link;
        }
    };

    const renderIcon = (iconElement: React.ReactElement) => {
        return React.cloneElement(iconElement, {
            className: "w-4 h-4"
        });
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-1">
                {/* Left Section - Logo */}
                <div className="flex items-center">
                    {logo ? (
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={cn("h-12 w-auto", logo.className)}
                        />
                    ) : (
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">Logo</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Center Section - Navigation Items */}
                <nav className="flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id || `nav-${index}`}
                            onClick={() => handleNavClick(item)}
                            className={`
                flex flex-col items-center px-3 py-2 rounded-lg transition-colors duration-200 min-w-[70px] relative
                ${item.isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                                }
              `}
                            title={item.title}
                        >
                            <div className="flex items-center justify-center mb-1">
                                {renderIcon(item.icon)}
                                {item.badge && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-medium truncate max-w-[60px]">
                                {item.title}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Right Section - Action Buttons & User */}
                {
                    rightSection && (
                        <div className="flex items-center space-x-2 ">
                            {rightSection}
                        </div>
                    )
                }
            </div>
        </header>
    );
};

