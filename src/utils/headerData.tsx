import {
    Users,
    Clock,
    Share2,
    FileBarChart,
    Settings,
    UserPlus,
    File,
    FormInput,
    Grid,
    Blocks,
    CheckCircle,
    AlarmCheckIcon,
    List,
} from "lucide-react";
import { NavItem } from "../components/layout/NavBar/Header";
import { Module } from "../components/layout/NavBar/ModuleNavigator";

export const navItems: NavItem[] = [
    {
        id: "forms",
        title: "Forms",
        icon: Grid,
        link: "/forms",
        isActive: true,
    },

    {
        title: "Input",
        icon: FormInput,
        link: "/inputs",
        // badge: "BETA",
    },
    {
        id: "buttons",
        title: "Buttons",
        icon: Blocks,
        link: "/buttons",
        isActive: false,
    },
    {
        id: "checkboxes",
        title: "Checkbox-Radio",
        icon: CheckCircle,
        link: "/checkboxes",
        isActive: false,
    },
    {
        id: "alert",
        title: "Alerts",
        icon: AlarmCheckIcon,
        link: "/alert",
        isActive: false,
    },
    {
        id: "select",
        title: "Select",
        icon: List,
        link: "/select",
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
    }, {
        id: "demo",
        title: "Demo",
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
