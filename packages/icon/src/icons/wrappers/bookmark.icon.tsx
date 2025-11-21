import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookmarkBoldIcon } from "../bold";
import { BookmarkDuotoneIcon } from "../duotone";
import { BookmarkFillIcon } from "../fill";
import { BookmarkLightIcon } from "../light";
import { BookmarkRegularIcon } from "../regular";
import { BookmarkThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
