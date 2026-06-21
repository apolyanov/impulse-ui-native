import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CornersOutBoldIcon } from "../bold";
import { CornersOutDuotoneIcon } from "../duotone";
import { CornersOutFillIcon } from "../fill";
import { CornersOutLightIcon } from "../light";
import { CornersOutRegularIcon } from "../regular";
import { CornersOutThinIcon } from "../thin";

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
