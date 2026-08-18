import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderNeuterBoldIcon } from "../bold/gender-neuter-bold.icon";
import { GenderNeuterDuotoneIcon } from "../duotone/gender-neuter-duotone.icon";
import { GenderNeuterFillIcon } from "../fill/gender-neuter-fill.icon";
import { GenderNeuterLightIcon } from "../light/gender-neuter-light.icon";
import { GenderNeuterRegularIcon } from "../regular/gender-neuter-regular.icon";
import { GenderNeuterThinIcon } from "../thin/gender-neuter-thin.icon";

export const GenderNeuterIcon = memo(function GenderNeuter(
  props: IconWrapperProps,
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
