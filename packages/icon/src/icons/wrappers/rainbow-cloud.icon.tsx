import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RainbowCloudBoldIcon } from "../bold";
import { RainbowCloudDuotoneIcon } from "../duotone";
import { RainbowCloudFillIcon } from "../fill";
import { RainbowCloudLightIcon } from "../light";
import { RainbowCloudRegularIcon } from "../regular";
import { RainbowCloudThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RainbowCloudIcon = memo(function RainbowCloud(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RainbowCloudBoldIcon,
      duotone: RainbowCloudDuotoneIcon,
      fill: RainbowCloudFillIcon,
      light: RainbowCloudLightIcon,
      regular: RainbowCloudRegularIcon,
      thin: RainbowCloudThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
