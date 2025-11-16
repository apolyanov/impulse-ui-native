import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CornersOutBold } from "../bold";
import { CornersOutDuotone } from "../duotone";
import { CornersOutFill } from "../fill";
import { CornersOutLight } from "../light";
import { CornersOutRegular } from "../regular";
import { CornersOutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CornersOut = memo(function CornersOut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CornersOutBold,
      duotone: CornersOutDuotone,
      fill: CornersOutFill,
      light: CornersOutLight,
      regular: CornersOutRegular,
      thin: CornersOutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
