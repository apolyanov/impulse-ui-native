import JSZip from "jszip";
import { useIcons } from "../hooks/use-icons";
import { Button } from "./button";

export const DownloadAllButton = () => {
  const { renamedIcons, clearRenamedIcons } = useIcons();

  const handleDownloadAll = async () => {
    const entries = Object.entries(renamedIcons); // [path, renamedName]
    if (!entries.length) return;

    const zip = new JSZip();

    for (const [path, renamedName] of entries) {
      try {
        // Load raw SVG content dynamically
        const svg = await import(/* @vite-ignore */ `${path}?raw`).then((m) =>
          typeof m === "string" ? m : m.default
        );

        // Extract the folder name (e.g. "bold", "outline")
        const folder = extractFolderFromPath(path);

        // Remove the folder suffix from the renamed filename
        const cleanedName = removeFolderSuffix(renamedName, folder);

        // Add to folder within the ZIP
        zip.folder(folder)?.file(cleanedName, svg);
      } catch (err) {
        console.error(`Failed to include ${path}:`, err);
      }
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "icons-renamed.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    clearRenamedIcons();
  };

  return (
    <Button
      onClick={handleDownloadAll}
      disabled={!Object.keys(renamedIcons).length}
      fullWidth
    >
      Download All Renamed Icons
    </Button>
  );
};

// 🧩 Extract folder from full path (e.g. "/src/assets/bold/icon.svg" → "bold")
const extractFolderFromPath = (path: string): string => {
  const parts = path.split("/");
  const idx = parts.findIndex((p) => p === "assets");
  return idx >= 0 && idx + 1 < parts.length ? parts[idx + 1] : "unknown";
};

// 🧠 Remove folder suffix from the renamed file name
const removeFolderSuffix = (fileName: string, folder: string): string => {
  // e.g. 24-support-bold-outline-lcyjzpsd-.svg → 24-support-outline-lcyjzpsd-.svg
  const regex = new RegExp(`-${folder}-`, "i");
  return fileName.replace(regex, "-");
};
