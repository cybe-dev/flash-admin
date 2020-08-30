import React from "react";
import { Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextInput = ({
  label,
  icon,
  type,
  placeholder,
  control,
  name,
  rules,
  defaultValue,
}) => {
  return (
    <div className="w-full mb-3">
      {label && <label className="text-black-600 roboto mb-2">{label}</label>}
      <div className="bg-white-100 h-10 border border-white-300 flex rounded-none items-center p-1">
        {icon && (
          <span className="p-2 text-black-300">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <Controller
          control={control}
          name={name}
          render={({ onChange, onBlur, value, name }) => (
            <input
              className="w-full h-full border-none bg-white"
              type={type}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              name={name}
              value={value}
            />
          )}
          rules={rules}
          defaultValue={defaultValue || ""}
        />
      </div>
    </div>
  );
};

export default TextInput;
