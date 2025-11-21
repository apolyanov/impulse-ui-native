import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CornersInBoldIcon } from "../bold";
import { CornersInDuotoneIcon } from "../duotone";
import { CornersInFillIcon } from "../fill";
import { CornersInLightIcon } from "../light";
import { CornersInRegularIcon } from "../regular";
import { CornersInThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CornersInIcon = memo(function CornersIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CornersInBoldIcon,
      duotone: CornersInDuotoneIcon,
      fill: CornersInFillIcon,
      light: CornersInLightIcon,
      regular: CornersInRegularIcon,
      thin: CornersInThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
