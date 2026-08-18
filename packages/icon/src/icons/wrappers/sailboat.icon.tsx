import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SailboatBoldIcon } from "../bold/sailboat-bold.icon";
import { SailboatDuotoneIcon } from "../duotone/sailboat-duotone.icon";
import { SailboatFillIcon } from "../fill/sailboat-fill.icon";
import { SailboatLightIcon } from "../light/sailboat-light.icon";
import { SailboatRegularIcon } from "../regular/sailboat-regular.icon";
import { SailboatThinIcon } from "../thin/sailboat-thin.icon";

export const SailboatIcon = memo(function Sailboat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SailboatBoldIcon,
      duotone: SailboatDuotoneIcon,
      fill: SailboatFillIcon,
      light: SailboatLightIcon,
      regular: SailboatRegularIcon,
      thin: SailboatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
