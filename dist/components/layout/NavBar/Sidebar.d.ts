import React from "react";
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
    onItemClick: (link: string) => void;
}
export declare const SideBar: React.FC<SideBarProps>;
