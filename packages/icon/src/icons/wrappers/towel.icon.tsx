import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TowelBoldIcon } from "../bold/towel-bold.icon";
import { TowelDuotoneIcon } from "../duotone/towel-duotone.icon";
import { TowelFillIcon } from "../fill/towel-fill.icon";
import { TowelLightIcon } from "../light/towel-light.icon";
import { TowelRegularIcon } from "../regular/towel-regular.icon";
import { TowelThinIcon } from "../thin/towel-thin.icon";

export const TowelIcon = memo(function Towel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TowelBoldIcon,
      duotone: TowelDuotoneIcon,
      fill: TowelFillIcon,
      light: TowelLightIcon,
      regular: TowelRegularIcon,
      thin: TowelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
