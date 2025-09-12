import React from "react";

interface InputFieldProps {
  icon: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  required?: boolean;
}

function InputField({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  readOnly,
  required,
}: InputFieldProps) {
  return (
    <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        className="h-8 w-full border-none"
      />
    </div>
  );
}

export default InputField;
