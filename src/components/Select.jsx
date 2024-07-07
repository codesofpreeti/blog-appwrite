import React, { forwardRef, useId } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <select name="" id={id} ref={ref} className={`${className}`} {...props}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
