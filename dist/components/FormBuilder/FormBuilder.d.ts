import React from 'react';
import { FormConfig } from './types';
interface Props {
    config: FormConfig;
    onSubmit: (data: Record<string, any>) => void;
    stepperOnly?: boolean;
    formOnly?: boolean;
}
export declare const FormBuilder: React.FC<Props>;
export {};
