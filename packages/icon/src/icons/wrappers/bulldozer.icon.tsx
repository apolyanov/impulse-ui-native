import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BulldozerBoldIcon } from "../bold/bulldozer-bold.icon";
import { BulldozerDuotoneIcon } from "../duotone/bulldozer-duotone.icon";
import { BulldozerFillIcon } from "../fill/bulldozer-fill.icon";
import { BulldozerLightIcon } from "../light/bulldozer-light.icon";
import { BulldozerRegularIcon } from "../regular/bulldozer-regular.icon";
import { BulldozerThinIcon } from "../thin/bulldozer-thin.icon";

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
