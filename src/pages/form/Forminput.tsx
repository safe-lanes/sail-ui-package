import React from 'react'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'
import { Mail, Search, Settings, Lock, Phone, Globe, Calendar, Clock, Palette, Upload } from 'lucide-react'

export default function Forminput() {
    return (
        <>
            {/* Inputs Section */}
            <Card className="p-4">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Existing Inputs */}
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        leftIcon={<Mail className="w-5 h-5" />}
                    />
                    <Input
                        label="Search"
                        placeholder="Search..."
                        leftIcon={<Search className="w-5 h-5" />}
                        helperText="Type to search through items"
                    />
                    <Input
                        label="Settings"
                        placeholder="Configure settings"
                        rightIcon={<Settings className="w-5 h-5" />}
                    />
                    <Input
                        label="Error Example"
                        placeholder="This field has an error"
                        error="This field is required"
                    />

                    {/* New Inputs */}
                    <Input
                        label="Text"
                        type="text"
                        placeholder="Enter text"
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        leftIcon={<Lock className="w-5 h-5" />}
                    />
                    <Input
                        label="Number"
                        type="number"
                        placeholder="Enter a number"
                    />
                    <Input
                        label="Phone"
                        type="tel"
                        placeholder="Enter phone number"
                        leftIcon={<Phone className="w-5 h-5" />}
                    />
                    <Input
                        label="URL"
                        type="url"
                        placeholder="Enter website URL"
                        leftIcon={<Globe className="w-5 h-5" />}
                    />
                    <Input
                        label="Date"
                        type="date"
                        leftIcon={<Calendar className="w-5 h-5" />}
                    />
                    <Input
                        label="Time"
                        type="time"
                        leftIcon={<Clock className="w-5 h-5" />}
                    />
                    <Input
                        label="Date & Time"
                        type="datetime-local"
                    />
                    <Input
                        label="Month"
                        type="month"
                    />
                    <Input
                        label="Week"
                        type="week"
                    />
                    <Input
                        label="Color Picker"
                        type="color"
                        leftIcon={<Palette className="w-5 h-5" />}
                    />
                    <Input
                        label="Range"
                        type="range"
                        min="0"
                        max="100"
                    />
                    {/* <Input
                        label="Textarea"
                        as="textarea"
                        placeholder="Enter multiple lines of text"
                        rows={3}
                    />
                    <Input
                        label="Select"
                        as="select"
                        options={[
                            { value: '', label: 'Select option' },
                            { value: '1', label: 'Option 1' },
                            { value: '2', label: 'Option 2' },
                        ]}
                    /> */}
                    <Input
                        label="Checkbox"
                        type="checkbox"
                    />
                    <Input
                        label="Radio Option 1"
                        type="radio"
                        name="radioGroup"
                        value="1"
                    />
                    <Input
                        label="Radio Option 2"
                        type="radio"
                        name="radioGroup"
                        value="2"
                    />
                    <Input
                        label="File Upload"
                        type="file"
                        leftIcon={<Upload className="w-5 h-5" />}
                    />
                </div>
            </Card>
        </>
    )
}
