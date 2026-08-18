import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudSnowBoldIcon } from "../bold/cloud-snow-bold.icon";
import { CloudSnowDuotoneIcon } from "../duotone/cloud-snow-duotone.icon";
import { CloudSnowFillIcon } from "../fill/cloud-snow-fill.icon";
import { CloudSnowLightIcon } from "../light/cloud-snow-light.icon";
import { CloudSnowRegularIcon } from "../regular/cloud-snow-regular.icon";
import { CloudSnowThinIcon } from "../thin/cloud-snow-thin.icon";

export const CloudSnowIcon = memo(function CloudSnow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSnowBoldIcon,
      duotone: CloudSnowDuotoneIcon,
      fill: CloudSnowFillIcon,
      light: CloudSnowLightIcon,
      regular: CloudSnowRegularIcon,
      thin: CloudSnowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
