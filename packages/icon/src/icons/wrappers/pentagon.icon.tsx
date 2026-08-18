import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PentagonBoldIcon } from "../bold/pentagon-bold.icon";
import { PentagonDuotoneIcon } from "../duotone/pentagon-duotone.icon";
import { PentagonFillIcon } from "../fill/pentagon-fill.icon";
import { PentagonLightIcon } from "../light/pentagon-light.icon";
import { PentagonRegularIcon } from "../regular/pentagon-regular.icon";
import { PentagonThinIcon } from "../thin/pentagon-thin.icon";

export const PentagonIcon = memo(function Pentagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PentagonBoldIcon,
      duotone: PentagonDuotoneIcon,
      fill: PentagonFillIcon,
      light: PentagonLightIcon,
      regular: PentagonRegularIcon,
      thin: PentagonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
