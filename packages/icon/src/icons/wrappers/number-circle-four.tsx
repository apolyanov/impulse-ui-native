import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleFourBold } from "../bold";
import { NumberCircleFourDuotone } from "../duotone";
import { NumberCircleFourFill } from "../fill";
import { NumberCircleFourLight } from "../light";
import { NumberCircleFourRegular } from "../regular";
import { NumberCircleFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleFour = memo(function NumberCircleFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleFourBold,
      duotone: NumberCircleFourDuotone,
      fill: NumberCircleFourFill,
      light: NumberCircleFourLight,
      regular: NumberCircleFourRegular,
      thin: NumberCircleFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
