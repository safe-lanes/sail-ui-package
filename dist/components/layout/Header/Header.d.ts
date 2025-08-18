import React from 'react';
import { Module } from '../ModuleNavigator/ModuleNavigator';
export interface NavItem {
    id?: string;
    title: string;
    icon: React.ElementType;
    link: string;
    activeBg?: string;
    activeText?: string;
    inactiveBg?: string;
    inactiveText?: string;
    badge?: string;
    isActive?: boolean;
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
export declare const Header: React.FC<HeaderProps>;
