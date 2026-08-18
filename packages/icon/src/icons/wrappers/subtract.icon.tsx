import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubtractBoldIcon } from "../bold/subtract-bold.icon";
import { SubtractDuotoneIcon } from "../duotone/subtract-duotone.icon";
import { SubtractFillIcon } from "../fill/subtract-fill.icon";
import { SubtractLightIcon } from "../light/subtract-light.icon";
import { SubtractRegularIcon } from "../regular/subtract-regular.icon";
import { SubtractThinIcon } from "../thin/subtract-thin.icon";

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
