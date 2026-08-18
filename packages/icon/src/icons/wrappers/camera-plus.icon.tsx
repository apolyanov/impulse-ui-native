import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CameraPlusBoldIcon } from "../bold/camera-plus-bold.icon";
import { CameraPlusDuotoneIcon } from "../duotone/camera-plus-duotone.icon";
import { CameraPlusFillIcon } from "../fill/camera-plus-fill.icon";
import { CameraPlusLightIcon } from "../light/camera-plus-light.icon";
import { CameraPlusRegularIcon } from "../regular/camera-plus-regular.icon";
import { CameraPlusThinIcon } from "../thin/camera-plus-thin.icon";

export const CameraPlusIcon = memo(function CameraPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraPlusBoldIcon,
      duotone: CameraPlusDuotoneIcon,
      fill: CameraPlusFillIcon,
      light: CameraPlusLightIcon,
      regular: CameraPlusRegularIcon,
      thin: CameraPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
