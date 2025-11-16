import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderNonbinaryBold } from "../bold";
import { GenderNonbinaryDuotone } from "../duotone";
import { GenderNonbinaryFill } from "../fill";
import { GenderNonbinaryLight } from "../light";
import { GenderNonbinaryRegular } from "../regular";
import { GenderNonbinaryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderNonbinary = memo(function GenderNonbinary(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderNonbinaryBold,
      duotone: GenderNonbinaryDuotone,
      fill: GenderNonbinaryFill,
      light: GenderNonbinaryLight,
      regular: GenderNonbinaryRegular,
      thin: GenderNonbinaryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
