import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RainbowCloudBoldIcon } from "../bold/rainbow-cloud-bold.icon";
import { RainbowCloudDuotoneIcon } from "../duotone/rainbow-cloud-duotone.icon";
import { RainbowCloudFillIcon } from "../fill/rainbow-cloud-fill.icon";
import { RainbowCloudLightIcon } from "../light/rainbow-cloud-light.icon";
import { RainbowCloudRegularIcon } from "../regular/rainbow-cloud-regular.icon";
import { RainbowCloudThinIcon } from "../thin/rainbow-cloud-thin.icon";

export const RainbowCloudIcon = memo(function RainbowCloud(
  props: IconWrapperProps,
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
