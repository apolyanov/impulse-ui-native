import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CameraPlusBold } from "../bold";
import { CameraPlusDuotone } from "../duotone";
import { CameraPlusFill } from "../fill";
import { CameraPlusLight } from "../light";
import { CameraPlusRegular } from "../regular";
import { CameraPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CameraPlus = memo(function CameraPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraPlusBold,
      duotone: CameraPlusDuotone,
      fill: CameraPlusFill,
      light: CameraPlusLight,
      regular: CameraPlusRegular,
      thin: CameraPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
