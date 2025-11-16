import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CompassToolBold } from "../bold";
import { CompassToolDuotone } from "../duotone";
import { CompassToolFill } from "../fill";
import { CompassToolLight } from "../light";
import { CompassToolRegular } from "../regular";
import { CompassToolThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CompassTool = memo(function CompassTool(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassToolBold,
      duotone: CompassToolDuotone,
      fill: CompassToolFill,
      light: CompassToolLight,
      regular: CompassToolRegular,
      thin: CompassToolThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
