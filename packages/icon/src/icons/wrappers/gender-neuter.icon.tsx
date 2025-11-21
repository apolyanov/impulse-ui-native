import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderNeuterBoldIcon } from "../bold";
import { GenderNeuterDuotoneIcon } from "../duotone";
import { GenderNeuterFillIcon } from "../fill";
import { GenderNeuterLightIcon } from "../light";
import { GenderNeuterRegularIcon } from "../regular";
import { GenderNeuterThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderNeuterIcon = memo(function GenderNeuter(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderNeuterBoldIcon,
      duotone: GenderNeuterDuotoneIcon,
      fill: GenderNeuterFillIcon,
      light: GenderNeuterLightIcon,
      regular: GenderNeuterRegularIcon,
      thin: GenderNeuterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
