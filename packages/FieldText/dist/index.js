// src/index.tsx
import { createElement as _jsx } from "react";
import { useState, useRef, useEffect } from "react";

// src/index.css
import css from "ustyler";
var src_default = css`.field-text {
    --field-text-background: transparent;
    --field-text-active-background: var(
        --bx-field-text-active-background,
        var(--field-text-background)
    );
    --field-text-min-height: var(--table-row-min-height, 48px);
    --field-text-padding: var(--table-field-padding, 10px);
    min-width: calc(var(--min-width, 0) + 20px);
    position: relative;
}

.field-text--success {
    --field-text-background: var(--bx-field-text-success, transparent);
}

.field-text--warning {
    --field-text-background: var(--bx-field-text-warning, transparent);
}

.field-text--danger {
    --field-text-background: var(--bx-field-text-warning, #fe9292);
}

.field-text--edited {
    --field-text-background: var(--bx-field-text-edited, transparent);
}

.field-text_input {
    width: 100%;
    padding: var(--field-text-padding);
    min-height: var(--field-text-min-height);
    box-sizing: border-box;
    border: none;
    background: var(--field-text-background);
}

.field-text_input:not([disabled]) {
    background: var(--field-text-active-background);
}

.field-text_reflect {
    width: auto;
    height: 100%;
    position: absolute;
    opacity: 0;
}

.field-text_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
`;

// src/index.tsx
function FieldText({
  value,
  type,
  className,
  onChange,
  minLength,
  maxLength,
  min,
  max,
  status = "",
  doubleClick
}) {
  const [edit, setEdit] = useState();
  const [edited, setEdited] = useState();
  const [minWidth, setMinWidth] = useState();
  const handlerToggleEdit = () => setEdit(!edit);
  const refInput = useRef();
  const refReflect = useRef();
  useEffect(() => {
    if (edit && refInput.current) {
      refInput.current.focus();
    }
  }, [edit]);
  useEffect(() => {
    setMinWidth(Math.ceil(refReflect.current?.clientWidth || 0));
  }, [value]);
  const handlerTrigger = {
    [doubleClick ? "onDoubleClick" : "onClick"]: handlerToggleEdit
  };
  return /* @__PURE__ */ _jsx("div", {
    className: `field-text field-text--${edited ? "edited" : status} ${edit ? "field-text--opened" : ""} ${className ? className : ""}`,
    style: minWidth ? { "--min-width": `${minWidth}px` } : {}
  }, /* @__PURE__ */ _jsx("div", {
    ref: refReflect,
    className: "field-text_input field-text_reflect"
  }, value), /* @__PURE__ */ _jsx("input", {
    className: "field-text_input",
    disabled: !edit,
    value,
    ref: refInput,
    type,
    minLength,
    maxLength,
    min,
    max,
    onInput: (event) => {
      setEdited(true);
      onChange && onChange(event.currentTarget.value);
    }
  }), !edit && /* @__PURE__ */ _jsx("div", {
    className: "field-text_mask",
    ...handlerTrigger
  }));
}
export {
  FieldText
};
