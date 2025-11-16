import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EggCrackBold } from "../bold";
import { EggCrackDuotone } from "../duotone";
import { EggCrackFill } from "../fill";
import { EggCrackLight } from "../light";
import { EggCrackRegular } from "../regular";
import { EggCrackThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EggCrack = memo(function EggCrack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EggCrackBold,
      duotone: EggCrackDuotone,
      fill: EggCrackFill,
      light: EggCrackLight,
      regular: EggCrackRegular,
      thin: EggCrackThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
