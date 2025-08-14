import React, { useState, useCallback } from 'react';
import Stepper from './Stepper';
import { FormConfig, FieldConfig } from './types';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  config: FormConfig;
  onSubmit: (data: Record<string, any>) => void;
  stepperOnly?: boolean;
  formOnly?: boolean;
}

export const FormBuilder: React.FC<Props> = ({ config, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Record<string, any>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const steps = config.steps || [];
  const stepperDirection = config.stepperDirection || 'vertical';
  const stepperPosH = config.stepperPosition || 'top';
  const buttonAlignment = config.buttonAlignment || 'right';
  const stepType = config.type || 'normal';

  const validateStep = useCallback(
    (stepIndex: number) => {
      const fields = steps[stepIndex].fields;
      for (const f of fields) {
        if (f.showIf && data[f.showIf.field] !== f.showIf.value) continue;
        if (f.required) {
          const val = data[f.name];
          if (val === undefined || val === null || val === '') {
            toast.error(`${f.label} is required`);
            return false;
          }
        }
      }
      return true;
    },
    [data, steps],
  );

  // Handle going to next step or submit
  const handleNext = useCallback(() => {
    if (!validateStep(currentStep)) return;
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
    else onSubmit(data);
  }, [currentStep, data, onSubmit, steps.length, validateStep]);

  // Handle going to previous step
  const handleBack = useCallback(() => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }, [currentStep]);

  // Handle clicking on stepper step
  const handleStepClick = useCallback(
    (targetStep: number) => {
      if (targetStep < currentStep) {
        // Allow going back freely
        setCurrentStep(targetStep);
        return;
      }
      // Validate current step before moving forward
      if (!validateStep(currentStep)) return;
      setCurrentStep(targetStep);
    },
    [currentStep, validateStep],
  );

  // Handle input change
  const handleChange = useCallback((name: string, value: any) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  // Check if field visible
  const isVisible = useCallback(
    (field: FieldConfig) => {
      if (!field.showIf) return true;
      return data[field.showIf.field] === field.showIf.value;
    },
    [data],
  );

  // Render input fields by type
  const renderField = useCallback(
    (f: FieldConfig) => {
      if (!isVisible(f)) return null;

      const value = data[f.name] ?? (f.type === 'checkbox' ? false : '');
      const showError =
        f.required && touched[f.name] && (value === '' || value === undefined || value === null);

      const baseLabel = (
        <label className="block mb-1 font-medium" htmlFor={f.name}>
          {f.label}
          {f.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      );

      switch (f.type) {
        case 'textarea':
          return (
            <div key={f.name} className="mb-4">
              {baseLabel}
              <textarea
                id={f.name}
                value={value}
                placeholder={f.placeholder}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className="w-full border rounded p-2"
              />
              {showError && <div className="text-red-500 text-sm mt-1">{f.label} is required</div>}
            </div>
          );

        case 'select':
          return (
            <div key={f.name} className="mb-4">
              {baseLabel}
              <select
                id={f.name}
                value={value}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select...</option>
                {f.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {showError && <div className="text-red-500 text-sm mt-1">{f.label} is required</div>}
            </div>
          );

        case 'checkbox':
          return (
            <div key={f.name} className="mb-4 flex items-center">
              <input
                id={f.name}
                type="checkbox"
                checked={!!value}
                onChange={(e) => handleChange(f.name, e.target.checked)}
                className="mr-3"
              />
              <label htmlFor={f.name} className="font-medium">
                {f.label}
                {f.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            </div>
          );

        default:
          return (
            <div key={f.name} className="mb-4">
              {baseLabel}
              <input
                id={f.name}
                type={f.type}
                value={value}
                placeholder={f.placeholder}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className="w-full border rounded p-2"
              />
              {showError && <div className="text-red-500 text-sm mt-1">{f.label} is required</div>}
            </div>
          );
      }
    },
    [data, handleChange, isVisible, touched],
  );

  // Buttons component for navigation with alignment
  const Buttons: React.FC<{
    lastStep: boolean;
  }> = ({ lastStep }) => {
    const justifyClass =
      buttonAlignment === 'center'
        ? 'justify-center'
        : buttonAlignment === 'right'
          ? 'justify-end'
          : buttonAlignment === 'space-between'
            ? 'justify-between'
            : 'justify-start';

    return (
      <div className={`mt-6 flex gap-2 ${justifyClass}`}>
        {currentStep > 0 && (
          <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
            Back
          </button>
        )}
        {!lastStep ? (
          <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              if (!validateStep(currentStep)) return;
              onSubmit(data);
            }}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    );
  };

  // Render stepper + form according to layout
  const renderFormLayout = () => {
    const stepperProps = {
      steps: steps.map((s) => ({
        title: s.title,
        description: s.description ?? '',
        fields: s.fields,
      })),
      current: currentStep,
      onStepClick: handleStepClick,
      direction:
        stepperDirection === 'vertical' || stepperDirection === 'horizontal'
          ? stepperDirection
          : 'vertical',
    };

    const formContent = (
      <div className="p-6 border rounded bg-white ">
        <h3 className="text-lg font-semibold mb-2">{steps[currentStep].title}</h3>
        {steps[currentStep].description && (
          <p className="text-sm text-gray-500 mb-4">{steps[currentStep].description}</p>
        )}
        {steps[currentStep].fields.map(renderField)}
        <Buttons lastStep={currentStep === steps.length - 1} />
      </div>
    );

    switch (stepperPosH) {
      case 'top':
        return (
          <div>
            <Stepper {...stepperProps} direction="horizontal" />
            <div className="mt-6">{formContent}</div>
          </div>
        );

      case 'bottom':
        return (
          <div>
            <div>{formContent}</div>
            <div className="mt-6">
              <Stepper {...stepperProps} direction="horizontal" />
            </div>
          </div>
        );

      case 'left':
        return (
          <div className="flex gap-6">
            <div className="w-1/4">
              <Stepper {...stepperProps} direction="vertical" />
            </div>
            <div className="w-3/4">{formContent}</div>
          </div>
        );

      case 'right':
        return (
          <div className="flex gap-6">
            <div className="w-3/4">{formContent}</div>
            <div className="w-1/4">
              <Stepper {...stepperProps} direction="vertical" />
            </div>
          </div>
        );

      case 'center':
      default:
        return (
          <div>
            <div className="flex justify-center">
              <Stepper {...stepperProps} direction="horizontal" />
            </div>
            <div className="mt-6">{formContent}</div>
          </div>
        );
    }
  };

  // Render modes
  if (stepType === 'stepper') {
    return (
      <>
        <ToastContainer />
        <Stepper
          steps={steps.map((s) => ({
            title: s.title,
            description: s.description ?? '',
            fields: s.fields,
          }))}
          current={currentStep}
          onStepClick={handleStepClick}
          direction={stepperDirection}
        />
      </>
    );
  }

  if (stepType === 'normal') {
    return (
      <>
        <ToastContainer />
        <div>
          {steps[currentStep].fields.map(renderField)}
          <div className="mt-6 flex gap-2 justify-end">
            {currentStep > 0 && (
              <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  if (!validateStep(currentStep)) return;
                  onSubmit(data);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

  // Full stepper + form layout
  return (
    <>
      <ToastContainer />
      {renderFormLayout()}
    </>
  );
};
