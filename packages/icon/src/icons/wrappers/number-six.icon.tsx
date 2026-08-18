import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSixBoldIcon } from "../bold/number-six-bold.icon";
import { NumberSixDuotoneIcon } from "../duotone/number-six-duotone.icon";
import { NumberSixFillIcon } from "../fill/number-six-fill.icon";
import { NumberSixLightIcon } from "../light/number-six-light.icon";
import { NumberSixRegularIcon } from "../regular/number-six-regular.icon";
import { NumberSixThinIcon } from "../thin/number-six-thin.icon";

export const NumberSixIcon = memo(function NumberSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSixBoldIcon,
      duotone: NumberSixDuotoneIcon,
      fill: NumberSixFillIcon,
      light: NumberSixLightIcon,
      regular: NumberSixRegularIcon,
      thin: NumberSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
