import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SailboatBoldIcon } from "../bold";
import { SailboatDuotoneIcon } from "../duotone";
import { SailboatFillIcon } from "../fill";
import { SailboatLightIcon } from "../light";
import { SailboatRegularIcon } from "../regular";
import { SailboatThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
