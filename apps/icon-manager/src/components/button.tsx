import { useMemo, type ButtonHTMLAttributes, type CSSProperties } from "react";
import { useTheme } from "../hooks/use-theme.hook";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: boolean;
}

export const Button = ({
  variant = "solid",
  size = "md",
  fullWidth = false,
  rounded = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const base: CSSProperties = {
      cursor: disabled ? "not-allowed" : "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      borderRadius: rounded ? 9999 : 8,
      transition: "all 0.2s ease",
      width: fullWidth ? "100%" : "auto",
      opacity: disabled ? 0.5 : 1,
      userSelect: "none",
    };

    // 🧱 Sizes
    const sizes: Record<ButtonSize, CSSProperties> = {
      sm: { fontSize: 13, padding: "4px 10px", height: 32 },
      md: { fontSize: 14, padding: "6px 14px", height: 40 },
      lg: { fontSize: 16, padding: "8px 18px", height: 48 },
    };

    // 🎨 Variants for monochrome theme
    const variants: Record<ButtonVariant, CSSProperties> = {
      solid: {
        background: theme.colors.text.primary, // usually black in light mode, white in dark mode
        color: theme.colors.background.primary,
        border: `2px solid ${theme.colors.text.primary}`,
      },
      outline: {
        background: "transparent",
        color: theme.colors.text.primary,
        border: `2px solid ${theme.colors.text.primary}`,
      },
      ghost: {
        background: "transparent",
        color: theme.colors.text.primary,
        border: "2px solid transparent",
      },
    };

    return {
      ...base,
      ...sizes[size],
      ...variants[variant],
    };
  }, [theme, variant, size, fullWidth, rounded, disabled]);

  const hoverStyle: CSSProperties = useMemo(() => {
    if (disabled) return {};
    switch (variant) {
      case "solid":
        return { filter: "brightness(0.9)" };
      case "outline":
        return {
          background: theme.colors.text.primary,
          color: theme.colors.background.primary,
        };
      case "ghost":
        return { background: theme.colors.background.secondary };
      default:
        return {};
    }
  }, [variant, disabled, theme]);

  return (
    <button
      {...rest}
      disabled={disabled}
      style={styles}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles)}
    >
      {children}
    </button>
  );
};
