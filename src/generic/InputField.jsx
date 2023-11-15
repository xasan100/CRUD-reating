import React from "react";

export default function InputField({
  label,
  id,
  name,
  type,
  value,
  autoComplete,
  handleChange,
  icon,
}) {
  return (
    <div className="col-span-1 row-span-1 relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 w-72"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => handleChange(e)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {icon}
      </div>
    </div>
  );
}
