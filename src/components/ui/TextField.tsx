"use client";

import React, { useState } from "react";
import { ShowIcon, HideIcon } from "@assets/SvgComponents";
import { FieldError } from "react-hook-form";

type ErrorMessage = FieldError["message"];

type TestFieldProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  error?: ErrorMessage;
  disabled?: boolean;
  subtext?: string;
  hasMaxWidth?: boolean;
  inputProps?: any; //TODO: replace with proper input props
  leftIcon?: JSX.Element;
};

const TextField = ({
  label,
  id,
  type = "text",
  disabled,
  error,
  hasMaxWidth,
  inputProps,
  placeholder,
  subtext,
  leftIcon,
}: TestFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col w-full ${hasMaxWidth ? "max-w-sm" : ""}`}>
      {label && (
        <label htmlFor={id} className="text-left mb-1">
          <span className="text-sm uppercase font-semibold">{label}</span>
        </label>
      )}
      <div className="relative flex">
        {leftIcon && <div className="absolute top-3 left-3">{leftIcon}</div>}
        <input
          disabled={disabled}
          className={`disabled:opacity-50 bg-surface-dp00 py-3 ${
            leftIcon ? "pl-10 pr-3" : "px-3"
          } rounded-lg text-sm w-full placeholder-white-disabled border ${
            error ? "border-amaranth" : "border-white-disabled"
          }`}
          id={id}
          placeholder={placeholder ?? ""}
          type={!isVisible ? type : "text"}
          {...(inputProps ?? {})}
        />

        {type === "password" ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleVisibilityToggle();
            }}
            type="button"
            className="absolute inset-y-0 transition duration-200 ease-in-out right-3 hover:brightness-125"
          >
            {isVisible ? (
              <HideIcon className="w-6 h-6 fill-orange" />
            ) : (
              <ShowIcon className="w-6 h-6 fill-orange" />
            )}
          </button>
        ) : null}
      </div>
      {error ? (
        <span className="mt-1 text-xs font-semibold text-left text-amaranth">
          {error}
        </span>
      ) : null}
      {subtext && (
        <span className="text-xs text-white-medium font-semibold mt-1">
          {subtext}
        </span>
      )}
    </div>
  );
};

export default TextField;
