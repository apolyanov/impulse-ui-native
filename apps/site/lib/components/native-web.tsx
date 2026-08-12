"use client";

import type { SystemIconName } from "@/lib/icons/system-icon";
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { memo } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";
import { classNames } from "@/lib/utils/class-names";

export type NativeSize = "small" | "medium" | "large";
export type NativeVariant = "filled" | "outlined" | "soft" | "ghost" | "plain";

const buttonBase =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-xs rounded-md border-sm font-montserrat text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 active:opacity-70 disabled:pointer-events-none disabled:cursor-default";

const buttonSizes: Record<NativeSize, string> = {
  small: "h-component-small px-mxs py-[6px] text-xsm",
  medium: "h-component-medium px-sm py-xs text-sm",
  large: "h-component-large px-5 py-[10px] text-sm",
};

const buttonVariants: Record<NativeVariant, string> = {
  filled:
    "border-primary bg-primary text-primary-contrast disabled:border-neutral-5 disabled:bg-neutral-5 disabled:text-text-disabled",
  outlined:
    "border-primary bg-transparent text-primary disabled:border-neutral-5 disabled:text-text-disabled",
  soft: "border-secondary bg-secondary text-secondary-contrast disabled:border-neutral-3 disabled:bg-neutral-3 disabled:text-text-disabled",
  ghost:
    "border-transparent bg-transparent text-primary disabled:text-text-disabled",
  plain:
    "border-transparent bg-transparent text-primary disabled:text-text-disabled",
};

export interface WebButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: NativeSize;
  variant?: NativeVariant;
  loading?: boolean;
}

export const WebButton = memo(function WebButton({
  size = "medium",
  variant = "filled",
  loading,
  disabled,
  className,
  children,
  ...props
}: WebButtonProps) {
  return (
    <button
      className={classNames(
        buttonBase,
        buttonSizes[size],
        buttonVariants[variant],
        className,
      )}
      aria-busy={loading ?? undefined}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <span className="size-sm animate-spin rounded-round border-md border-current border-r-transparent" />
      ) : (
        children
      )}
    </button>
  );
});

export interface WebIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: SystemIconName;
  label: string;
  size?: NativeSize;
  variant?: NativeVariant;
}

const iconButtonSizes: Record<NativeSize, string> = {
  small: "size-component-small p-[6px]",
  medium: "size-component-medium p-xs",
  large: "size-component-large p-[10px]",
};

export const WebIconButton = memo(function WebIconButton({
  icon,
  label,
  size = "medium",
  variant = "filled",
  className,
  ...props
}: WebIconButtonProps) {
  return (
    <button
      aria-label={label}
      className={classNames(
        buttonBase,
        iconButtonSizes[size],
        buttonVariants[variant],
        className,
      )}
      {...props}
    >
      <SystemIcon className="size-full" name={icon} />
    </button>
  );
});

type TagColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

const tagColors: Record<TagColor, Record<NativeVariant, string>> = {
  primary: {
    filled: "border-primary bg-primary text-primary-contrast",
    outlined: "border-primary bg-transparent text-primary",
    soft: "border-primary-contrast bg-primary-contrast text-primary",
    ghost: "border-transparent bg-transparent text-primary",
    plain: "border-transparent bg-transparent text-primary",
  },
  secondary: {
    filled: "border-secondary bg-secondary text-secondary-contrast",
    outlined: "border-secondary bg-transparent text-secondary",
    soft: "border-secondary-contrast bg-secondary-contrast text-secondary",
    ghost: "border-transparent bg-transparent text-secondary-contrast",
    plain: "border-transparent bg-transparent text-secondary-contrast",
  },
  error: {
    filled:
      "border-feedback-error bg-feedback-error text-feedback-error-contrast",
    outlined: "border-feedback-error bg-transparent text-feedback-error",
    soft: "border-feedback-error-contrast bg-feedback-error-contrast text-feedback-error",
    ghost: "border-transparent bg-transparent text-feedback-error",
    plain: "border-transparent bg-transparent text-feedback-error",
  },
  warning: {
    filled:
      "border-feedback-warning bg-feedback-warning text-feedback-warning-contrast",
    outlined: "border-feedback-warning bg-transparent text-feedback-warning",
    soft: "border-feedback-warning-contrast bg-feedback-warning-contrast text-feedback-warning",
    ghost: "border-transparent bg-transparent text-feedback-warning",
    plain: "border-transparent bg-transparent text-feedback-warning",
  },
  success: {
    filled:
      "border-feedback-success bg-feedback-success text-feedback-success-contrast",
    outlined: "border-feedback-success bg-transparent text-feedback-success",
    soft: "border-feedback-success-contrast bg-feedback-success-contrast text-feedback-success",
    ghost: "border-transparent bg-transparent text-feedback-success",
    plain: "border-transparent bg-transparent text-feedback-success",
  },
  info: {
    filled: "border-feedback-info bg-feedback-info text-feedback-info-contrast",
    outlined: "border-feedback-info bg-transparent text-feedback-info",
    soft: "border-feedback-info-contrast bg-feedback-info-contrast text-feedback-info",
    ghost: "border-transparent bg-transparent text-feedback-info",
    plain: "border-transparent bg-transparent text-feedback-info",
  },
};

const tagSizes: Record<NativeSize, string> = {
  small: "h-6 min-w-xl px-xs text-caption",
  medium: "h-7 min-w-xxl px-xs text-xsm leading-xs",
  large: "h-8 min-w-xxl px-mxs text-xsm leading-xs",
};

export function WebTag({
  children,
  color = "primary",
  variant = "filled",
  size = "medium",
  disabled,
  closable,
}: {
  children: ReactNode;
  color?: TagColor;
  variant?: NativeVariant;
  size?: NativeSize;
  disabled?: boolean;
  closable?: boolean;
}) {
  return (
    <span
      className={classNames(
        "inline-flex items-center justify-center gap-xxs rounded-round border-sm",
        tagSizes[size],
        tagColors[color][variant],
        disabled &&
          "border-neutral-6 bg-neutral-4 text-text-disabled opacity-70",
      )}
    >
      {children}
      {closable && !disabled ? (
        <SystemIcon className="size-sm" name="x" />
      ) : null}
    </span>
  );
}

const controlSizes: Record<NativeSize, string> = {
  small: "h-component-small text-caption",
  medium: "h-component-medium text-xsm",
  large: "h-component-large text-sm",
};

const controlVariants: Record<NativeVariant, string> = {
  filled: "border-transparent bg-surface-secondary",
  outlined: "border-neutral-5 bg-transparent",
  soft: "border-transparent bg-accent text-accent-contrast",
  ghost: "border-transparent bg-transparent",
  plain: "border-transparent bg-transparent",
};

export function WebControl({
  label,
  error,
  disabled,
  size = "medium",
  variant = "outlined",
  prefix,
  suffix,
  children,
  className,
}: {
  label?: string;
  error?: string;
  disabled?: boolean;
  size?: NativeSize;
  variant?: NativeVariant;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={classNames("block w-full", className)}>
      {label ? (
        <span
          className={classNames(
            "mb-xxs block text-xsm leading-xsm text-text-secondary",
            error && "text-feedback-error",
            disabled && "text-text-disabled",
          )}
        >
          {label}
        </span>
      ) : null}
      <span
        className={classNames(
          "flex w-full items-center rounded-sm border-sm px-xs",
          controlSizes[size],
          controlVariants[variant],
          error && "border-feedback-error",
          disabled && "border-neutral-5 bg-neutral-2 opacity-70",
        )}
      >
        {prefix ? (
          <span className="mx-xxs text-text-secondary">{prefix}</span>
        ) : null}
        {children}
        {suffix ? (
          <span className="mx-xxs text-text-secondary">{suffix}</span>
        ) : null}
      </span>
      {error ? (
        <span className="mt-xxs block text-caption text-feedback-error">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function WebInput({
  label,
  error,
  size,
  variant,
  prefixIcon,
  suffixIcon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  size?: NativeSize;
  variant?: NativeVariant;
  prefixIcon?: SystemIconName;
  suffixIcon?: SystemIconName;
}) {
  return (
    <WebControl
      disabled={props.disabled}
      error={error}
      label={label}
      prefix={
        prefixIcon ? <SystemIcon className="size-sm" name={prefixIcon} /> : null
      }
      size={size}
      suffix={
        suffixIcon ? <SystemIcon className="size-sm" name={suffixIcon} /> : null
      }
      variant={variant}
    >
      <input
        className="min-w-0 flex-1 bg-transparent px-xxs outline-none placeholder:text-text-disabled disabled:text-text-disabled"
        {...props}
      />
    </WebControl>
  );
}

export function SkeletonBone({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={classNames(
        "block animate-skeleton-native rounded-sm border border-neutral-5 bg-neutral-5",
        className,
      )}
      {...props}
    />
  );
}

export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="mb-xs text-overline uppercase text-text-disabled">
        {label}
      </p>
      <div className="flex flex-wrap gap-xxs">
        {options.map((option) => (
          <WebButton
            className="capitalize"
            key={option}
            onClick={() => onChange(option)}
            size="small"
            variant={option === value ? "filled" : "outlined"}
          >
            {option}
          </WebButton>
        ))}
      </div>
    </div>
  );
}
