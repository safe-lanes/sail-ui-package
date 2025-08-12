import { FormBuilder, FormSchema } from "../../components/FormBuilder";


export const formSchema: FormSchema = {
    type: "stepper", // "normal" or "stepper"
    buttonAlignment: "center", // "left", "center", "right", "space-between"
    stepperDirection: "horizontal", // "horizontal" or "vertical"
    steps: [
        {
            title: "Personal Details",
            fields: [
                { name: "firstName", label: "First Name", type: "text", required: true },
                { name: "lastName", label: "Last Name", type: "text", required: true },
                {
                    name: "hasCompany",
                    label: "Do you have a company?",
                    type: "checkbox"
                },
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
        }
    ]
};

export default function NormalForm() {
    return (
        <div className="max-w-2xl mx-auto mt-10">
            <FormBuilder
                schema={formSchema}
                onSubmit={(data) => console.log("Form Data:", data)}
            />
        </div>
    );
}
