import { memo, useMemo, type CSSProperties } from "react";
import { useFilters } from "../hooks/use-filter.hook";
import { useTheme } from "../hooks/use-theme.hook";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const filters = [
  "All",
  "Outline",
  "Bold",
  "Twotone",
  "Bulk",
  "Broken",
  "Linear",
];

export const Filters = memo(function Filters() {
  const { query, setQuery, activeFilter, setActiveFilter } = useFilters();
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const container: CSSProperties = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      height: 48,
      borderRadius: "8px",
      boxSizing: "border-box",
      gap: "12px",
    };

    const searchContainer: CSSProperties = {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: theme.colors.background.primary,
      borderRadius: "8px",
      padding: "6px 12px",
      color: theme.colors.text.primary,
      border: `2px solid ${theme.colors.border}`,
    };

    const searchInput: CSSProperties = {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: theme.colors.text.primary,
      fontSize: "14px",
    };

    const filtersContainer: CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    };

    const filterButtonBase: CSSProperties = {
      border: `2px solid ${theme.colors.border}`,
      borderRadius: "9999px",
      padding: "6px 12px",
      background: "transparent",
      color: theme.colors.text.primary,
      fontSize: "13px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    };

    return {
      container,
      searchContainer,
      searchInput,
      filtersContainer,
      filterButtonBase,
    };
  }, [theme]);

  const FilterButton = ({ label, active, onClick }: FilterButtonProps) => {
    const activeStyle: CSSProperties = active
      ? {
          background: theme.colors.background.primary,
          color: theme.colors.text.primary,
          borderColor: theme.colors.border,
        }
      : {
          background: theme.colors.background.secondary,
          color: theme.colors.text.secondary,
          borderColor: theme.colors.border,
        };

    return (
      <button
        onClick={onClick}
        style={{
          ...styles.filterButtonBase,
          ...activeStyle,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search icons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.filtersContainer}>
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            active={activeFilter === filter.toLowerCase()}
            onClick={() => setActiveFilter(filter.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
});
