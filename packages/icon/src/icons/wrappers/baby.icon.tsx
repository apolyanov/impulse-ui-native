import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BabyBoldIcon } from "../bold/baby-bold.icon";
import { BabyDuotoneIcon } from "../duotone/baby-duotone.icon";
import { BabyFillIcon } from "../fill/baby-fill.icon";
import { BabyLightIcon } from "../light/baby-light.icon";
import { BabyRegularIcon } from "../regular/baby-regular.icon";
import { BabyThinIcon } from "../thin/baby-thin.icon";

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
