import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CursorTextBoldIcon } from "../bold/cursor-text-bold.icon";
import { CursorTextDuotoneIcon } from "../duotone/cursor-text-duotone.icon";
import { CursorTextFillIcon } from "../fill/cursor-text-fill.icon";
import { CursorTextLightIcon } from "../light/cursor-text-light.icon";
import { CursorTextRegularIcon } from "../regular/cursor-text-regular.icon";
import { CursorTextThinIcon } from "../thin/cursor-text-thin.icon";

export const CursorTextIcon = memo(function CursorText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorTextBoldIcon,
      duotone: CursorTextDuotoneIcon,
      fill: CursorTextFillIcon,
      light: CursorTextLightIcon,
      regular: CursorTextRegularIcon,
      thin: CursorTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
