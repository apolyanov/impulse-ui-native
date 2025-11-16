import { useVirtualizer } from "@tanstack/react-virtual";
import { memo, useEffect, useMemo, useState } from "react";
import { useFilters } from "../hooks/use-filter.hook";
import { useIcons } from "../hooks/use-icons";
import { useTheme } from "../hooks/use-theme.hook";
import { loadIcons, type GroupedIcons, type RawSvgModule } from "../utils";
import { Button } from "./button";
import { DownloadIconsForm } from "./donwload-icons-form";
import { DownloadAllButton } from "./download-all";
import { Icon } from "./icon";
import { Modal } from "./modal";

export const AllIconsGrid = memo(function AllIconsGrid() {
  const { activeFilter, query } = useFilters();

  const [groupedIcons, setGroupedIcons] = useState<GroupedIcons>({});
  const [groupedRows, setGroupedRows] = useState<
    { folder: string; icons: RawSvgModule[] }[]
  >([]);
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);
  const [iconsPerRow, setIconsPerRow] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { theme } = useTheme();
  const { selectedIcons, toggleIcon, renamedIcons } = useIcons();

  // 🧱 Layout calculation
  useEffect(() => {
    if (!parentRef) return;

    const calculateLayout = () => {
      const width = parentRef.offsetWidth;
      const perRow = Math.max(1, Math.floor(width / 148));
      setIconsPerRow(perRow);
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [parentRef]);

  // 🧱 Virtualizer setup with dynamic row height
  const rowVirtualizer = useVirtualizer({
    count: groupedRows.length,
    getScrollElement: () => parentRef,
    estimateSize: (index) => {
      const row = groupedRows[index];
      return row.icons.length === 0 ? 40 : 148; // headers are shorter
    },
    overscan: 5,
  });

  // 🧩 Load icons grouped by folder
  useEffect(() => {
    loadIcons().then(setGroupedIcons);
  }, []);

  // 🧩 Filter and regroup icons
  useEffect(() => {
    if (!iconsPerRow || !Object.keys(groupedIcons).length) return;

    const newRows: { folder: string; icons: RawSvgModule[] }[] = [];

    Object.entries(groupedIcons).forEach(([folder, icons]) => {
      const filtered = icons.filter((icon) => {
        const matchesFilter =
          activeFilter === "all"
            ? true
            : icon.path.toLowerCase().includes(activeFilter.toLowerCase());
        const matchesQuery = icon.name
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesFilter && matchesQuery;
      });

      if (!filtered.length) return;

      // Header row marker (no icons, just folder label)
      newRows.push({ folder, icons: [] });

      // Chunk icons into rows
      for (let i = 0; i < filtered.length; i += iconsPerRow) {
        newRows.push({
          folder,
          icons: filtered.slice(i, i + iconsPerRow),
        });
      }
    });

    setGroupedRows(newRows);
  }, [groupedIcons, iconsPerRow, activeFilter, query]);

  // 🧩 Handlers
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const allIconsCount = useMemo(
    () => Object.values(groupedIcons).flat().length,
    [groupedIcons]
  );

  return (
    <>
      {/* Header bar */}
      <div
        style={{
          marginTop: 16,
          width: "100%",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        <span
          style={{
            textAlign: "center",
            overflow: "hidden",
            color: theme.colors.text.primary,
          }}
        >
          Total icons {allIconsCount}
        </span>

        {/* 🧭 Export button */}
        <Button
          onClick={handleOpenModal}
          disabled={!Object.keys(selectedIcons).length}
        >
          Rename
        </Button>
        <DownloadAllButton />
      </div>

      {/* 🧱 Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Download Selected Icons"
      >
        <DownloadIconsForm />
      </Modal>

      {/* 🧩 Virtualized grid */}
      <div
        style={{
          marginTop: 16,
          height: "calc(100vh - 120px)",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          ref={setParentRef}
          style={{
            height: "100%",
            width: "100%",
            overflow: "auto",
            position: "relative",
          }}
          className="no-scrollbar"
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const { folder, icons } = groupedRows[virtualRow.index];

              // 🏷 Folder header row
              if (icons.length === 0) {
                return (
                  <div
                    key={`header-${folder}-${virtualRow.index}`}
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: 40,
                      transform: `translateY(${virtualRow.start}px)`,
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 32,
                      color: theme.colors.text.secondary,
                      fontWeight: 500,
                      borderBottom: `1px solid ${theme.colors.border}`,
                      backgroundColor: "#111214",
                      boxSizing: "border-box",
                    }}
                  >
                    {folder.toUpperCase()}
                  </div>
                );
              }

              // 🧱 Icon row
              return (
                <div
                  key={`row-${virtualRow.index}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                    display: "flex",
                    gap: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  {icons.map((icon) => (
                    <Icon
                      onClick={() => toggleIcon(icon)}
                      renamed={Boolean(renamedIcons[icon.path])}
                      selected={Boolean(selectedIcons[icon.path])}
                      key={icon.name}
                      svg={icon}
                      color="white"
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
