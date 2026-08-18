import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagicWandBoldIcon } from "../bold/magic-wand-bold.icon";
import { MagicWandDuotoneIcon } from "../duotone/magic-wand-duotone.icon";
import { MagicWandFillIcon } from "../fill/magic-wand-fill.icon";
import { MagicWandLightIcon } from "../light/magic-wand-light.icon";
import { MagicWandRegularIcon } from "../regular/magic-wand-regular.icon";
import { MagicWandThinIcon } from "../thin/magic-wand-thin.icon";

export const MagicWandIcon = memo(function MagicWand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagicWandBoldIcon,
      duotone: MagicWandDuotoneIcon,
      fill: MagicWandFillIcon,
      light: MagicWandLightIcon,
      regular: MagicWandRegularIcon,
      thin: MagicWandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
