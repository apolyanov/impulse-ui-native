import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderNonbinaryBoldIcon } from "../bold/gender-nonbinary-bold.icon";
import { GenderNonbinaryDuotoneIcon } from "../duotone/gender-nonbinary-duotone.icon";
import { GenderNonbinaryFillIcon } from "../fill/gender-nonbinary-fill.icon";
import { GenderNonbinaryLightIcon } from "../light/gender-nonbinary-light.icon";
import { GenderNonbinaryRegularIcon } from "../regular/gender-nonbinary-regular.icon";
import { GenderNonbinaryThinIcon } from "../thin/gender-nonbinary-thin.icon";

export const GenderNonbinaryIcon = memo(function GenderNonbinary(
  props: IconWrapperProps,
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
