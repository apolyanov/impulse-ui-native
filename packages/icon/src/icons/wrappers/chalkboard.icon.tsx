import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChalkboardBoldIcon } from "../bold/chalkboard-bold.icon";
import { ChalkboardDuotoneIcon } from "../duotone/chalkboard-duotone.icon";
import { ChalkboardFillIcon } from "../fill/chalkboard-fill.icon";
import { ChalkboardLightIcon } from "../light/chalkboard-light.icon";
import { ChalkboardRegularIcon } from "../regular/chalkboard-regular.icon";
import { ChalkboardThinIcon } from "../thin/chalkboard-thin.icon";

export const ChalkboardIcon = memo(function Chalkboard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardBoldIcon,
      duotone: ChalkboardDuotoneIcon,
      fill: ChalkboardFillIcon,
      light: ChalkboardLightIcon,
      regular: ChalkboardRegularIcon,
      thin: ChalkboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
