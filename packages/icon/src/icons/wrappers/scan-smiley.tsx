import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScanSmileyBold } from "../bold";
import { ScanSmileyDuotone } from "../duotone";
import { ScanSmileyFill } from "../fill";
import { ScanSmileyLight } from "../light";
import { ScanSmileyRegular } from "../regular";
import { ScanSmileyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScanSmiley = memo(function ScanSmiley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScanSmileyBold,
      duotone: ScanSmileyDuotone,
      fill: ScanSmileyFill,
      light: ScanSmileyLight,
      regular: ScanSmileyRegular,
      thin: ScanSmileyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
