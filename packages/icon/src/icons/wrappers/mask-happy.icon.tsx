import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MaskHappyBoldIcon } from "../bold";
import { MaskHappyDuotoneIcon } from "../duotone";
import { MaskHappyFillIcon } from "../fill";
import { MaskHappyLightIcon } from "../light";
import { MaskHappyRegularIcon } from "../regular";
import { MaskHappyThinIcon } from "../thin";

export const MaskHappyIcon = memo(function MaskHappy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MaskHappyBoldIcon,
      duotone: MaskHappyDuotoneIcon,
      fill: MaskHappyFillIcon,
      light: MaskHappyLightIcon,
      regular: MaskHappyRegularIcon,
      thin: MaskHappyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
