import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BedBoldIcon } from "../bold";
import { BedDuotoneIcon } from "../duotone";
import { BedFillIcon } from "../fill";
import { BedLightIcon } from "../light";
import { BedRegularIcon } from "../regular";
import { BedThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BedIcon = memo(function Bed(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BedBoldIcon,
      duotone: BedDuotoneIcon,
      fill: BedFillIcon,
      light: BedLightIcon,
      regular: BedRegularIcon,
      thin: BedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
