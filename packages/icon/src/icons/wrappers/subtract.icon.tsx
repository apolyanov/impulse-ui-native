import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtractBoldIcon } from "../bold";
import { SubtractDuotoneIcon } from "../duotone";
import { SubtractFillIcon } from "../fill";
import { SubtractLightIcon } from "../light";
import { SubtractRegularIcon } from "../regular";
import { SubtractThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubtractIcon = memo(function Subtract(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtractBoldIcon,
      duotone: SubtractDuotoneIcon,
      fill: SubtractFillIcon,
      light: SubtractLightIcon,
      regular: SubtractRegularIcon,
      thin: SubtractThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
