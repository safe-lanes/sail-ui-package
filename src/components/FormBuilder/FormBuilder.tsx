import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import clsx from "clsx";

// -------------------- Types --------------------
export type FieldType = "text" | "email" | "tel" | "checkbox" | "number" | "password";

export interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  disabled?: boolean;
  showIf?: {
    field: string;
    value: any;
  };
}

export interface StepSchema {
  title: string;
  fields: FieldSchema[];
}

export interface FormSchema {
  type: "normal" | "stepper";
  buttonAlignment?: "left" | "center" | "right" | "space-between";
  stepperDirection?: "horizontal" | "vertical";
  fields?: FieldSchema[]; // For normal form
  steps?: StepSchema[];   // For stepper form
}

interface FormBuilderProps<T extends FieldValues> {
  schema: FormSchema;
  onSubmit: (data: T) => void;
}

// -------------------- Component --------------------
export default function FormBuilder<T extends FieldValues>({
  schema,
  onSubmit
}: FormBuilderProps<T>) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<T>();
  const [step, setStep] = useState(0);
  const watchAll = watch();

  const isFieldVisible = (field: FieldSchema) => {
    if (!field.showIf) return true;
    return watchAll[field.showIf.field] === field.showIf.value;
  };

  const currentStep = schema.type === "stepper"
    ? schema.steps?.[step] ?? { fields: [] }
    : { fields: schema.fields ?? [] };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const getButtonAlignmentClass = (align?: FormSchema["buttonAlignment"]) => {
    switch (align) {
      case "left": return "justify-start";
      case "center": return "justify-center";
      case "right": return "justify-end";
      case "space-between": return "justify-between";
      default: return "justify-end";
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-xl shadow-md"
    >
      {/* Stepper Navigation */}
      {schema.type === "stepper" &&
        schema.stepperDirection === "horizontal" &&
        schema.steps && (
          <div className="flex gap-4 mb-6">
            {schema.steps.map((s, i) => (
              <div
                key={i}
                className={clsx(
                  "px-4 py-2 rounded-full border cursor-pointer transition",
                  i === step
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                )}
                onClick={() => setStep(i)}
              >
                {s.title}
              </div>
            ))}
          </div>
      )}

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStep.fields.map((field) =>
          isFieldVisible(field) && (
            <div key={field.name} className="flex flex-col">
              <label className="font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                {...register(field.name as keyof T, { required: field.required })}
                disabled={field.disabled}
                className={clsx(
                  "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2",
                  errors[field.name]
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                )}
              />
              {errors[field.name] && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          )
        )}
      </div>

      {/* Buttons */}
      <div
        className={`flex ${getButtonAlignmentClass(schema.buttonAlignment)} gap-3 mt-6`}
      >
        {schema.type === "stepper" ? (
          <>
            {step > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                {schema.stepperDirection === "horizontal" ? "← Back" : "Back"}
              </button>
            )}
            {step < (schema.steps?.length ?? 0) - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {schema.stepperDirection === "horizontal" ? "Next →" : "Next"}
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
