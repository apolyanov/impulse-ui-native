import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleFourBoldIcon } from "../bold";
import { NumberCircleFourDuotoneIcon } from "../duotone";
import { NumberCircleFourFillIcon } from "../fill";
import { NumberCircleFourLightIcon } from "../light";
import { NumberCircleFourRegularIcon } from "../regular";
import { NumberCircleFourThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleFourIcon = memo(function NumberCircleFour(
  props: IconWrapperProps
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
