import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BabyBold } from "../bold";
import { BabyDuotone } from "../duotone";
import { BabyFill } from "../fill";
import { BabyLight } from "../light";
import { BabyRegular } from "../regular";
import { BabyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Baby = memo(function Baby(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BabyBold,
      duotone: BabyDuotone,
      fill: BabyFill,
      light: BabyLight,
      regular: BabyRegular,
      thin: BabyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
