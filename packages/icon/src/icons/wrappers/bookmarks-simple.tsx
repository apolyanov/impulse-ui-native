import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookmarksSimpleBold } from "../bold";
import { BookmarksSimpleDuotone } from "../duotone";
import { BookmarksSimpleFill } from "../fill";
import { BookmarksSimpleLight } from "../light";
import { BookmarksSimpleRegular } from "../regular";
import { BookmarksSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookmarksSimple = memo(function BookmarksSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarksSimpleBold,
      duotone: BookmarksSimpleDuotone,
      fill: BookmarksSimpleFill,
      light: BookmarksSimpleLight,
      regular: BookmarksSimpleRegular,
      thin: BookmarksSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
