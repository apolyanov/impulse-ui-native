import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CornersOutBoldIcon } from "../bold/corners-out-bold.icon";
import { CornersOutDuotoneIcon } from "../duotone/corners-out-duotone.icon";
import { CornersOutFillIcon } from "../fill/corners-out-fill.icon";
import { CornersOutLightIcon } from "../light/corners-out-light.icon";
import { CornersOutRegularIcon } from "../regular/corners-out-regular.icon";
import { CornersOutThinIcon } from "../thin/corners-out-thin.icon";

export const CornersOutIcon = memo(function CornersOut(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CornersOutBoldIcon,
      duotone: CornersOutDuotoneIcon,
      fill: CornersOutFillIcon,
      light: CornersOutLightIcon,
      regular: CornersOutRegularIcon,
      thin: CornersOutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
