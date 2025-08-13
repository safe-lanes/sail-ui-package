import { SidebarItem } from "../components/layout/NavBar/Sidebar";
import {
    Ship,
    Database,
    Users,
    Plus,
    MapPin,
    Lock,
    BarChart3} from 'lucide-react';

export const sidebarItems: SidebarItem[] = [
    {
        id: 'vessel-management',
        title: 'Vessel Management',
        icon: <Ship />,
        link: '/vessel-management',

    },
    {
        id: 'custom-data',
        title: 'Custom Data Field Management',
        icon: <Database />,
        link: '/custom-data',

    },
    {
        id: 'fleet',
        title: 'Fleet',
        icon: <Ship />,
        link: '/fleet',

    },
    {
        id: 'additional-group',
        title: 'Additional Group',
        icon: <Plus />,
        link: '/additional-group',

    },
    {
        id: 'vessel-owner',
        title: 'Vessel Owner',
        icon: <Ship />,
        link: '/vessel-owner',

    },
    {
        id: 'port',
        title: 'Port',
        icon: <MapPin />,
        link: '/port',

    },
    {
        id: 'user-management',
        title: 'User Management',
        icon: <Users />,
        link: '/user-management',

    },
    {
        id: 'access-control',
        title: 'Access Control',
        icon: <Lock />,
        link: '/access-control',

    },
    {
        id: 'kpi-configuration',
        title: 'Kpi Configuration',
        icon: <BarChart3 />,
        link: '/kpi-configuration',

    }
];
