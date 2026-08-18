import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandFistBoldIcon } from "../bold/hand-fist-bold.icon";
import { HandFistDuotoneIcon } from "../duotone/hand-fist-duotone.icon";
import { HandFistFillIcon } from "../fill/hand-fist-fill.icon";
import { HandFistLightIcon } from "../light/hand-fist-light.icon";
import { HandFistRegularIcon } from "../regular/hand-fist-regular.icon";
import { HandFistThinIcon } from "../thin/hand-fist-thin.icon";

export const HandFistIcon = memo(function HandFist(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandFistBoldIcon,
      duotone: HandFistDuotoneIcon,
      fill: HandFistFillIcon,
      light: HandFistLightIcon,
      regular: HandFistRegularIcon,
      thin: HandFistThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
