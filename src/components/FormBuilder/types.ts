export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'checkbox'
  | 'textarea'
  | 'password'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'color'
  | 'file'
  | 'image'
  | 'url'
  | 'search'
  | 'range'
  | 'checkbox-group'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'select-basic'
  | 'select-searchable'
  | 'select-creatable'
  | 'select-multiple'
  | 'select-multiple-searchable'
  | 'select-creatable-multiple'
  | 'select-load-more'
  | 'radio'
  | 'radio-group'
  | 'button-group'
  | 'switch'
  | 'date'
  | 'file';
export interface ShowIf {
  field: string;
  value: unknown;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[]; // for select/radio
  showIf?: ShowIf;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  layout?: 'row' | 'column' | 'grid'; // NEW
  columns?: number; // only for grid
  gap?: string;
  [key: string]: unknown;
}
export interface FormConfig {
  type?: 'stepper' | 'normal' | 'both';
  stepperPosition: 'top' | 'bottom' | 'left' | 'center' | 'right';
  buttonAlignment?: 'left' | 'center' | 'right' | 'space-between';
  stepperDirection?: 'horizontal' | 'vertical';
  steps: StepConfig[];
}

export interface FormBuilderProps {
  config: FormConfig;
  onSubmit: (data: Record<string, unknown>) => void;
  stepperOnly?: boolean;
  formOnly?: boolean;
}

export interface StepperProps {
  steps: StepConfig[];
  current: number;
  direction?: 'vertical' | 'horizontal';
  onStepClick?: (index: number) => void;
}

// in types.ts
export type StepConfig = {
  title: string;
  description?: string;
  fields: FieldConfig[];
  grid?: {
    columns?: number; // default 1
    gap?: string; // default "1rem"
    responsive?: boolean; // default false
  };
};
