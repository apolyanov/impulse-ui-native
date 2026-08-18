import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CornersInBoldIcon } from "../bold/corners-in-bold.icon";
import { CornersInDuotoneIcon } from "../duotone/corners-in-duotone.icon";
import { CornersInFillIcon } from "../fill/corners-in-fill.icon";
import { CornersInLightIcon } from "../light/corners-in-light.icon";
import { CornersInRegularIcon } from "../regular/corners-in-regular.icon";
import { CornersInThinIcon } from "../thin/corners-in-thin.icon";

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
