import React from "react";
export interface Module {
    id: string;
    name: string;
    icon: React.ReactNode;
    description?: string;
    available: boolean;
}
interface ModuleNavigatorProps {
    currentModule: string;
    onModuleChange: (moduleId: string) => void;
    modules: Module[];
}
export declare function ModuleNavigator({ currentModule, onModuleChange, modules, }: ModuleNavigatorProps): import("react/jsx-runtime").JSX.Element;
export {};
