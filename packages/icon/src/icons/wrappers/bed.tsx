import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BedBold } from "../bold";
import { BedDuotone } from "../duotone";
import { BedFill } from "../fill";
import { BedLight } from "../light";
import { BedRegular } from "../regular";
import { BedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bed = memo(function Bed(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BedBold,
      duotone: BedDuotone,
      fill: BedFill,
      light: BedLight,
      regular: BedRegular,
      thin: BedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
