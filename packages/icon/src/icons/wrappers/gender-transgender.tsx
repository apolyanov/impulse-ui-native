import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderTransgenderBold } from "../bold";
import { GenderTransgenderDuotone } from "../duotone";
import { GenderTransgenderFill } from "../fill";
import { GenderTransgenderLight } from "../light";
import { GenderTransgenderRegular } from "../regular";
import { GenderTransgenderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderTransgender = memo(function GenderTransgender(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderTransgenderBold,
      duotone: GenderTransgenderDuotone,
      fill: GenderTransgenderFill,
      light: GenderTransgenderLight,
      regular: GenderTransgenderRegular,
      thin: GenderTransgenderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
