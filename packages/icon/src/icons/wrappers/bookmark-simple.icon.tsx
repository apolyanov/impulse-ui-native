import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookmarkSimpleBoldIcon } from "../bold/bookmark-simple-bold.icon";
import { BookmarkSimpleDuotoneIcon } from "../duotone/bookmark-simple-duotone.icon";
import { BookmarkSimpleFillIcon } from "../fill/bookmark-simple-fill.icon";
import { BookmarkSimpleLightIcon } from "../light/bookmark-simple-light.icon";
import { BookmarkSimpleRegularIcon } from "../regular/bookmark-simple-regular.icon";
import { BookmarkSimpleThinIcon } from "../thin/bookmark-simple-thin.icon";

export const BookmarkSimpleIcon = memo(function BookmarkSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarkSimpleBoldIcon,
      duotone: BookmarkSimpleDuotoneIcon,
      fill: BookmarkSimpleFillIcon,
      light: BookmarkSimpleLightIcon,
      regular: BookmarkSimpleRegularIcon,
      thin: BookmarkSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
