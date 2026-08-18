import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LadderBoldIcon } from "../bold/ladder-bold.icon";
import { LadderDuotoneIcon } from "../duotone/ladder-duotone.icon";
import { LadderFillIcon } from "../fill/ladder-fill.icon";
import { LadderLightIcon } from "../light/ladder-light.icon";
import { LadderRegularIcon } from "../regular/ladder-regular.icon";
import { LadderThinIcon } from "../thin/ladder-thin.icon";

export const LadderIcon = memo(function Ladder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LadderBoldIcon,
      duotone: LadderDuotoneIcon,
      fill: LadderFillIcon,
      light: LadderLightIcon,
      regular: LadderRegularIcon,
      thin: LadderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
