import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full ">
      {label && (
        <label className="block mb-1 pl-1" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} rounded-lg border w-full`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
