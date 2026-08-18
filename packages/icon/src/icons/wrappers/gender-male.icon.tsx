import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderMaleBoldIcon } from "../bold/gender-male-bold.icon";
import { GenderMaleDuotoneIcon } from "../duotone/gender-male-duotone.icon";
import { GenderMaleFillIcon } from "../fill/gender-male-fill.icon";
import { GenderMaleLightIcon } from "../light/gender-male-light.icon";
import { GenderMaleRegularIcon } from "../regular/gender-male-regular.icon";
import { GenderMaleThinIcon } from "../thin/gender-male-thin.icon";

export const GenderMaleIcon = memo(function GenderMale(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderMaleBoldIcon,
      duotone: GenderMaleDuotoneIcon,
      fill: GenderMaleFillIcon,
      light: GenderMaleLightIcon,
      regular: GenderMaleRegularIcon,
      thin: GenderMaleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
