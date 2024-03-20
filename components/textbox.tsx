"use client";

import { useRef } from "react";

interface TextBoxProps {
  htmlFor: string;
  label: string;
  classLabel: string;
  classInput: string;
  isInline?: boolean;
  inputRef?: any;
  icon?: React.ReactNode; // Accepts any JSX element as an icon
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function TextBox({
  htmlFor,
  label,
  icon,
  classLabel,
  classInput,
  isInline,
  inputRef,
  ...rest
}: TextBoxProps & (InputProps | LabelProps)) {
  return (
    <>
      <label htmlFor={htmlFor} className={classLabel}>
        {label}
      </label>
      {isInline ? (
        <div className='relative'>
          <input
            className={classInput}
            {...(rest as InputProps)}
            ref={inputRef}
          />
          {icon && <>{icon}</>}
        </div>
      ) : (
        <>
          <input
            className={classInput}
            {...(rest as InputProps)}
            ref={inputRef}
          />
          {icon && <>{icon}</>}
        </>
      )}
    </>
  );
}
