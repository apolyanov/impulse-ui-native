import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChairBoldIcon } from "../bold/chair-bold.icon";
import { ChairDuotoneIcon } from "../duotone/chair-duotone.icon";
import { ChairFillIcon } from "../fill/chair-fill.icon";
import { ChairLightIcon } from "../light/chair-light.icon";
import { ChairRegularIcon } from "../regular/chair-regular.icon";
import { ChairThinIcon } from "../thin/chair-thin.icon";

export const ChairIcon = memo(function Chair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChairBoldIcon,
      duotone: ChairDuotoneIcon,
      fill: ChairFillIcon,
      light: ChairLightIcon,
      regular: ChairRegularIcon,
      thin: ChairThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
