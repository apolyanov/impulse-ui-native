import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BulldozerBoldIcon } from "../bold";
import { BulldozerDuotoneIcon } from "../duotone";
import { BulldozerFillIcon } from "../fill";
import { BulldozerLightIcon } from "../light";
import { BulldozerRegularIcon } from "../regular";
import { BulldozerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BulldozerIcon = memo(function Bulldozer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BulldozerBoldIcon,
      duotone: BulldozerDuotoneIcon,
      fill: BulldozerFillIcon,
      light: BulldozerLightIcon,
      regular: BulldozerRegularIcon,
      thin: BulldozerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
