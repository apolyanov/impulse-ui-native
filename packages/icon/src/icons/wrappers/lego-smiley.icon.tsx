import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LegoSmileyBoldIcon } from "../bold/lego-smiley-bold.icon";
import { LegoSmileyDuotoneIcon } from "../duotone/lego-smiley-duotone.icon";
import { LegoSmileyFillIcon } from "../fill/lego-smiley-fill.icon";
import { LegoSmileyLightIcon } from "../light/lego-smiley-light.icon";
import { LegoSmileyRegularIcon } from "../regular/lego-smiley-regular.icon";
import { LegoSmileyThinIcon } from "../thin/lego-smiley-thin.icon";

export const LegoSmileyIcon = memo(function LegoSmiley(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LegoSmileyBoldIcon,
      duotone: LegoSmileyDuotoneIcon,
      fill: LegoSmileyFillIcon,
      light: LegoSmileyLightIcon,
      regular: LegoSmileyRegularIcon,
      thin: LegoSmileyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
