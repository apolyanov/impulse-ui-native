import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LadderSimpleBoldIcon } from "../bold/ladder-simple-bold.icon";
import { LadderSimpleDuotoneIcon } from "../duotone/ladder-simple-duotone.icon";
import { LadderSimpleFillIcon } from "../fill/ladder-simple-fill.icon";
import { LadderSimpleLightIcon } from "../light/ladder-simple-light.icon";
import { LadderSimpleRegularIcon } from "../regular/ladder-simple-regular.icon";
import { LadderSimpleThinIcon } from "../thin/ladder-simple-thin.icon";

export const LadderSimpleIcon = memo(function LadderSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LadderSimpleBoldIcon,
      duotone: LadderSimpleDuotoneIcon,
      fill: LadderSimpleFillIcon,
      light: LadderSimpleLightIcon,
      regular: LadderSimpleRegularIcon,
      thin: LadderSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
