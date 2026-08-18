import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookBookmarkBoldIcon } from "../bold/book-bookmark-bold.icon";
import { BookBookmarkDuotoneIcon } from "../duotone/book-bookmark-duotone.icon";
import { BookBookmarkFillIcon } from "../fill/book-bookmark-fill.icon";
import { BookBookmarkLightIcon } from "../light/book-bookmark-light.icon";
import { BookBookmarkRegularIcon } from "../regular/book-bookmark-regular.icon";
import { BookBookmarkThinIcon } from "../thin/book-bookmark-thin.icon";

export const BookBookmarkIcon = memo(function BookBookmark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookBookmarkBoldIcon,
      duotone: BookBookmarkDuotoneIcon,
      fill: BookBookmarkFillIcon,
      light: BookBookmarkLightIcon,
      regular: BookBookmarkRegularIcon,
      thin: BookBookmarkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
