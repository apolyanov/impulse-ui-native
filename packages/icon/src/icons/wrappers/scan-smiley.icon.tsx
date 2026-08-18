import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScanSmileyBoldIcon } from "../bold/scan-smiley-bold.icon";
import { ScanSmileyDuotoneIcon } from "../duotone/scan-smiley-duotone.icon";
import { ScanSmileyFillIcon } from "../fill/scan-smiley-fill.icon";
import { ScanSmileyLightIcon } from "../light/scan-smiley-light.icon";
import { ScanSmileyRegularIcon } from "../regular/scan-smiley-regular.icon";
import { ScanSmileyThinIcon } from "../thin/scan-smiley-thin.icon";

export const ScanSmileyIcon = memo(function ScanSmiley(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScanSmileyBoldIcon,
      duotone: ScanSmileyDuotoneIcon,
      fill: ScanSmileyFillIcon,
      light: ScanSmileyLightIcon,
      regular: ScanSmileyRegularIcon,
      thin: ScanSmileyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
