import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudLightningBoldIcon } from "../bold";
import { CloudLightningDuotoneIcon } from "../duotone";
import { CloudLightningFillIcon } from "../fill";
import { CloudLightningLightIcon } from "../light";
import { CloudLightningRegularIcon } from "../regular";
import { CloudLightningThinIcon } from "../thin";

export const CloudLightningIcon = memo(function CloudLightning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudLightningBoldIcon,
      duotone: CloudLightningDuotoneIcon,
      fill: CloudLightningFillIcon,
      light: CloudLightningLightIcon,
      regular: CloudLightningRegularIcon,
      thin: CloudLightningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
