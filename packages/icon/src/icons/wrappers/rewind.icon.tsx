import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RewindBoldIcon } from "../bold/rewind-bold.icon";
import { RewindDuotoneIcon } from "../duotone/rewind-duotone.icon";
import { RewindFillIcon } from "../fill/rewind-fill.icon";
import { RewindLightIcon } from "../light/rewind-light.icon";
import { RewindRegularIcon } from "../regular/rewind-regular.icon";
import { RewindThinIcon } from "../thin/rewind-thin.icon";

export const RewindIcon = memo(function Rewind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindBoldIcon,
      duotone: RewindDuotoneIcon,
      fill: RewindFillIcon,
      light: RewindLightIcon,
      regular: RewindRegularIcon,
      thin: RewindThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
