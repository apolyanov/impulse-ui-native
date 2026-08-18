import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookmarksBoldIcon } from "../bold/bookmarks-bold.icon";
import { BookmarksDuotoneIcon } from "../duotone/bookmarks-duotone.icon";
import { BookmarksFillIcon } from "../fill/bookmarks-fill.icon";
import { BookmarksLightIcon } from "../light/bookmarks-light.icon";
import { BookmarksRegularIcon } from "../regular/bookmarks-regular.icon";
import { BookmarksThinIcon } from "../thin/bookmarks-thin.icon";

export const BookmarksIcon = memo(function Bookmarks(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarksBoldIcon,
      duotone: BookmarksDuotoneIcon,
      fill: BookmarksFillIcon,
      light: BookmarksLightIcon,
      regular: BookmarksRegularIcon,
      thin: BookmarksThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
