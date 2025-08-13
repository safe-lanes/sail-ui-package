import { useState } from "react";
import { FormBuilder } from "../../components/FormBuilder";
import { FormConfig } from "../../components/FormBuilder/types";

export default function NormalForm() {
    const [config, setConfig] = useState<FormConfig>({
        type: "both", // "stepper" | "normal" | "both"
        buttonAlignment: "center",
        stepperPosition: "top",
        steps: [
            {
                title: "Personal Details",
                fields: [
                    { name: "firstName", label: "First Name", type: "text", required: true },
                    { name: "lastName", label: "Last Name", type: "text", required: true },
                    { name: "hasCompany", label: "Do you have a company?", type: "checkbox" },
                    {
                        name: "companyName",
                        label: "Company Name",
                        type: "text",
                        required: true,
                        showIf: { field: "hasCompany", value: true }
                    }
                ]
            },
            {
                title: "Contact Info",
                fields: [
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Phone Number", type: "tel" }
                ]
            }, {
                title: "Address Info",
                fields: [
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Phone Number", type: "tel" }
                ]
            }
        ]
    });

    return (
        <div>
            {/* Settings Panel */}
            <div className="mb-6 p-4 border rounded bg-gray-50 space-y-4">
                <h2 className="font-bold mb-4">Form Settings</h2>
                <div className="grid grid-cols-3 items-center gap-4">
                    {/* Type */}
                    <div>
                        <label className="text-right">Type</label>
                        <select
                            value={config.type}
                            onChange={(e) =>
                                setConfig({ ...config, type: e.target.value as FormConfig["type"] })
                            }
                            className="border p-2 col-span-2"
                        >
                            <option value="stepper">Stepper</option>
                            <option value="normal">Normal</option>
                            <option value="both">Both</option>
                        </select>
                    </div>

                    {/* Horizontal Position */}
                    <div >
                        <label className="text-right">Horizontal Position</label>
                        <select
                            value={config.stepperPosition}
                            onChange={(e) =>
                                setConfig({
                                    ...config,
                                    stepperPosition: e.target.value as FormConfig["stepperPosition"],
                                })
                            }
                            className="border p-2 col-span-2"
                        >
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    </div>

                    {/* Button Alignment */}
                    <div >
                        <label className="text-right">Button Alignment</label>
                        <select
                            value={config.buttonAlignment}
                            onChange={(e) =>
                                setConfig({
                                    ...config,
                                    buttonAlignment: e.target.value as FormConfig["buttonAlignment"],
                                })
                            }
                            className="border p-2 col-span-2"
                        >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                </div>
            </div>


            {/* Form Layout */}

            {/* <FormBuilder config={config} onSubmit={(data) => console.log(data)}  stepperOnly />
            <FormBuilder config={config} onSubmit={(data) => console.log(data)}  formOnly /> */}
            <FormBuilder config={config} onSubmit={(data) => console.log(data)} />
        </div>
    );
}
