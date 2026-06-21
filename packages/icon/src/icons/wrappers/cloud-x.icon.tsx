import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudXBoldIcon } from "../bold";
import { CloudXDuotoneIcon } from "../duotone";
import { CloudXFillIcon } from "../fill";
import { CloudXLightIcon } from "../light";
import { CloudXRegularIcon } from "../regular";
import { CloudXThinIcon } from "../thin";

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
