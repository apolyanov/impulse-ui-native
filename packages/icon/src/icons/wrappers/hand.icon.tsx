import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandBoldIcon } from "../bold/hand-bold.icon";
import { HandDuotoneIcon } from "../duotone/hand-duotone.icon";
import { HandFillIcon } from "../fill/hand-fill.icon";
import { HandLightIcon } from "../light/hand-light.icon";
import { HandRegularIcon } from "../regular/hand-regular.icon";
import { HandThinIcon } from "../thin/hand-thin.icon";

export const HandIcon = memo(function Hand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandBoldIcon,
      duotone: HandDuotoneIcon,
      fill: HandFillIcon,
      light: HandLightIcon,
      regular: HandRegularIcon,
      thin: HandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
