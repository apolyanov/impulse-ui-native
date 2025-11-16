import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookmarkSimpleBold } from "../bold";
import { BookmarkSimpleDuotone } from "../duotone";
import { BookmarkSimpleFill } from "../fill";
import { BookmarkSimpleLight } from "../light";
import { BookmarkSimpleRegular } from "../regular";
import { BookmarkSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookmarkSimple = memo(function BookmarkSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarkSimpleBold,
      duotone: BookmarkSimpleDuotone,
      fill: BookmarkSimpleFill,
      light: BookmarkSimpleLight,
      regular: BookmarkSimpleRegular,
      thin: BookmarkSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
