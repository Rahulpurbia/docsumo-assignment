import React from "react";
import "./InputField.css";

const InputField = ({
  label,
  type = "text",
  name,
  inputValue,
  handleChange,
  required,
  autoFocus,
  inputClassName,
  inputStyle,
  className,
  error = "",
  validateField,
}) => {
  return (
    <div className={`input-field-wrapper ${className}`}>
      <label>{label || "Name"}</label>
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        required={required}
        autoFocus={autoFocus}
        className={`${inputClassName} ${error ? "input-error" : ""}`}
        style={inputStyle}
        onBlur={(e) => validateField(e.target.name, e.target.value)}
      />
      {error && <small className="error-text">{error}</small>}
    </div>
  );
};

export default InputField;
