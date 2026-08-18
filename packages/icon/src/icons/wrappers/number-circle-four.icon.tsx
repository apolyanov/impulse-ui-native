import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleFourBoldIcon } from "../bold/number-circle-four-bold.icon";
import { NumberCircleFourDuotoneIcon } from "../duotone/number-circle-four-duotone.icon";
import { NumberCircleFourFillIcon } from "../fill/number-circle-four-fill.icon";
import { NumberCircleFourLightIcon } from "../light/number-circle-four-light.icon";
import { NumberCircleFourRegularIcon } from "../regular/number-circle-four-regular.icon";
import { NumberCircleFourThinIcon } from "../thin/number-circle-four-thin.icon";

export const NumberCircleFourIcon = memo(function NumberCircleFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleFourBoldIcon,
      duotone: NumberCircleFourDuotoneIcon,
      fill: NumberCircleFourFillIcon,
      light: NumberCircleFourLightIcon,
      regular: NumberCircleFourRegularIcon,
      thin: NumberCircleFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
