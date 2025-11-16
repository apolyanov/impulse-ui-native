import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookmarkBold } from "../bold";
import { BookmarkDuotone } from "../duotone";
import { BookmarkFill } from "../fill";
import { BookmarkLight } from "../light";
import { BookmarkRegular } from "../regular";
import { BookmarkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bookmark = memo(function Bookmark(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookmarkBold,
      duotone: BookmarkDuotone,
      fill: BookmarkFill,
      light: BookmarkLight,
      regular: BookmarkRegular,
      thin: BookmarkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
