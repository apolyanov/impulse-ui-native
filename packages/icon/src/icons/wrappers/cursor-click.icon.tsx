import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CursorClickBoldIcon } from "../bold/cursor-click-bold.icon";
import { CursorClickDuotoneIcon } from "../duotone/cursor-click-duotone.icon";
import { CursorClickFillIcon } from "../fill/cursor-click-fill.icon";
import { CursorClickLightIcon } from "../light/cursor-click-light.icon";
import { CursorClickRegularIcon } from "../regular/cursor-click-regular.icon";
import { CursorClickThinIcon } from "../thin/cursor-click-thin.icon";

export const CursorClickIcon = memo(function CursorClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CursorClickBoldIcon,
      duotone: CursorClickDuotoneIcon,
      fill: CursorClickFillIcon,
      light: CursorClickLightIcon,
      regular: CursorClickRegularIcon,
      thin: CursorClickThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
