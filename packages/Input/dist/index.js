import {
  Textarea
} from "./chunk-DXZJEOJC.js";

// src/index.tsx
import { createElement as _jsx, Fragment as _Fragment } from "react";
import { useState, useCallback } from "react";

// src/index.css
import css from "ustyler";
var src_default = css`.form-input {
    display: flex;
    width: 100%;
    padding: 0 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--bx-color-lblue-well);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: var(--bx-input-sm-radius);
    height: var(--bx-input-sm-height);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: var(--bx-input-sm-font-size);
    line-height: 1;
    box-sizing: border-box;
    font-family: var(--bx-font-secondary);
}

.form-input-text {
    padding: 0px;
    line-height: 1;
}

.form-input-container {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: var(--bx-input-sm-radius);
    height: var(--bx-input-sm-height);
    padding: 0 1rem;
    border: 1px solid var(--bx-color-lblue-well);
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-input-container-sm {
    height: 38px;
}

.form-input-container-fill {
    background: white;
}

.form-input-with-icon {
    border: none;
    appearance: none;
    background: transparent;
    display: flex;
    flex: 1;
    height: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    font-family: unset;
    min-width: 1px;
    font-size: 14px;
}

.form-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
}

.form-select-container {
    position: relative;
    display: flex;
    width: 100%;
    padding: 0;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--bx-color-lblue-well);
    border-radius: var(--bx-input-sm-radius);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select-container-md {
    height: var(--bx-input-sm-height);
}

.form-select-container-sm {
    height: 40px;
}

.form-select {
    display: flex;
    z-index: 2;
    width: 100%;
    padding: 0 2rem 0 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: transparent;
    border: none;
    box-shadow: none;
    background-image: none;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: var(--bx-input-sm-radius);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select-arrow {
    position: absolute;
    z-index: 1;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30px;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: var(--bx-color-black);
}

.form-checkbox-container {
    --checkbox-size: 1.25rem;
    --checkbox-color: var(--bx-color-orange);
    --checkbox-label: var(--bx-color-black);
    display: inline-flex;
    width: auto;
    align-items: center;
    opacity: 1;
    position: relative;
    user-select: none;
    cursor: pointer;
}

.form-checkbox-check {
    display: flex;
    align-items: center;
    padding: 2px;
    align-self: start;
}

.form-checkbox {
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
    background-color: transparent;
}

.form-checkbox-icon {
    border: 1px solid var(--checkbox-color);
    border-radius: 3px;
    height: 1rem;
    width: 1rem;
    position: relative;
    transition: border-color 0.15s ease;
    transform: rotate(0.000001deg);
}

.form-checkbox-icon svg {
    position: absolute;
    top: -1px;
    left: -1px;
}

.form-checkbox-label {
    margin-left: 8px;
    color: var(--checkbox-label);
    user-select: none;
    line-height: var(--checkbox-size);
}

.form-toggle-container {
    display: inline-flex;
    width: auto;
    align-items: center;
    justify-content: center;
    opacity: 1;
    padding: 3px 0;
    position: relative;
}

.form-toggle-container-sm {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 1.67rem;
    --toggle-height: 0.835rem;
}

.form-toggle-container-md {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 1.75rem;
    --toggle-height: 0.875rem;
}

.form-toggle-container-lg {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 2rem;
    --toggle-height: 1rem;
}

.form-toggle-input {
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
    background-color: transparent;
}

.form-toggle {
    border-radius: var(--bx-input-sm-radius);
    width: var(--toggle-width);
    height: var(--toggle-height);
    transition-delay: 0.12s;
    transition-duration: 0.2s;
    transition-property: background, border;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    background-color: var(--bx-color-blue-clear);
    border: 1px solid transparent;
    padding: 0;
    position: relative;
}

.form-toggle-is-checked {
    background-color: var(--toggle-color);
}

.form-toggle-inner {
    width: calc(var(--toggle-height) - 2px);
    height: calc(var(--toggle-height) - 2px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    transition: left 280ms cubic-bezier(0, 0, 0.2, 1);
    border-radius: 50%;
    background-color: #ffffff;
}

.form-toggle-inner-is-checked {
    left: calc(100% - (var(--toggle-height) - 2px));
    box-shadow: none;
}

.form-textarea-container {
    display: inline-flex;
    width: 100%;
    min-width: 12.5rem;
    max-width: 95vw;
    height: auto;
    border-radius: var(--bx-input-sm-radius);
    border: 1px solid var(--bx-color-lblue-well);
    color: var(--bx-color-black);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
}

.form-textarea-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.form-textarea {
    background-color: transparent;
    box-shadow: none;
    display: block;
    font-size: 0.875rem;
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 8pt;
}

.form-textarea:focus {
    outline: none;
}

.form-checkbox-container-disabled,
.form-toggle-container-disabled,
.form-textarea-container-disabled {
    --checkbox-color: var(--bx-color-blue-shine);
    cursor: not-allowed;
    opacity: 0.75;
}

.form-checkbox:disabled,
.form-textarea:disabled,
.form-checkbox[disabled],
.form-textarea[disabled] {
    cursor: not-allowed;
}

.form-input:focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.form-input-fullwidth {
    width: 100%;
}

.form-select-fullwidth {
    width: 100%;
}

.form-input-with-icon:focus {
    outline: none;
}

.form-select:focus {
    outline: none;
}

.form-input:disabled,
.form-input[disabled],
.form-input[readonly],
.form-input-with-icon:disabled,
.form-input-with-icon[disabled],
.form-input-with-icon[readonly] {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.form-select:disabled,
.form-select[disabled],
.form-select[readonly] {
    opacity: 1;
    cursor: not-allowed;
}

.form-input-invalid {
    border: 1px solid var(--bx-fv-invalid);
}

.form-input:focus.form-input-invalid {
    border: 1px solid var(--bx-fv-invalid);
    box-shadow: 0 0 0 0.15rem var(--bx-fv-invalid-rgba) !important;
}

.form-input-invalid svg {
    color: var(--bx-fv-invalid);
}

.form-input-container-disabled {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.form-select-container-disabled {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.form-input-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.form-select-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.form-text {
    margin-top: 0.25rem;
    color: var(--bx-form-text);
    font-size: 10px;
}

.form-label {
    display: inline-block;
    margin-bottom: 0.813rem;
    font-size: 14px;
}

.form-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 10px;
}

.form-feedback-valid {
    color: var(--bx-fv-valid);
}

.form-feedback-invalid {
    color: var(--bx-fv-invalid);
}

.form-feedback-is-active {
    display: block;
}

.form-input.form-input-button {
    align-items: center;
    gap: 1rem;
    z-index: 30;
    position: relative;
    white-space: nowrap;
}

.form-input-button_label {
    text-align: left;
    flex: 0%;
}

.form-input-type-select {
    padding: 0px;
    position: relative;
}

.form-input-select {
    all: unset;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 1rem;
    z-index: 2;
    font-family: unset;
}

.form-input-select_icon {
    right: 1rem;
    top: 50%;
    transform: translateY(-40%);
    position: absolute;
}
`;

// src/index.tsx
import cs from "classnames";
import { Down } from "@bxreact/icon";
function Input({
  type,
  value,
  onChange,
  id,
  readOnly,
  disabled,
  placeholder,
  required,
  form,
  name,
  error,
  fullWidth,
  leftIcon,
  rightIcon,
  inputSize,
  fill,
  options,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return /* @__PURE__ */ _jsx("div", {
    className: cs("form-input", {
      "form-input-container-disabled": disabled,
      "form-input-invalid": error,
      "form-input-fullwidth": fullWidth,
      "form-input-container-focus": focused,
      "form-input-container-md": inputSize === "md",
      "form-input-container-sm": inputSize === "sm",
      "form-input-container-fill": fill,
      "form-input-type-select": type === "select"
    })
  }, leftIcon && /* @__PURE__ */ _jsx("div", {
    className: "form-icon-container form-icon-left"
  }, leftIcon), type === "select" ? /* @__PURE__ */ _jsx(_Fragment, null, /* @__PURE__ */ _jsx("select", {
    className: "form-input-select",
    name,
    value: value || "",
    onChange
  }, placeholder && /* @__PURE__ */ _jsx("option", {
    key: "placeholder",
    value: "",
    disabled: true
  }, placeholder), options.map((option, i) => /* @__PURE__ */ _jsx("option", {
    key: i,
    value: option.value
  }, option.label))), /* @__PURE__ */ _jsx("div", {
    className: "form-input-select_icon"
  }, /* @__PURE__ */ _jsx(Down, {
    size: "1em",
    color: "lblue-well"
  }))) : /* @__PURE__ */ _jsx("input", {
    className: cs("form-input-text form-input-with-icon", {
      "form-input-fullwidth": fullWidth
    }),
    type,
    value,
    onChange,
    id,
    disabled,
    readOnly,
    placeholder,
    required,
    form,
    name,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...props
  }), rightIcon && /* @__PURE__ */ _jsx("div", {
    className: "form-icon-container form-icon-right"
  }, rightIcon));
}
export {
  Input,
  Textarea
};
