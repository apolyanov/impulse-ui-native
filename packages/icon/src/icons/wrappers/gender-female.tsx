import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderFemaleBold } from "../bold";
import { GenderFemaleDuotone } from "../duotone";
import { GenderFemaleFill } from "../fill";
import { GenderFemaleLight } from "../light";
import { GenderFemaleRegular } from "../regular";
import { GenderFemaleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderFemale = memo(function GenderFemale(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderFemaleBold,
      duotone: GenderFemaleDuotone,
      fill: GenderFemaleFill,
      light: GenderFemaleLight,
      regular: GenderFemaleRegular,
      thin: GenderFemaleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
