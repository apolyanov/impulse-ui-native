import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsOutBoldIcon } from "../bold/arrows-out-bold.icon";
import { ArrowsOutDuotoneIcon } from "../duotone/arrows-out-duotone.icon";
import { ArrowsOutFillIcon } from "../fill/arrows-out-fill.icon";
import { ArrowsOutLightIcon } from "../light/arrows-out-light.icon";
import { ArrowsOutRegularIcon } from "../regular/arrows-out-regular.icon";
import { ArrowsOutThinIcon } from "../thin/arrows-out-thin.icon";

export const ArrowsOutIcon = memo(function ArrowsOut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutBoldIcon,
      duotone: ArrowsOutDuotoneIcon,
      fill: ArrowsOutFillIcon,
      light: ArrowsOutLightIcon,
      regular: ArrowsOutRegularIcon,
      thin: ArrowsOutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
