import { dateViewFormate } from "../../../lib/helpar";

// ✅ Convert dot-notation flat object → nested object
const unflatten = (obj) => {
  const result = {};
  for (const [flatKey, value] of Object.entries(obj)) {
    const keys = flatKey.split(".");
    keys.reduce((acc, key, i) => {
      if (i === keys.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = acc[key] || {};
      }
      return acc[key];
    }, result);
  }
  return result;
};

// ✅ Format values: boolean, null, date, image, fallback
const formatValue = (value, key, options = {}) => {
  const isBoolean = typeof value === "boolean";
  const useYesNo = key in options && isBoolean;

  // Boolean field from options → Yes/No
  if (useYesNo) {
    return (
      <span
        className={`inline-block px-2 py-1 text-xs rounded ${value
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          }`}
      >
        {value ? "Yes" : "No"}
      </span>
    );
  }

  // Null or empty
  if (value === null || value === "") {
    return (
      <span className="italic text-gray-400 dark:text-slate-500">
        Not Provided
      </span>
    );
  }

  // Image file
  if (
    typeof value === "string" &&
    value.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
  ) {
    return (
      <img
        src={
          value.startsWith("http")
            ? value
            : `${import.meta.env.VITE_API_ATTACHMENT_PATH}${value}`
        }
        alt="Uploaded"
        className="h-10 w-10 object-cover rounded-md border border-gray-300 dark:border-slate-600"
      />
    );
  }

  // Generic boolean → Active/Inactive
  if (isBoolean) {
    return (
      <span
        className={`inline-block px-2 py-1 text-xs rounded ${value
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          }`}
      >
        {value ? "Active" : "Inactive"}
      </span>
    );
  }

  // ISO Date
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return dateViewFormate(value);
  }

  // Default
  return value;
};

// ✅ Label formatter: snake_case → Capitalized Words
const formatLabel = (key) =>
  key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (l) => l.toUpperCase());

// ✅ Filter keys that look like IDs
const shouldDisplay = (key) => !/(^id$|_?id$|^id_|_id_|_?id_?$)/i.test(key);

// ✅ Get non-object fields to show
const extractFields = (obj = {}) =>
  Object.entries(obj).filter(
    ([key, val]) => typeof val !== "object" && shouldDisplay(key)
  );

// ✅ Recursive section builder
const buildAutoSections = (data, parentKey = "Details", options = {}) => {
  const sections = [];

  const flatRows = extractFields(data).map(([key, val]) => ({
    label: formatLabel(key),
    value: formatValue(val, key, options),
  }));

  if (flatRows.length > 0) {
    sections.push({ title: formatLabel(parentKey), rows: flatRows });
  }

  for (const [key, value] of Object.entries(data)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      shouldDisplay(key)
    ) {
      const childSections = buildAutoSections(value, key, options);
      sections.push(...childSections);
    }
  }

  return sections;
};

// ✅ Main Component
export function TableSectionView({ data = {}, options = {} }) {
  const nestedData = unflatten(data);
  const sections = buildAutoSections(nestedData, "Details", options);

  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-md">
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border border-gray-200 dark:border-slate-700 rounded-md overflow-hidden"
          >
            <div className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white font-semibold text-sm border-b border-gray-300 dark:border-slate-600">
              {section.title}
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                {section.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-2 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="px-4 py-2 text-gray-900 dark:text-white">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
