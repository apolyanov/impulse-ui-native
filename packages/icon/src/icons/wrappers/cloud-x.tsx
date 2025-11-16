import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudXBold } from "../bold";
import { CloudXDuotone } from "../duotone";
import { CloudXFill } from "../fill";
import { CloudXLight } from "../light";
import { CloudXRegular } from "../regular";
import { CloudXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudX = memo(function CloudX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudXBold,
      duotone: CloudXDuotone,
      fill: CloudXFill,
      light: CloudXLight,
      regular: CloudXRegular,
      thin: CloudXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
