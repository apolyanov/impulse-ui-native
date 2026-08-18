import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderTransgenderBoldIcon } from "../bold/gender-transgender-bold.icon";
import { GenderTransgenderDuotoneIcon } from "../duotone/gender-transgender-duotone.icon";
import { GenderTransgenderFillIcon } from "../fill/gender-transgender-fill.icon";
import { GenderTransgenderLightIcon } from "../light/gender-transgender-light.icon";
import { GenderTransgenderRegularIcon } from "../regular/gender-transgender-regular.icon";
import { GenderTransgenderThinIcon } from "../thin/gender-transgender-thin.icon";

export const GenderTransgenderIcon = memo(function GenderTransgender(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderTransgenderBoldIcon,
      duotone: GenderTransgenderDuotoneIcon,
      fill: GenderTransgenderFillIcon,
      light: GenderTransgenderLightIcon,
      regular: GenderTransgenderRegularIcon,
      thin: GenderTransgenderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
