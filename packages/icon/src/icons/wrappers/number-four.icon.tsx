import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberFourBoldIcon } from "../bold/number-four-bold.icon";
import { NumberFourDuotoneIcon } from "../duotone/number-four-duotone.icon";
import { NumberFourFillIcon } from "../fill/number-four-fill.icon";
import { NumberFourLightIcon } from "../light/number-four-light.icon";
import { NumberFourRegularIcon } from "../regular/number-four-regular.icon";
import { NumberFourThinIcon } from "../thin/number-four-thin.icon";

export const NumberFourIcon = memo(function NumberFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberFourBoldIcon,
      duotone: NumberFourDuotoneIcon,
      fill: NumberFourFillIcon,
      light: NumberFourLightIcon,
      regular: NumberFourRegularIcon,
      thin: NumberFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
