import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { IconsContext } from "../constants";
import type { IconsContextValue } from "../types";
import type { RawSvgModule } from "../utils";

export const IconsProvider = memo(function IconsProvider(
  props: PropsWithChildren
) {
  const [icons, setIcons] = useState<RawSvgModule[]>([]);
  const [selectedIcons, setSelectedIcons] = useState<
    Record<string, RawSvgModule>
  >({});
  const [renamedIcons, setRenamedIcons] = useState<Record<string, string>>({});

  // Toggle selection
  const toggleIcon = useCallback((raw: RawSvgModule) => {
    setSelectedIcons((prev) => {
      const next = { ...prev };
      if (next[raw.path]) delete next[raw.path];
      else next[raw.path] = raw;
      return next;
    });
  }, []);

  // Update renamed filename for an icon
  const renameIcon = useCallback((iconPath: string, newName: string) => {
    setRenamedIcons((prev) => ({
      ...prev,
      [iconPath]: newName,
    }));
  }, []);

  // Clear renamed icons
  const clearRenamedIcons = useCallback(() => {
    setRenamedIcons({});
  }, []);

  const clearSelectedIcons = useCallback(() => {
    setSelectedIcons({});
  }, []);

  useEffect(() => console.log(selectedIcons), [selectedIcons]);

  const value = useMemo<IconsContextValue>(
    () => ({
      icons,
      setIcons,
      selectedIcons,
      toggleIcon,
      renameIcon,
      renamedIcons,
      clearSelectedIcons,
      clearRenamedIcons,
    }),
    [
      icons,
      selectedIcons,
      renamedIcons,
      toggleIcon,
      renameIcon,
      clearSelectedIcons,
      clearRenamedIcons,
    ]
  );

  return (
    <IconsContext.Provider value={value}>
      {props.children}
    </IconsContext.Provider>
  );
});
