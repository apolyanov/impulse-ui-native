import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScanBoldIcon } from "../bold";
import { ScanDuotoneIcon } from "../duotone";
import { ScanFillIcon } from "../fill";
import { ScanLightIcon } from "../light";
import { ScanRegularIcon } from "../regular";
import { ScanThinIcon } from "../thin";

export const ScanIcon = memo(function Scan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScanBoldIcon,
      duotone: ScanDuotoneIcon,
      fill: ScanFillIcon,
      light: ScanLightIcon,
      regular: ScanRegularIcon,
      thin: ScanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
