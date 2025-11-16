import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScanBold } from "../bold";
import { ScanDuotone } from "../duotone";
import { ScanFill } from "../fill";
import { ScanLight } from "../light";
import { ScanRegular } from "../regular";
import { ScanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scan = memo(function Scan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScanBold,
      duotone: ScanDuotone,
      fill: ScanFill,
      light: ScanLight,
      regular: ScanRegular,
      thin: ScanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
