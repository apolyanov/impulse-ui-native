import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RainbowCloudBold } from "../bold";
import { RainbowCloudDuotone } from "../duotone";
import { RainbowCloudFill } from "../fill";
import { RainbowCloudLight } from "../light";
import { RainbowCloudRegular } from "../regular";
import { RainbowCloudThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RainbowCloud = memo(function RainbowCloud(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RainbowCloudBold,
      duotone: RainbowCloudDuotone,
      fill: RainbowCloudFill,
      light: RainbowCloudLight,
      regular: RainbowCloudRegular,
      thin: RainbowCloudThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
