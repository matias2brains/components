import type { Status } from "@bxreact/theme";
import { InputHTMLAttributes, ReactNode, Ref } from "react";
import "./index.css";
export { FieldSwitch as Switch } from "@bxreact/field-switch";
export * from "./checkbox/checkbox";
export * from "./radio/radio";
export * from "./select/select";
export * from "./textarea/textarea";
declare type Props = {
    error?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    status?: Status;
    reference?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;
export declare function Input({ disabled, error, fullWidth, leftIcon, rightIcon, size, reference, status, ...props }: Props): JSX.Element;
