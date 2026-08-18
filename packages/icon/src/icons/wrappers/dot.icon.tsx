import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotBoldIcon } from "../bold/dot-bold.icon";
import { DotDuotoneIcon } from "../duotone/dot-duotone.icon";
import { DotFillIcon } from "../fill/dot-fill.icon";
import { DotLightIcon } from "../light/dot-light.icon";
import { DotRegularIcon } from "../regular/dot-regular.icon";
import { DotThinIcon } from "../thin/dot-thin.icon";

export const DotIcon = memo(function Dot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotBoldIcon,
      duotone: DotDuotoneIcon,
      fill: DotFillIcon,
      light: DotLightIcon,
      regular: DotRegularIcon,
      thin: DotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
