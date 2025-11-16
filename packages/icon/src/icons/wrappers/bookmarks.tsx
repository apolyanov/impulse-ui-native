import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookmarksBold } from "../bold";
import { BookmarksDuotone } from "../duotone";
import { BookmarksFill } from "../fill";
import { BookmarksLight } from "../light";
import { BookmarksRegular } from "../regular";
import { BookmarksThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bookmarks = memo(function Bookmarks(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarksBold,
      duotone: BookmarksDuotone,
      fill: BookmarksFill,
      light: BookmarksLight,
      regular: BookmarksRegular,
      thin: BookmarksThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
