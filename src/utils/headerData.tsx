import {
    BarChart3,
    User,
    Grid3X3,
    Calendar,
    FileText,
    UserCheck,
    Users,
    Clock,
    Share2,
    FileBarChart,
    Settings,
    UserPlus,
    File,
} from "lucide-react";
import { NavItem } from "../components/layout/NavBar/Header";
import { Module } from "../components/layout/NavBar/ModuleNavigator";

export const navItems: NavItem[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: BarChart3,
        link: "/dashboard",
        isActive: true,
    },
    {
        title: "Personal Details",
        icon: User,
        link: "/personal-details",
        badge: "BETA",
    },
    {
        id: "audit",
        title: "Audit",
        icon: Grid3X3,
        link: "/audit",
        isActive: false,
    },
    {
        id: "planning",
        title: "Planning",
        icon: Calendar,
        link: "/planning",
        isActive: false,
    },
    {
        id: "preparation",
        title: "Preparation",
        icon: FileText,
        link: "/preparation",
        isActive: false,
    },
    {
        id: "request-assign",
        title: "Request/Assign",
        icon: UserCheck,
        link: "/request-assign",
        isActive: false,
    },
    {
        id: "inspectors",
        title: "Inspectors",
        icon: Users,
        link: "/inspectors",
        isActive: false,
    },
    {
        id: "history",
        title: "History",
        icon: Clock,
        link: "/history",
        isActive: false,
    },
    {
        id: "fleet-sharing",
        title: "Fleet Sharing",
        icon: Share2,
        link: "/fleet-sharing",
        isActive: false,
    },
    {
        id: "report",
        title: "Report",
        icon: FileBarChart,
        link: "/report",
        isActive: false,
    },
    {
        id: "custom",
        title: "Custom",
        icon: Settings,
        link: "/custom",
        isActive: false,
        badge: "BETA",
    },
];


export const modulesData: Module[] = [
    {
        id: "all",
        name: "All",
        icon: <UserPlus size={20} className="mb-2" />,
        available: true,
    },
    {
        id: "forms",
        name: "Forms",
        icon: <File size={20} className="text-white" />,
        available: true,
    },
];
