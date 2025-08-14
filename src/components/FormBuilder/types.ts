export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'checkbox'
  | 'select'
  | 'textarea'
  | 'password'
  | 'date';

export interface ShowIf {
  field: string;
  value: any;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[]; // for select/radio
  showIf?: ShowIf;
  placeholder?: string;
}

export interface StepConfig {
  title: string;
  description?: string;
  fields: FieldConfig[];
}

export interface FormConfig {
  type?: 'stepper' | 'normal' | 'both';
  stepperPosition: 'top' | 'bottom' | 'left' | 'center' | 'right';
  buttonAlignment?: 'left' | 'center' | 'right' | 'space-between';
  stepperDirection?: 'horizontal' | 'vertical';
  steps: StepConfig[];
}
