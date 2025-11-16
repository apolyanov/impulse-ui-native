import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderNeuterBold } from "../bold";
import { GenderNeuterDuotone } from "../duotone";
import { GenderNeuterFill } from "../fill";
import { GenderNeuterLight } from "../light";
import { GenderNeuterRegular } from "../regular";
import { GenderNeuterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderNeuter = memo(function GenderNeuter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderNeuterBold,
      duotone: GenderNeuterDuotone,
      fill: GenderNeuterFill,
      light: GenderNeuterLight,
      regular: GenderNeuterRegular,
      thin: GenderNeuterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
