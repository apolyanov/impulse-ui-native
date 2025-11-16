import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookBookmarkBold } from "../bold";
import { BookBookmarkDuotone } from "../duotone";
import { BookBookmarkFill } from "../fill";
import { BookBookmarkLight } from "../light";
import { BookBookmarkRegular } from "../regular";
import { BookBookmarkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookBookmark = memo(function BookBookmark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookBookmarkBold,
      duotone: BookBookmarkDuotone,
      fill: BookBookmarkFill,
      light: BookBookmarkLight,
      regular: BookBookmarkRegular,
      thin: BookBookmarkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
