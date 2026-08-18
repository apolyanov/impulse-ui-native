import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScanBoldIcon } from "../bold/scan-bold.icon";
import { ScanDuotoneIcon } from "../duotone/scan-duotone.icon";
import { ScanFillIcon } from "../fill/scan-fill.icon";
import { ScanLightIcon } from "../light/scan-light.icon";
import { ScanRegularIcon } from "../regular/scan-regular.icon";
import { ScanThinIcon } from "../thin/scan-thin.icon";

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
