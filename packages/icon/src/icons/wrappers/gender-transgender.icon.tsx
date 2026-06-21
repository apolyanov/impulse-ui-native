import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderTransgenderBoldIcon } from "../bold";
import { GenderTransgenderDuotoneIcon } from "../duotone";
import { GenderTransgenderFillIcon } from "../fill";
import { GenderTransgenderLightIcon } from "../light";
import { GenderTransgenderRegularIcon } from "../regular";
import { GenderTransgenderThinIcon } from "../thin";

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
