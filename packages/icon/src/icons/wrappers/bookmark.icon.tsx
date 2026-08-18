import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookmarkBoldIcon } from "../bold/bookmark-bold.icon";
import { BookmarkDuotoneIcon } from "../duotone/bookmark-duotone.icon";
import { BookmarkFillIcon } from "../fill/bookmark-fill.icon";
import { BookmarkLightIcon } from "../light/bookmark-light.icon";
import { BookmarkRegularIcon } from "../regular/bookmark-regular.icon";
import { BookmarkThinIcon } from "../thin/bookmark-thin.icon";

export const BookmarkIcon = memo(function Bookmark(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarkBoldIcon,
      duotone: BookmarkDuotoneIcon,
      fill: BookmarkFillIcon,
      light: BookmarkLightIcon,
      regular: BookmarkRegularIcon,
      thin: BookmarkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
