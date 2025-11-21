import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BabyBoldIcon } from "../bold";
import { BabyDuotoneIcon } from "../duotone";
import { BabyFillIcon } from "../fill";
import { BabyLightIcon } from "../light";
import { BabyRegularIcon } from "../regular";
import { BabyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BabyIcon = memo(function Baby(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BabyBoldIcon,
      duotone: BabyDuotoneIcon,
      fill: BabyFillIcon,
      light: BabyLightIcon,
      regular: BabyRegularIcon,
      thin: BabyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
