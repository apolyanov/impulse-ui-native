import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CursorBoldIcon } from "../bold/cursor-bold.icon";
import { CursorDuotoneIcon } from "../duotone/cursor-duotone.icon";
import { CursorFillIcon } from "../fill/cursor-fill.icon";
import { CursorLightIcon } from "../light/cursor-light.icon";
import { CursorRegularIcon } from "../regular/cursor-regular.icon";
import { CursorThinIcon } from "../thin/cursor-thin.icon";

export const CursorIcon = memo(function Cursor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorBoldIcon,
      duotone: CursorDuotoneIcon,
      fill: CursorFillIcon,
      light: CursorLightIcon,
      regular: CursorRegularIcon,
      thin: CursorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
