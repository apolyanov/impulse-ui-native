import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BedBoldIcon } from "../bold/bed-bold.icon";
import { BedDuotoneIcon } from "../duotone/bed-duotone.icon";
import { BedFillIcon } from "../fill/bed-fill.icon";
import { BedLightIcon } from "../light/bed-light.icon";
import { BedRegularIcon } from "../regular/bed-regular.icon";
import { BedThinIcon } from "../thin/bed-thin.icon";

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
