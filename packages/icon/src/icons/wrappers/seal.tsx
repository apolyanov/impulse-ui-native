import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealBold } from "../bold";
import { SealDuotone } from "../duotone";
import { SealFill } from "../fill";
import { SealLight } from "../light";
import { SealRegular } from "../regular";
import { SealThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Seal = memo(function Seal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealBold,
      duotone: SealDuotone,
      fill: SealFill,
      light: SealLight,
      regular: SealRegular,
      thin: SealThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
