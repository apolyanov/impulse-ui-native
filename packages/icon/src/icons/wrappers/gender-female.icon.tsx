import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderFemaleBoldIcon } from "../bold/gender-female-bold.icon";
import { GenderFemaleDuotoneIcon } from "../duotone/gender-female-duotone.icon";
import { GenderFemaleFillIcon } from "../fill/gender-female-fill.icon";
import { GenderFemaleLightIcon } from "../light/gender-female-light.icon";
import { GenderFemaleRegularIcon } from "../regular/gender-female-regular.icon";
import { GenderFemaleThinIcon } from "../thin/gender-female-thin.icon";

export const GenderFemaleIcon = memo(function GenderFemale(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderFemaleBoldIcon,
      duotone: GenderFemaleDuotoneIcon,
      fill: GenderFemaleFillIcon,
      light: GenderFemaleLightIcon,
      regular: GenderFemaleRegularIcon,
      thin: GenderFemaleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
