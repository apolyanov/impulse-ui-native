import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CornersInBold } from "../bold";
import { CornersInDuotone } from "../duotone";
import { CornersInFill } from "../fill";
import { CornersInLight } from "../light";
import { CornersInRegular } from "../regular";
import { CornersInThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CornersIn = memo(function CornersIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CornersInBold,
      duotone: CornersInDuotone,
      fill: CornersInFill,
      light: CornersInLight,
      regular: CornersInRegular,
      thin: CornersInThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
