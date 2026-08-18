import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudXBoldIcon } from "../bold/cloud-x-bold.icon";
import { CloudXDuotoneIcon } from "../duotone/cloud-x-duotone.icon";
import { CloudXFillIcon } from "../fill/cloud-x-fill.icon";
import { CloudXLightIcon } from "../light/cloud-x-light.icon";
import { CloudXRegularIcon } from "../regular/cloud-x-regular.icon";
import { CloudXThinIcon } from "../thin/cloud-x-thin.icon";

export const CloudXIcon = memo(function CloudX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudXBoldIcon,
      duotone: CloudXDuotoneIcon,
      fill: CloudXFillIcon,
      light: CloudXLightIcon,
      regular: CloudXRegularIcon,
      thin: CloudXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
