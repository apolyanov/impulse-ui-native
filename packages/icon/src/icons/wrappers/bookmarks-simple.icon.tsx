import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookmarksSimpleBoldIcon } from "../bold/bookmarks-simple-bold.icon";
import { BookmarksSimpleDuotoneIcon } from "../duotone/bookmarks-simple-duotone.icon";
import { BookmarksSimpleFillIcon } from "../fill/bookmarks-simple-fill.icon";
import { BookmarksSimpleLightIcon } from "../light/bookmarks-simple-light.icon";
import { BookmarksSimpleRegularIcon } from "../regular/bookmarks-simple-regular.icon";
import { BookmarksSimpleThinIcon } from "../thin/bookmarks-simple-thin.icon";

export const BookmarksSimpleIcon = memo(function BookmarksSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarksSimpleBoldIcon,
      duotone: BookmarksSimpleDuotoneIcon,
      fill: BookmarksSimpleFillIcon,
      light: BookmarksSimpleLightIcon,
      regular: BookmarksSimpleRegularIcon,
      thin: BookmarksSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
