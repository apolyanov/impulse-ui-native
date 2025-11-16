import { useMemo, useState, type CSSProperties } from "react";
import { useIcons } from "../hooks/use-icons";
import { useTheme } from "../hooks/use-theme.hook";
import { Button } from "./button";

export const DownloadIconsForm = () => {
  const { selectedIcons, renameIcon, clearSelectedIcons } = useIcons();
  const { theme } = useTheme();
  const [suffix, setSuffix] = useState("");

  const selectedItems = Object.values(selectedIcons);
  const selectedCount = selectedItems.length;

  const styles = useMemo<Record<string, CSSProperties>>(
    () => ({
      container: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      },
      input: {
        padding: "8px 12px",
        fontSize: 14,
        borderRadius: 8,
        border: `1px solid ${theme.colors.border}`,
        background: theme.colors.background.primary,
        color: theme.colors.text.primary,
        outline: "none",
        marginTop: 8,
      },
      info: {
        fontSize: 13,
        color: theme.colors.text.secondary,
      },
    }),
    [theme]
  );

  const handleRename = () => {
    if (!suffix.trim() || !selectedCount) return;

    for (const icon of selectedItems) {
      const folder = extractFolderFromPath(icon.path);
      const newName = renameWithSuffix(icon.name, folder, suffix.trim());
      renameIcon(icon.path, newName);
    }

    clearSelectedIcons();
  };

  return (
    <div style={styles.container}>
      <div>
        <label style={styles.info}>
          Add a suffix to selected icons ({selectedCount} selected):
        </label>
        <input
          type="text"
          placeholder="Enter suffix (e.g. outline)"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          style={styles.input}
        />
      </div>

      <Button
        onClick={handleRename}
        disabled={!selectedCount || !suffix.trim()}
        fullWidth
      >
        Rename Selected Icons
      </Button>
    </div>
  );
};

const extractFolderFromPath = (path: string): string => {
  const parts = path.split("/");
  const idx = parts.findIndex((p) => p === "assets");
  return idx >= 0 && idx + 1 < parts.length ? parts[idx + 1] : "unknown";
};

const renameWithSuffix = (fileName: string, folder: string, suffix: string) => {
  const dot = fileName.lastIndexOf(".");
  const ext = dot >= 0 ? fileName.slice(dot) : "";
  const base = dot >= 0 ? fileName.slice(0, dot) : fileName;

  const parts = base.split("-");
  if (parts.length < 3) return `${base}-${folder}-${suffix}${ext}`;

  const beforeTail = parts.slice(0, -2);
  const tail = parts.slice(-2);
  const safeSuffix = suffix.replace(/\s+/g, "-");

  return [...beforeTail, safeSuffix, folder, ...tail].join("-") + ext;
};
