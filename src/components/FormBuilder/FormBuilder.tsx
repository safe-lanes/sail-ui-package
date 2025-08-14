import React, { useState, useCallback, useMemo } from 'react';
import Stepper from './Stepper';
import { FieldConfig, FormBuilderProps } from './types';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/Textarea';
import { CommonSelect, OptionType } from '../ui/Common-Select';

export const FormBuilder: React.FC<FormBuilderProps> = ({ config, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const steps = useMemo(() => config.steps || [], [config.steps]);
  const stepperDirection = config.stepperDirection || 'vertical';
  const stepperPosH = config.stepperPosition || 'left';
  const buttonAlignment = config.buttonAlignment || 'right';
  const stepType = config.type || 'both';

  const renderError = useCallback((f: FieldConfig, value: unknown) => {
    const hasError =
      f.required &&
      touched[f.name] &&
      (value === '' || value === undefined || value === null);

    if (!hasError) return null;

    return (
      <div className="text-red-500 text-sm mt-1">
        {f.errorMessage || `${f.label} is required`}
      </div>
    );
  }, [touched]);

  const validateStep = useCallback(
    (stepIndex: number) => {
      const fields = steps[stepIndex].fields;
      let isValid = true;

      setTouched((prev) => {
        const updated = { ...prev };
        for (const f of fields) {
          if (f.showIf && data[f.showIf.field] !== f.showIf.value) continue;
          updated[f.name] = true;
        }
        return updated;
      });

      for (const f of fields) {
        if (f.showIf && data[f.showIf.field] !== f.showIf.value) continue;
        if (f.required) {
          const val = data[f.name];
          if (val === undefined || val === null || val === '') {
            const msg = f.errorMessage || `${f.label} is required`;
            toast.error(msg);
            isValid = false;
          }
        }
      }
      return isValid;
    },
    [data, steps]
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
  const handleChange = useCallback((name: string, value: unknown) => {
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

      const value: unknown = data[f.name] ?? (f.type === 'checkbox' ? false : '');
      const { name, label, type, required, ...rest } = f; // extract known props
      const baseLabel = (
        <label className="block mb-1 font-medium" htmlFor={name}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      );

      switch (type) {
        case 'textarea':
          return (
            <div key={name} className="mb-4">
              {baseLabel}
              <Textarea
                id={name}
                name={name}
                onChange={(e) => handleChange(name, e.target.value)}
                {...rest}
              >
                {String(value)}
              </Textarea>
              {renderError(f, value)}
            </div>
          );

        case "select-basic":
        case "select-searchable":
        case "select-creatable":
        case "select-multiple":
        case "select-multiple-searchable":
        case "select-creatable-multiple":
        case "select-load-more":
          return (
            <div key={name} className="mb-4">
              {baseLabel}
              <CommonSelect
                name={name}
                variant={type}
                value={value === '' ? undefined : value as unknown as OptionType}
                onChange={(val) => handleChange(name, val)}
                {...rest}
              />
              {renderError(f, value)}
            </div>
          );

        case 'checkbox':
          return (
            <div key={name} className="mb-4 flex items-center">
              <Input
                id={name}
                name={name}
                type="checkbox"
                checked={!!value}
                onChange={(e) => handleChange(name, e.target.checked)}
                {...rest}
              />
              <label htmlFor={name} className="ml-2">{label}</label>
              {renderError(f, value)}
            </div>
          );

        default:
          return (
            <div key={name} className="mb-4">
              {baseLabel}
              <Input
                id={name}
                name={name}
                type={type}
                value={value as string | number | readonly string[] | undefined}
                onChange={(e) => handleChange(name, e.target.value)}
                {...rest}
              />
              {renderError(f, value)}
            </div>
          );
      }
    },
    [data, handleChange, isVisible, renderError],
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
          <Button onClick={handleBack} className="px-10 py-2 bg-gray-300 rounded">
            Back
          </Button>
        )}
        {!lastStep ? (
          <Button onClick={handleNext} className="px-10 py-2 bg-blue-600 text-white rounded">
            Next
          </Button>
        ) : (
          <Button
            onClick={() => {
              if (!validateStep(currentStep)) return;
              onSubmit(data);
            }}
            className="px-10 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </Button>
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
            <div className="w-1/4 p-4">
              <Stepper {...stepperProps} direction="vertical" />
            </div>
            <div className="w-3/4">{formContent}</div>
          </div>
        );

      case 'right':
        return (
          <div className="flex gap-6">
            <div className="w-3/4">{formContent}</div>
            <div className="w-1/4 p-4">
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
