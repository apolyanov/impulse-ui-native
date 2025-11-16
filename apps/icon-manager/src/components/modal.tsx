import { useEffect, useMemo, type CSSProperties, type ReactNode } from "react";
import { useTheme } from "../hooks/use-theme.hook";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  width?: number | string;
}

export const Modal = ({
  open,
  title,
  onClose,
  children,
  width = 420,
}: ModalProps) => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const backdrop: CSSProperties = {
      position: "fixed",
      inset: 0,
      backgroundColor:
        theme.mode === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    };

    const modal: CSSProperties = {
      backgroundColor: theme.colors.background.primary,
      color: theme.colors.text.primary,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: 12,
      width: typeof width === "number" ? `${width}px` : width,
      maxWidth: "90vw",
      boxShadow:
        theme.mode === "dark"
          ? "0 8px 24px rgba(255, 255, 255, 0.08)"
          : "0 8px 24px rgba(0, 0, 0, 0.08)",
      padding: "24px",
      boxSizing: "border-box",
    };

    const header: CSSProperties = {
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 600,
      fontSize: "16px",
    };

    const closeBtn: CSSProperties = {
      cursor: "pointer",
      background: "transparent",
      border: "none",
      color: theme.colors.text.secondary,
      fontSize: "20px",
      lineHeight: "1",
      transition: "color 0.2s ease",
    };

    return { backdrop, modal, header, closeBtn };
  }, [theme, width]);

  // ⌨️ Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {title && (
          <div style={styles.header}>
            <span>{title}</span>
            <button
              onClick={onClose}
              style={styles.closeBtn}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.text.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.text.secondary)
              }
            >
              ×
            </button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
