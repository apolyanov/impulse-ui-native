import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderNonbinaryBoldIcon } from "../bold";
import { GenderNonbinaryDuotoneIcon } from "../duotone";
import { GenderNonbinaryFillIcon } from "../fill";
import { GenderNonbinaryLightIcon } from "../light";
import { GenderNonbinaryRegularIcon } from "../regular";
import { GenderNonbinaryThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderNonbinaryIcon = memo(function GenderNonbinary(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderNonbinaryBoldIcon,
      duotone: GenderNonbinaryDuotoneIcon,
      fill: GenderNonbinaryFillIcon,
      light: GenderNonbinaryLightIcon,
      regular: GenderNonbinaryRegularIcon,
      thin: GenderNonbinaryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
