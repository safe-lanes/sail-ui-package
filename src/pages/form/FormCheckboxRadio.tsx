import React from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import { Switch } from "../../components/ui/Switch";

export default function FormCheckboxRadio() {
    return (
        <Card className="p-3">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Checkboxes & Radio Buttons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* --- CHECKBOXES --- */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Checkboxes</h3>
                    <div className="space-y-4">
                        {/* Default */}
                        <Label className="flex items-center gap-4 flex-row-reverse">
                            <Input type="checkbox" className="h-4 w-4" />
                            Default Checkbox
                        </Label>

                        {/* Colored */}
                        <Label className="flex items-center gap-2 flex-row-reverse">
                            <Input
                                type="checkbox"
                                className="h-4 w-4 accent-blue-600"
                                defaultChecked
                            />
                            Blue Checkbox
                        </Label>

                        {/* Disabled */}
                        <Label className="flex items-center gap-2 flex-row-reverse text-gray-400">
                            <Input type="checkbox" className="h-4 w-4" disabled />
                            Disabled Checkbox
                        </Label>

                        {/* With badge */}
                        {/* <Label className="">
                            <Input type="checkbox" className="h-4 w-4 accent-green-600" />
                            With Badge
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                New
                            </span>
                        </Label> */}

                        {/* Toggle style */}
                        <Label className="flex items-center gap-3 cursor-pointer">
                            Toggle Switch

                        </Label>
                        <Switch />
                    </div>
                </div>

                {/* --- RADIO BUTTONS --- */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Radio Buttons</h3>
                    <div className="space-y-4">
                        {/* Default */}
                        <Label className="flex items-center gap-2 flex-row-reverse">
                            <Input type="radio" name="radioGroup" className="h-4 w-4" />
                            Default Radio
                        </Label>

                        {/* Colored */}
                        <Label className="flex items-center gap-2 flex-row-reverse">
                            <Input
                                type="radio"
                                name="radioGroup"
                                className="h-4 w-4 accent-purple-600"
                                defaultChecked
                            />
                            Purple Radio
                        </Label>

                        {/* Disabled */}
                        <Label className="flex items-center gap-2 flex-row-reverse text-gray-400">
                            <Input
                                type="radio"
                                name="radioGroupDisabled"
                                className="h-4 w-4"
                                disabled
                            />
                            Disabled Radio
                        </Label>

                        {/* Inline group */}
                        <div className="flex gap-6">
                            <Label className="">
                                <Input
                                    type="radio"
                                    name="inlineRadio"
                                    className="h-4 w-4 accent-red-600"
                                />
                                Option 1
                            </Label>
                            <Label className="">
                                <Input
                                    type="radio"
                                    name="inlineRadio"
                                    className="h-4 w-4 accent-red-600"
                                    defaultChecked
                                />
                                Option 2
                            </Label>
                        </div>

                        {/* With badge */}
                        {/* <Label className="flex items-center gap-2">
                            <Input
                                type="radio"
                                name="radioBadge"
                                className="h-4 w-4 accent-yellow-500"
                            />
                            With Badge
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                Popular
                            </span>
                        </Label> */}
                    </div>
                </div>
            </div>
        </Card>
    );
}
