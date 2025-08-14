import { useState } from 'react';
import { FormBuilder } from '../../components/FormBuilder';
import { FormConfig } from '../../components/FormBuilder/types';

export default function NormalForm() {
  const [config, setConfig] = useState<FormConfig>({
    type: 'both', // "stepper" | "normal" | "both"
    buttonAlignment: 'right',
    stepperPosition: 'left',
    steps: [
      {
        title: 'Basic inputs',
        grid: { columns: 2, gap: '2rem' },
        fields: [
          { name: 'firstName', label: 'First Name', type: 'text', required: true },
          { name: 'lastName', label: 'Last Name', type: 'text', required: true },
          { name: 'password', label: 'Password', type: 'password', required: true },
          { name: 'age', label: 'Age', type: 'number', min: 0, max: 100 },
        ],
      },
      {
        title: 'Inputs',
        grid: { columns: 3, gap: '2rem' },
        fields: [
          { name: 'dob', label: 'Date of Birth', type: 'date' },
          { name: 'time', label: 'Preferred Time', type: 'time' },
          { name: 'datetime', label: 'Event Date & Time', type: 'datetime-local' },
          { name: 'color', label: 'Favorite Color', type: 'color' },
          { name: 'file', label: 'Upload File', type: 'file', accept: '.pdf,.docx,.jpg' },
          { name: 'profilePic', label: 'Profile Picture', type: 'image', accept: 'image/*' },
          { name: 'resume', label: 'Upload Resume', type: 'file', accept: '.pdf,.docx' },
          { name: 'hasCompany', label: 'Do you have a company?', type: 'checkbox' },
        ],
      },
      {
        title: 'Extra Inputs',
         grid: { columns: 2, gap: '2rem' },
        fields: [
          {
            name: 'companyName',
            label: 'Company Name',
            type: 'text',
            required: true,
            showIf: { field: 'hasCompany', value: true },
          },
          {
            name: 'gender',
            label: 'Gender',
            type: 'radio-group',
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            name: 'hobbies',
            label: 'Hobbies',
            type: 'checkbox-group',
            options: [
              { label: 'Reading', value: 'reading' },
              { label: 'Traveling', value: 'traveling' },
              { label: 'Gaming', value: 'gaming' },
            ],
          },
          {
            name: 'country',
            label: 'Country',
            type: 'select-searchable',
            options: [
              { label: 'India', value: 'in' },
              { label: 'USA', value: 'us' },
              { label: 'UK', value: 'uk' },
            ],
          },
          {
            name: 'bio',
            label: 'Bio',
            type: 'textarea',
            rows: 4,
          },
          {
            name: 'range',
            label: 'Satisfaction Level',
            type: 'range',
            min: 0,
            max: 10,
          },
          {
            name: 'url',
            label: 'Website',
            type: 'url',
          },
          {
            name: 'search',
            label: 'Search',
            type: 'search',
          },
        ],
      },
      {
        title: 'Contact Info',
        fields: [
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'phone', label: 'Phone Number', type: 'tel' },
        ],
      },
      {
        title: 'Address Info',
        fields: [
          { name: 'address', label: 'Address', type: 'textarea', rows: 3 },
          { name: 'pincode', label: 'Pincode', type: 'number' },
        ],
      },
    ],
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
              onChange={(e) => setConfig({ ...config, type: e.target.value as FormConfig['type'] })}
              className="border p-2 col-span-2"
            >
              <option value="stepper">Stepper</option>
              <option value="normal">Normal</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Horizontal Position */}
          <div>
            <label className="text-right">Horizontal Position</label>
            <select
              value={config.stepperPosition}
              onChange={(e) =>
                setConfig({
                  ...config,
                  stepperPosition: e.target.value as FormConfig['stepperPosition'],
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
          <div>
            <label className="text-right">Button Alignment</label>
            <select
              value={config.buttonAlignment}
              onChange={(e) =>
                setConfig({
                  ...config,
                  buttonAlignment: e.target.value as FormConfig['buttonAlignment'],
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
